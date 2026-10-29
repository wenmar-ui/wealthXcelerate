import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── config ── */
const HEX_RADIUS = 0.75;


function createCloverShape(radius: number) {
  const shape = new THREE.Shape();
  const petals = 5;
  const points = 100;
  for (let i = 0; i <= points; i++) {
    const theta = (i / points) * Math.PI * 2;
    const r = radius * (0.3 + 0.7 * Math.pow(Math.abs(Math.sin(petals * theta / 2)), 0.4));
    const x = Math.cos(theta) * r;
    const y = Math.sin(theta) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

/* ── instanced hex grid ── */
function HexGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const explodeRef = useRef(0);
  const explodeTarget = useRef(0);

  const lightColor = useMemo(() => new THREE.Color("#64af03"), []);
  const darkColor = useMemo(() => new THREE.Color("hsl(87 97% 20%)"), []);
  const targetColor = useRef(new THREE.Color("#64af03"));

  useEffect(() => {
    const explodeHandler = (e: Event) => {
      explodeTarget.current = (e as CustomEvent).detail.active ? 1 : 0;
    };
    const themeHandler = (e: Event) => {
      const dark = (e as CustomEvent).detail.dark;
      targetColor.current.copy(dark ? darkColor : lightColor);
    };
    window.addEventListener("hex-explode", explodeHandler);
    window.addEventListener("theme-shift", themeHandler);
    return () => {
      window.removeEventListener("hex-explode", explodeHandler);
      window.removeEventListener("theme-shift", themeHandler);
    };
  }, [darkColor, lightColor]);

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const count = 200;
    for (let i = 0; i < count; i++) {
      // Push shapes strongly to the edges, away from center
      const side = Math.random() > 0.5 ? 1 : -1;
      const x = (Math.random() * 16 + 14) * side + (Math.random() - 0.5) * 4;
      const y = (Math.random() - 0.5) * 32;
      const z = (Math.random() - 0.5) * 6;
      pos.push([x, y, z]);
    }
    // Sparse deep-background elements
    for (let i = 0; i < 25; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 28;
      const z = (Math.random() - 0.5) * 12 - 12; // Very deep background
      pos.push([x, y, z]);
    }
    return pos;
  }, []);

  const count = positions.length;

  const explodeVectors = useMemo(() => {
    return positions.map(([x, y]) => {
      const dist = Math.sqrt(x * x + y * y);
      const angle = Math.atan2(y, x);
      const speed = 2.0 + Math.random() * 3;
      const zSpeed = 1.0 + Math.random() * 2;
      const rotSpeed = (Math.random() - 0.5) * 3;
      const initialRot = [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI];
      return { angle, speed, zSpeed, dist, rotSpeed, initialRot };
    });
  }, [positions]);

  const geometry = useMemo(() => {
    const shape = createCloverShape(HEX_RADIUS);
    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelSegments: 1,
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#64af03",
        roughness: 0.55,
        metalness: 0.0,
      }),
    []
  );

  const isDarkMat = useRef(false);
  useEffect(() => {
    const handler = (e: Event) => {
      isDarkMat.current = (e as CustomEvent).detail.dark;
    };
    window.addEventListener("theme-shift", handler);
    return () => window.removeEventListener("theme-shift", handler);
  }, []);

  const frameSkip = useRef(0);

  useFrame(({ clock }) => {
    material.color.lerp(targetColor.current, 0.08);
    const targetRough = isDarkMat.current ? 0.5 : 0.55;
    const targetMetal = isDarkMat.current ? 0.12 : 0.0;
    material.roughness += (targetRough - material.roughness) * 0.08;
    material.metalness += (targetMetal - material.metalness) * 0.08;
    if (!meshRef.current) return;

    // Update hex positions every 3rd frame for performance
    frameSkip.current++;
    if (frameSkip.current % 3 !== 0) return;

    const time = clock.elapsedTime;

    explodeRef.current += (explodeTarget.current - explodeRef.current) * 0.025;
    const ex = explodeRef.current;

    for (let i = 0; i < count; i++) {
      const [x, y, z] = positions[i];
      const ev = explodeVectors[i];

      // Organic floating motion
      const w1 = Math.sin(x * 0.2 + time * 0.3) * 0.3;
      const w2 = Math.cos(y * 0.25 + time * 0.2) * 0.3;

      const exX = Math.cos(ev.angle) * ev.speed * ex;
      const exY = Math.sin(ev.angle) * ev.speed * ex;
      const exZ = ev.zSpeed * ex;

      dummy.position.set(x + exX + w1, y + exY + w2, z + exZ);

      // Random initial rotations + slow organic spin + explosion rotation
      dummy.rotation.set(
        ev.initialRot[0] + time * 0.1 * ev.rotSpeed + ex * ev.rotSpeed * 2,
        ev.initialRot[1] + time * 0.15 * ev.rotSpeed + ex * ev.rotSpeed * 1.2,
        ev.initialRot[2] + time * 0.08 * ev.rotSpeed + ex * ev.rotSpeed
      );

      const scaleMult = (1 - ex * 0.3) * (0.85 + Math.sin(time * 0.3 + i) * 0.1);
      dummy.scale.set(scaleMult, scaleMult, scaleMult);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
}

function SceneBg() {
  const { scene, gl } = useThree();
  const lightBg = useMemo(() => new THREE.Color("hsl(0 0% 0%)"), []);
  const darkBg = useMemo(() => new THREE.Color("hsl(0 0% 0%)"), []);
  const currentBg = useRef(new THREE.Color("hsl(0 0% 0%)"));
  const targetBg = useRef(new THREE.Color("hsl(0 0% 0%)"));
  const fogRef = useRef(scene.fog as THREE.Fog);
  const isDarkRef = useRef(true);

  useEffect(() => {
    const handler = (e: Event) => {
      const dark = (e as CustomEvent).detail.dark;
      isDarkRef.current = dark;
      targetBg.current.copy(dark ? darkBg : lightBg);
    };
    window.addEventListener("theme-shift", handler);
    return () => window.removeEventListener("theme-shift", handler);
  }, [darkBg, lightBg]);

  useFrame(() => {
    currentBg.current.lerp(targetBg.current, 0.08);
    scene.background = currentBg.current;
    const targetExposure = isDarkRef.current ? 0.72 : 0.85;
    gl.toneMappingExposure += (targetExposure - gl.toneMappingExposure) * 0.08;
    if (fogRef.current) {
      fogRef.current.color.copy(currentBg.current);
      const targetNear = isDarkRef.current ? 14 : 16;
      const targetFar = isDarkRef.current ? 34 : 28;
      fogRef.current.near += (targetNear - fogRef.current.near) * 0.08;
      fogRef.current.far += (targetFar - fogRef.current.far) * 0.08;
    }
  });

  return null;
}

function DynamicLights() {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const keyRef = useRef<THREE.DirectionalLight>(null);
  const fill1Ref = useRef<THREE.DirectionalLight>(null);
  const fill2Ref = useRef<THREE.DirectionalLight>(null);
  const isDarkRef = useRef(true);

  useEffect(() => {
    const handler = (e: Event) => {
      isDarkRef.current = (e as CustomEvent).detail.dark;
    };
    window.addEventListener("theme-shift", handler);
    return () => window.removeEventListener("theme-shift", handler);
  }, []);

  useFrame(() => {
    const tA = isDarkRef.current ? 0.15 : 0.25;
    const tK = isDarkRef.current ? 0.4 : 0.6;
    const tFill1 = isDarkRef.current ? 0.12 : 0.2;
    const tFill2 = isDarkRef.current ? 0.06 : 0.1;

    if (ambientRef.current) ambientRef.current.intensity += (tA - ambientRef.current.intensity) * 0.08;
    if (keyRef.current) keyRef.current.intensity += (tK - keyRef.current.intensity) * 0.08;
    if (fill1Ref.current) fill1Ref.current.intensity += (tFill1 - fill1Ref.current.intensity) * 0.08;
    if (fill2Ref.current) fill2Ref.current.intensity += (tFill2 - fill2Ref.current.intensity) * 0.08;
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.12} color="#ffffff" />
      <directionalLight
        ref={keyRef}
        position={[10, 15, 12]}
        intensity={0.4}
        color="hsl(0 0% 100%)"
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0005}
      />
      <directionalLight ref={fill1Ref} position={[-8, 10, -6]} intensity={0.12} color="hsl(0 0% 92%)" />
      <directionalLight ref={fill2Ref} position={[0, -4, 10]} intensity={0.06} color="hsl(0 0% 94%)" />
    </>
  );
}

const HexGridBackground = () => {

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      overflow: 'hidden',
      background: "hsl(0 0% 0%)",
      transition: "background 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      <Canvas
        camera={{
          position: [5, -12, 12],
          fov: 65,
          near: 0.1,
          far: 150,
        }}
        dpr={[1, 1.5]}
        frameloop="always"
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.72,
        }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        <color attach="background" args={["hsl(0 0% 0%)"]} />
        <fog attach="fog" args={["hsl(0 0% 0%)", 18, 35]} />

        <SceneBg />
        <DynamicLights />
        <HexGrid />
      </Canvas>

      
    </div>
  );
};

export default HexGridBackground;
