import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Brain, Building2, CheckCircle, ChevronLeft, ChevronRight, Clock, Eye, EyeOff, FileText, Heart, Landmark, Layout, LogIn, Mail, MapPin, Menu, Phone, PieChart, School, Scroll, Shield, ShieldCheck, Target, TrendingUp, Users, X, Zap } from "lucide-react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createClient } from "@supabase/supabase-js";
//#region src/components/Navbar.tsx
var Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 30);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		setIsOpen(false);
	}, [location]);
	const navLinks = [
		{
			label: "About",
			path: "/about"
		},
		{
			label: "University",
			path: "/university"
		},
		{
			label: "WealthX TV",
			path: "/tv"
		},
		{
			label: "Educational Tools",
			path: "/books"
		},
		{
			label: "Contact",
			path: "/contact"
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			style: {
				position: "fixed",
				top: isScrolled ? "1.5rem" : "0",
				left: 0,
				right: 0,
				zIndex: 1e3,
				display: isOpen ? "none" : "flex",
				justifyContent: "center",
				pointerEvents: "none",
				transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
				boxSizing: "border-box"
			},
			children: /* @__PURE__ */ jsxs(motion.nav, {
				initial: {
					y: -100,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .8,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: isScrolled ? "glass-pill" : "",
				style: {
					position: "relative",
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					alignItems: "center",
					padding: "0 1.5rem",
					borderRadius: isScrolled ? "99px" : "0px",
					width: isScrolled ? "calc(100% - 2rem)" : "100%",
					maxWidth: "min(1200px, 100vw)",
					pointerEvents: "auto",
					transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
					background: isScrolled ? void 0 : "transparent",
					border: isScrolled ? void 0 : "1px solid transparent",
					boxShadow: isScrolled ? void 0 : "none",
					boxSizing: "border-box"
				},
				children: [
					/* @__PURE__ */ jsx(AnimatePresence, { children: isScrolled && /* @__PURE__ */ jsx(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .5 },
						style: {
							position: "absolute",
							inset: 0,
							overflow: "hidden",
							borderRadius: "99px",
							zIndex: -1,
							pointerEvents: "none"
						},
						children: [...Array(40)].map((_, i) => {
							const size = Math.random() * 2 + 1;
							const duration = 4 + Math.random() * 6;
							const delay = Math.random() * -10;
							const leftPos = Math.random() * 100;
							return /* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: [
										0,
										1,
										1,
										0
									],
									y: -80,
									x: (Math.random() - .5) * 30
								},
								transition: {
									duration,
									repeat: Infinity,
									delay,
									ease: "linear"
								},
								style: {
									position: "absolute",
									left: `${leftPos}%`,
									bottom: "-10px",
									width: `${size}px`,
									height: `${size}px`,
									borderRadius: "50%",
									backgroundColor: i % 4 === 0 ? "#64af03" : "white",
									boxShadow: i % 4 === 0 ? `0 0 6px rgba(100, 175, 3, 0.8)` : `0 0 4px rgba(255,255,255,0.8)`
								}
							}, i);
						})
					}) }),
					/* @__PURE__ */ jsx("div", {
						style: {
							gridColumn: "1",
							display: "flex",
							justifyContent: "flex-start"
						},
						children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "navbar-logo-link",
							style: {
								display: "flex",
								alignItems: "center",
								textDecoration: "none"
							},
							children: /* @__PURE__ */ jsx("img", {
								src: "/logo-dark.png",
								alt: "WealthXcelerate",
								className: "navbar-logo",
								style: {
									width: "auto",
									display: "block",
									filter: "brightness(0) invert(1)",
									transition: "height 0.3s ease"
								}
							})
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "desktop-only",
						style: {
							gridColumn: "2",
							display: "flex",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								gap: "2rem",
								flexWrap: "nowrap"
							},
							children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
								to: link.path,
								className: "nav-link",
								style: { whiteSpace: "nowrap" },
								children: link.label
							}, link.path))
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							gridColumn: "3",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center"
						},
						children: [/* @__PURE__ */ jsx("div", {
							className: "desktop-only",
							style: {
								display: "flex",
								alignItems: "center",
								gap: "1rem"
							},
							children: /* @__PURE__ */ jsxs("a", {
								href: "https://wealthxcelerate.app.clientclub.net/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "nav-login-btn",
								style: { textDecoration: "none" },
								children: [/* @__PURE__ */ jsx(LogIn, {
									size: 16,
									style: {
										marginRight: "0.5rem",
										flexShrink: 0
									}
								}), "Log In"]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "mobile-only",
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
								width: "100%"
							},
							children: /* @__PURE__ */ jsx("button", {
								onClick: () => setIsOpen(true),
								"aria-label": "Open Menu",
								style: {
									background: "transparent",
									border: "none",
									padding: "0.5rem",
									cursor: "pointer",
									color: "hsl(var(--foreground))",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									minWidth: "44px",
									minHeight: "44px"
								},
								children: /* @__PURE__ */ jsx(Menu, { size: 28 })
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(motion.button, {
			initial: {
				opacity: 0,
				rotate: -90
			},
			animate: {
				opacity: 1,
				rotate: 0
			},
			exit: {
				opacity: 0,
				rotate: 90
			},
			transition: { duration: .2 },
			onClick: () => setIsOpen(false),
			"aria-label": "Close Menu",
			style: {
				position: "fixed",
				top: "1rem",
				right: "1rem",
				zIndex: 1100,
				background: "transparent",
				border: "none",
				padding: "0.5rem",
				cursor: "pointer",
				color: "hsl(var(--foreground))",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minWidth: "44px",
				minHeight: "44px"
			},
			children: /* @__PURE__ */ jsx(X, { size: 28 })
		}, "close-btn") }),
		/* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: -20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -20
			},
			transition: {
				duration: .3,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			style: {
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.95)",
				backdropFilter: "blur(40px)",
				WebkitBackdropFilter: "blur(40px)",
				zIndex: 1050,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "4rem 2rem",
				gap: "0.5rem",
				overflowY: "auto"
			},
			children: [navLinks.map((link, i) => /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: i * .05 },
				children: /* @__PURE__ */ jsx(Link, {
					to: link.path,
					style: {
						textAlign: "center",
						fontSize: "1rem",
						fontWeight: 700,
						textDecoration: "none",
						color: "hsl(var(--foreground))",
						textTransform: "uppercase",
						letterSpacing: "0.2em",
						display: "block",
						padding: "1.25rem 0",
						borderBottom: "1px solid hsl(var(--border))",
						fontFamily: "\"Roboto\", sans-serif",
						transition: "all 0.3s ease"
					},
					children: link.label
				})
			}, link.path)), /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: navLinks.length * .05 },
				style: { marginTop: "auto" },
				children: /* @__PURE__ */ jsx("div", {
					style: {
						marginTop: "2rem",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						width: "100%",
						maxWidth: "300px"
					},
					children: /* @__PURE__ */ jsxs("a", {
						href: "https://wealthxcelerate.app.clientclub.net/",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setIsOpen(false),
						className: "nav-login-btn",
						style: {
							width: "100%",
							justifyContent: "center",
							padding: "1.1rem",
							fontSize: "14px",
							textDecoration: "none"
						},
						children: [/* @__PURE__ */ jsx(LogIn, {
							size: 18,
							style: { marginRight: "0.75rem" }
						}), "Log In"]
					})
				})
			})]
		}) }),
		/* @__PURE__ */ jsx("style", { children: `
        .nav-link {
          text-decoration: none;
          color: hsl(var(--foreground) / 0.7);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: hsl(var(--foreground));
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--primary));
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-login-btn {
          background: transparent;
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          padding: 0.6rem 1.5rem;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        @keyframes passiveShine {
          0% { left: -100%; }
          15% { left: 200%; }
          100% { left: 200%; }
        }
        .nav-login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: skewX(-25deg);
          animation: passiveShine 6s infinite cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-login-btn:hover {
          border-color: hsl(var(--primary));
          color: hsl(var(--foreground));
          box-shadow: 0 0 15px hsl(var(--primary) / 0.15);
        }
        .nav-login-btn:hover::before {
          /* Force an immediate shine on hover by resetting animation or overriding left */
          animation: none;
          left: 200%;
          transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar-logo {
          height: 80px;
        }
        @media (max-width: 900px) {
          .mobile-only {
            display: flex !important;
          }
          .navbar-logo-link {
            display: flex;
            align-items: center;
          }
          .navbar-logo {
            height: auto !important;
            max-height: 52px;
            width: auto !important;
            max-width: 150px;
            object-fit: contain;
            object-position: left center;
          }
          /* On mobile: switch from 3-col grid to simple flex so the
             collapsed center column doesn't push the hamburger off-screen */
          nav {
            display: flex !important;
            justify-content: space-between !important;
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            box-sizing: border-box !important;
          }
        }
      ` })
	] });
};
//#endregion
//#region src/components/AnimatedLogo.tsx
var AnimatedLogo = ({ className, style }) => {
	return /* @__PURE__ */ jsx("div", {
		className,
		style: {
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "visible",
			width: "100%",
			...style
		},
		children: /* @__PURE__ */ jsx("img", {
			src: "/logo-dark.png",
			alt: "WealthXcelerate",
			style: {
				width: "100%",
				height: "auto",
				display: "block"
			}
		})
	});
};
//#endregion
//#region src/components/AnimatedCounter.tsx
var AnimatedCounter = ({ from = 0, to, duration = 2, prefix = "", suffix = "", style, delay = 0 }) => {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: false,
		margin: "0px 0px -50px 0px"
	});
	const count = useMotionValue(from);
	const rounded = useTransform(count, (latest) => {
		return prefix + Math.round(latest).toString() + suffix;
	});
	useEffect(() => {
		if (inView) return animate(count, to, {
			duration,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		}).stop;
		else count.set(from);
	}, [
		inView,
		count,
		from,
		to,
		duration,
		delay
	]);
	return /* @__PURE__ */ jsx(motion.span, {
		ref,
		style,
		children: rounded
	});
};
//#endregion
//#region src/components/HoverGalaxyCard.tsx
var HoverGalaxyCard = forwardRef(({ particleCount = 8, children, style, ...props }, ref) => {
	const [isHovered, setIsHovered] = useState(false);
	return /* @__PURE__ */ jsxs(motion.div, {
		ref,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		style: {
			position: "relative",
			overflow: "hidden",
			zIndex: 1,
			...style
		},
		...props,
		children: [isHovered && /* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				inset: 0,
				pointerEvents: "none",
				zIndex: -1
			},
			children: [...Array(particleCount)].map((_, i) => {
				const size = Math.random() * 3 + 1.5;
				const duration = 1.5 + Math.random() * 2.5;
				const delay = Math.random() * -5;
				const leftPos = Math.random() * 100;
				return /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 50
					},
					animate: {
						opacity: [
							0,
							1,
							1,
							0
						],
						y: -300,
						x: (Math.random() - .5) * 50
					},
					transition: {
						duration,
						repeat: Infinity,
						delay,
						ease: "linear"
					},
					style: {
						position: "absolute",
						left: `${leftPos}%`,
						bottom: "-20px",
						width: `${size}px`,
						height: `${size}px`,
						borderRadius: "50%",
						backgroundColor: i % 3 === 0 ? "#64af03" : "white",
						boxShadow: i % 3 === 0 ? `0 0 10px rgba(100, 175, 3, 0.8)` : `0 0 8px rgba(255,255,255,0.8)`
					}
				}, i);
			})
		}), children]
	});
});
HoverGalaxyCard.displayName = "HoverGalaxyCard";
//#endregion
//#region src/components/HoverGalaxyButton.tsx
var HoverGalaxyButton = ({ children, onClick, className = "", style = {}, particleCount = 6, whileHover = { scale: 1.05 }, whileTap = { scale: .98 }, type = "button", disabled = false }) => {
	const [isHovered, setIsHovered] = useState(false);
	return /* @__PURE__ */ jsxs(motion.button, {
		type,
		disabled,
		onClick,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		className,
		whileHover,
		whileTap,
		style: {
			position: "relative",
			overflow: "hidden",
			zIndex: 1,
			border: "none",
			cursor: "pointer",
			...style
		},
		children: [/* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && /* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				inset: 0,
				pointerEvents: "none",
				zIndex: -1
			},
			children: [...Array(particleCount)].map((_, i) => {
				const size = Math.random() * 2 + 1;
				const duration = 1 + Math.random() * 2;
				const delay = Math.random() * -3;
				const leftPos = Math.random() * 100;
				return /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: [
							0,
							1,
							1,
							0
						],
						y: -150,
						x: (Math.random() - .5) * 30
					},
					exit: { opacity: 0 },
					transition: {
						duration,
						repeat: Infinity,
						delay,
						ease: "linear"
					},
					style: {
						position: "absolute",
						left: `${leftPos}%`,
						bottom: "-10px",
						width: `${size}px`,
						height: `${size}px`,
						borderRadius: "50%",
						backgroundColor: i % 3 === 0 ? "#64af03" : "white",
						boxShadow: i % 3 === 0 ? `0 0 8px rgba(100, 175, 3, 0.8)` : `0 0 6px rgba(255,255,255,0.8)`
					}
				}, i);
			})
		}) }), /* @__PURE__ */ jsx("div", {
			style: {
				position: "relative",
				zIndex: 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "inherit"
			},
			children
		})]
	});
};
//#endregion
//#region src/components/HoverGalaxyLink.tsx
var MotionLink = motion(Link);
var HoverGalaxyLink = ({ to, children, className = "", style = {}, particleCount = 15, whileHover = { scale: 1.05 }, whileTap = { scale: .98 }, onMouseEnter, onMouseLeave }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = (e) => {
		setIsHovered(true);
		if (onMouseEnter) onMouseEnter(e);
	};
	const handleMouseLeave = (e) => {
		setIsHovered(false);
		if (onMouseLeave) onMouseLeave(e);
	};
	return /* @__PURE__ */ jsxs(MotionLink, {
		to,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		className,
		whileHover,
		whileTap,
		style: {
			position: "relative",
			overflow: "hidden",
			zIndex: 1,
			textDecoration: "none",
			display: "inline-block",
			...style
		},
		children: [/* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && /* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				inset: 0,
				pointerEvents: "none",
				zIndex: -1
			},
			children: [...Array(particleCount)].map((_, i) => {
				const size = Math.random() * 2 + 1;
				const duration = 1 + Math.random() * 2;
				const delay = Math.random() * -3;
				const leftPos = Math.random() * 100;
				return /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: [
							0,
							1,
							1,
							0
						],
						y: -150,
						x: (Math.random() - .5) * 30
					},
					exit: { opacity: 0 },
					transition: {
						duration,
						repeat: Infinity,
						delay,
						ease: "linear"
					},
					style: {
						position: "absolute",
						left: `${leftPos}%`,
						bottom: "-10px",
						width: `${size}px`,
						height: `${size}px`,
						borderRadius: "50%",
						backgroundColor: i % 3 === 0 ? "#64af03" : "white",
						boxShadow: i % 3 === 0 ? `0 0 8px rgba(100, 175, 3, 0.8)` : `0 0 6px rgba(255,255,255,0.8)`
					}
				}, i);
			})
		}) }), /* @__PURE__ */ jsx("div", {
			style: {
				position: "relative",
				zIndex: 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "inherit"
			},
			children
		})]
	});
};
//#endregion
//#region src/components/Hero.tsx
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .9,
			ease: [
				.16,
				1,
				.3,
				1
			]
		}
	}
};
var Hero = () => {
	const pillars = [
		{
			title: "Money Mindset",
			desc: "Transform how you think about wealth.",
			icon: /* @__PURE__ */ jsx(Brain, { size: 18 })
		},
		{
			title: "Income & Cash Flow",
			desc: "Maximize earnings. Keep\xA0more.",
			icon: /* @__PURE__ */ jsx(TrendingUp, { size: 18 })
		},
		{
			title: "Debt Strategy",
			desc: "Good debt vs bad debt — eliminate what\xA0hurts.",
			icon: /* @__PURE__ */ jsx(Zap, { size: 18 })
		},
		{
			title: "Taxes",
			desc: "Tax efficiency that keeps your money\xA0working.",
			icon: /* @__PURE__ */ jsx(FileText, { size: 18 })
		},
		{
			title: "Insurance",
			desc: "Protect your family and\xA0assets.",
			icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 18 })
		},
		{
			title: "College Planning",
			desc: "Fund education without destroying\xA0retirement.",
			icon: /* @__PURE__ */ jsx(School, { size: 18 })
		},
		{
			title: "Retirement",
			desc: "Income that lasts —\nnot just a\xA0number.",
			icon: /* @__PURE__ */ jsx(PieChart, { size: 18 })
		},
		{
			title: "Legacy",
			desc: "Pass on a blueprint, not just\xA0money.",
			icon: /* @__PURE__ */ jsx(Scroll, { size: 18 })
		},
		{
			title: "Life Insurance as Banking",
			desc: "Your own personal banking\xA0system.",
			icon: /* @__PURE__ */ jsx(Building2, { size: 18 })
		},
		{
			title: "Legacy/Estate Planning",
			desc: "Protect and transfer your wealth for\xA0generations.",
			icon: /* @__PURE__ */ jsx(Users, { size: 18 })
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			style: {
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				position: "relative",
				paddingTop: "6.5rem"
			},
			children: [/* @__PURE__ */ jsx("div", {
				className: "container",
				style: {
					position: "relative",
					zIndex: 1,
					width: "100%",
					flex: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						gap: "2.5rem",
						width: "100%"
					},
					children: [
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: 1.2,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							style: {
								width: "100%",
								maxWidth: "900px",
								position: "relative",
								display: "flex",
								justifyContent: "center"
							},
							children: [/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								width: "150%",
								height: "150%",
								top: "-25%",
								left: "-25%",
								background: "radial-gradient(circle, rgba(100, 175, 3, 0.05) 0%, transparent 65%)",
								pointerEvents: "none",
								zIndex: 0
							} }), /* @__PURE__ */ jsx(AnimatedLogo, { style: {
								width: "100%",
								position: "relative",
								zIndex: 1
							} })]
						}),
						/* @__PURE__ */ jsxs(motion.p, {
							className: "desktop-only",
							variants: fadeUp,
							initial: "hidden",
							animate: "show",
							style: {
								fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
								color: "hsl(var(--foreground))",
								lineHeight: 1.6,
								fontWeight: 300,
								maxWidth: "800px",
								margin: "0 auto"
							},
							children: [
								"A complete financial blueprint led by",
								" ",
								/* @__PURE__ */ jsx("span", {
									style: {
										color: "#64af03",
										fontWeight: 600
									},
									children: "Ray Lewis"
								}),
								" ",
								"and",
								" ",
								/* @__PURE__ */ jsx("span", {
									style: {
										color: "#64af03",
										fontWeight: 600,
										whiteSpace: "nowrap"
									},
									children: "Dennis M. Postema"
								}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									style: {
										opacity: .7,
										fontSize: "22px"
									},
									children: "build wealth, protect your future, live on your terms."
								})
							]
						}),
						/* @__PURE__ */ jsx(motion.div, {
							className: "mobile-only",
							variants: fadeUp,
							initial: "hidden",
							animate: "show",
							style: {
								display: "none",
								flexDirection: "column",
								gap: "0.5rem",
								color: "hsl(var(--foreground))",
								lineHeight: 1.4,
								fontWeight: 300,
								margin: "0 auto",
								textAlign: "center",
								padding: "0 1rem"
							},
							children: /* @__PURE__ */ jsxs("p", {
								style: {
									fontSize: "clamp(0.85rem, 4vw, 1.1rem)",
									margin: 0,
									lineHeight: 1.5,
									whiteSpace: "nowrap"
								},
								children: [
									"A complete financial blueprint led by ",
									/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64af03",
											fontWeight: 600
										},
										children: "Ray Lewis"
									}),
									" &",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64af03",
											fontWeight: 600
										},
										children: "Dennis M. Postema"
									}),
									". ",
									/* @__PURE__ */ jsx("span", {
										style: { opacity: .7 },
										children: "Build wealth, protect your"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										style: { opacity: .7 },
										children: "future, live on your\xA0terms."
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							variants: fadeUp,
							initial: "hidden",
							animate: "show",
							style: {
								marginTop: "1rem",
								display: "flex",
								gap: "1rem",
								flexWrap: "wrap",
								justifyContent: "center"
							},
							children: [/* @__PURE__ */ jsxs(HoverGalaxyLink, {
								to: "/contact",
								className: "btn btn-primary hero-cta-btn",
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "0.75rem",
									padding: "1.2rem 3rem",
									fontSize: "14px",
									textDecoration: "none",
									borderRadius: "8px"
								},
								whileHover: {
									scale: 1.05,
									backgroundColor: "#64af03",
									color: "#ffffff"
								},
								children: ["Start your transformation ", /* @__PURE__ */ jsx(ArrowRight, {
									className: "hero-cta-icon",
									size: 20
								})]
							}), /* @__PURE__ */ jsx("a", {
								href: "https://www.pmg1.com/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hero-cta-wrapper",
								style: { textDecoration: "none" },
								children: /* @__PURE__ */ jsx(HoverGalaxyButton, {
									className: "btn btn-outline hero-cta-btn",
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "0.75rem",
										padding: "1.2rem 3rem",
										fontSize: "14px",
										textDecoration: "none",
										border: "2px solid #64af03",
										color: "#64af03",
										borderRadius: "8px",
										fontWeight: 600,
										transition: "all 0.3s ease",
										backgroundColor: "transparent"
									},
									whileHover: {
										scale: 1.05,
										backgroundColor: "rgba(100, 175, 3, 0.1)",
										color: "#64af03"
									},
									children: "Find a WealthX Coach"
								})
							})]
						})
					]
				})
			}), /* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: 1,
					delay: .8
				},
				style: {
					width: "100%",
					overflow: "hidden",
					padding: "2rem 0",
					position: "relative",
					whiteSpace: "nowrap"
				},
				children: /* @__PURE__ */ jsx(motion.div, {
					animate: { x: [0, -1e3] },
					transition: {
						duration: 30,
						repeat: Infinity,
						ease: "linear"
					},
					style: {
						display: "inline-flex",
						gap: "4rem",
						alignItems: "center"
					},
					children: Array(4).fill([
						"STRATEGY",
						"LEGACY",
						"GROWTH",
						"TRANSFORMATION",
						"WEALTH",
						"FREEDOM",
						"IMPACT",
						"ARCHITECTURE"
					]).flat().map((word, i) => /* @__PURE__ */ jsxs("span", {
						style: {
							fontSize: "0.85rem",
							fontWeight: 800,
							color: i % 2 === 0 ? "hsl(87 10% 40%)" : "#64af03",
							letterSpacing: "0.3em",
							textTransform: "uppercase",
							display: "flex",
							alignItems: "center",
							gap: "4rem"
						},
						children: [word, /* @__PURE__ */ jsx("span", {
							style: { color: "rgba(100, 175, 3, 0.3)" },
							children: "•"
						})]
					}, i))
				})
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "desktop-only",
			style: {
				padding: "4rem 0",
				background: "transparent"
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
					overflow: "hidden",
					paddingTop: "3rem"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "1rem",
						flex: 1,
						justifyContent: "flex-start"
					},
					children: [
						/* @__PURE__ */ jsx("h2", {
							style: {
								color: "#64af03",
								letterSpacing: "0.04em",
								fontSize: "clamp(2rem, 10vw, 104px)",
								lineHeight: .85,
								fontWeight: 400,
								margin: 0,
								textAlign: "center"
							},
							children: "FINANCIAL"
						}),
						/* @__PURE__ */ jsx("h2", {
							style: {
								color: "hsl(87 97% 45%)",
								letterSpacing: "0.04em",
								fontSize: "clamp(2rem, 10vw, 104px)",
								lineHeight: .85,
								fontWeight: 400,
								margin: 0,
								textAlign: "center"
							},
							children: "TRANSFORMATION."
						}),
						/* @__PURE__ */ jsxs("p", {
							style: {
								fontSize: "22px",
								fontStyle: "italic",
								fontWeight: 400,
								color: "hsl(var(--foreground))",
								marginTop: "1.5rem",
								fontFamily: "\"Casanova Serif Display\", serif",
								textAlign: "center",
								padding: "0 2rem",
								whiteSpace: "nowrap"
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									style: { color: "#64af03" },
									children: "\""
								}),
								"This isn't advice, it's a blueprint for your life.",
								/* @__PURE__ */ jsx("span", {
									style: { color: "#64af03" },
									children: "\""
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pillars-grid",
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(5, 1fr)",
								gap: "1rem",
								width: "100%",
								maxWidth: "1200px",
								marginTop: "1.5rem",
								padding: "0 2rem"
							},
							children: pillars.map((p, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
								className: "pillar-item",
								particleCount: 15,
								transition: { duration: .3 },
								style: {
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									textAlign: "center",
									gap: "0.5rem",
									padding: "0.75rem 0.5rem",
									backgroundColor: "rgba(255,255,255,0.03)",
									borderRadius: "1rem",
									border: "1px solid rgba(255,255,255,0.08)",
									minHeight: "130px",
									justifyContent: "center"
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: { color: "#64af03" },
									children: p.icon
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "0.25rem",
										alignItems: "center"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.85rem",
											fontWeight: 800,
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											lineHeight: 1.2,
											color: "hsl(var(--foreground))"
										},
										children: p.title
									}), /* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.75rem",
											color: "hsl(87 20% 40%)",
											margin: "0 auto",
											lineHeight: 1.4,
											maxWidth: "160px",
											whiteSpace: "pre-line"
										},
										children: p.desc
									})]
								})]
							}, i))
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					style: {
						width: "100%",
						display: "flex",
						justifyContent: "center",
						marginTop: "4rem"
					},
					children: /* @__PURE__ */ jsx("div", {
						style: {
							width: "calc(100% - 4rem)",
							maxWidth: "1100px",
							background: "#000000",
							borderTopLeftRadius: "60px",
							borderTopRightRadius: "60px",
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
							padding: "1.5rem 1.5rem",
							zIndex: 20
						},
						children: /* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
								gap: "1.5rem",
								flexWrap: "wrap"
							},
							children: [
								{
									to: 10,
									suffix: "K+",
									desc: "Dedicated members worldwide achieving financial sovereignty.",
									delay: .2
								},
								{
									to: 2,
									prefix: "$",
									suffix: "B+",
									desc: "Total assets preserved and multiplied through our blueprint.",
									delay: .35
								},
								{
									to: 15,
									suffix: "+",
									desc: "Years of specialized expertise in legacy wealth architecture.",
									delay: .5
								}
							].map((s, i) => /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									alignItems: "center",
									flex: "1 1 300px",
									justifyContent: "center"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										padding: "0 1rem",
										textAlign: "center"
									},
									children: [/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "3rem",
											fontWeight: 400,
											color: "#64af03",
											lineHeight: 1,
											margin: "0 0 0.5rem 0",
											letterSpacing: "-0.02em"
										},
										children: /* @__PURE__ */ jsx(AnimatedCounter, {
											to: s.to,
											prefix: s.prefix,
											suffix: s.suffix,
											delay: s.delay,
											duration: 2
										})
									}), /* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.9rem",
											color: "rgba(255,255,255,0.6)",
											margin: "0 auto",
											lineHeight: 1.5,
											fontWeight: 300,
											maxWidth: "240px"
										},
										children: s.desc
									})]
								}), i < 2 && /* @__PURE__ */ jsx("div", {
									style: {
										width: "1px",
										height: "60px",
										background: "hsl(0 0% 100% / 0.1)",
										flexShrink: 0,
										display: "none"
									},
									className: "desktop-divider"
								})]
							}, i))
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("style", { children: `
        @media (min-width: 900px) {
          .desktop-divider {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            margin-top: 2rem !important;
          }
          .pillar-item {
            padding: 1rem 0.5rem !important;
          }
          .pillar-item span {
            font-size: 0.6rem !important;
          }
          .hero-cta-btn {
            padding: 0.8rem 1.5rem !important;
            font-size: 0.8rem !important;
            width: 100% !important;
            min-height: 54px !important;
            justify-content: center !important;
          }
          .hero-cta-icon {
            width: 16px !important;
            height: 16px !important;
          }
          .hero-cta-wrapper {
            width: 100% !important;
            display: flex !important;
          }
        }
      ` })
	] });
};
//#endregion
//#region src/components/TransformationSection.tsx
var pillars$1 = [
	{
		icon: /* @__PURE__ */ jsx(Shield, { size: 20 }),
		title: "Protection",
		desc: "Securing your assets and your family's future with robust insurance and estate strategies."
	},
	{
		icon: /* @__PURE__ */ jsx(TrendingUp, { size: 20 }),
		title: "Growth",
		desc: "Building sustainable wealth through proven investment philosophies and active management."
	},
	{
		icon: /* @__PURE__ */ jsx(Landmark, { size: 20 }),
		title: "Legacy",
		desc: "Creating a lasting impact that transcends generations through strategic estate planning."
	},
	{
		icon: /* @__PURE__ */ jsx(Heart, { size: 20 }),
		title: "Values",
		desc: "Aligning your finances with your faith and family principles for true freedom."
	}
];
var checks = [
	"Complete tax strategy & optimization",
	"Life, health & wealth insurance planning",
	"Investment blueprint for every income\xA0level",
	"Estate & legacy planning for your family",
	"Business owner financial mastery",
	"Faith-aligned financial philosophy"
];
var TransformationSection = ({ isMobile = false }) => {
	if (isMobile) return /* @__PURE__ */ jsxs("section", {
		style: {
			padding: "60px 20px",
			background: "hsl(var(--background))",
			color: "hsl(var(--foreground))"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				style: { textAlign: "center" },
				children: /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "14px",
						fontWeight: 800,
						textTransform: "uppercase",
						letterSpacing: "0.3em",
						color: "#fff",
						marginBottom: "1rem",
						backgroundColor: "rgba(255, 255, 255, 0.08)",
						padding: "0.5rem 1.25rem",
						borderRadius: "0",
						display: "inline-block"
					},
					children: "The WealthXcelerate Way"
				})
			}),
			/* @__PURE__ */ jsxs("h2", {
				style: {
					fontSize: "2.2rem",
					fontWeight: 900,
					lineHeight: 1.1,
					textTransform: "uppercase",
					textAlign: "center",
					marginBottom: "3rem",
					color: "#64af03"
				},
				children: [
					"Financial",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						style: {
							fontFamily: "\"Casanova Serif Display\", serif",
							fontStyle: "normal",
							fontWeight: 400,
							textTransform: "none"
						},
						children: "Transformation"
					}),
					" For Life."
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem"
				},
				children: pillars$1.map((p, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
					particleCount: 15,
					transition: { duration: .3 },
					style: {
						padding: "1.5rem",
						background: "rgba(255,255,255,0.05)",
						borderRadius: "1.5rem",
						border: "1px solid rgba(255,255,255,0.1)",
						display: "flex",
						gap: "1rem",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							background: "hsl(var(--primary))",
							color: "hsl(var(--primary-foreground))",
							width: "36px",
							height: "36px",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0
						},
						children: p.icon
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: "1rem",
							fontWeight: 400,
							margin: "0 0 0.25rem 0"
						},
						children: p.title
					}), /* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "0.8rem",
							color: "hsl(var(--muted-foreground))",
							margin: 0,
							lineHeight: 1.5
						},
						children: p.desc
					})] })]
				}, i))
			}),
			/* @__PURE__ */ jsxs(HoverGalaxyCard, {
				particleCount: 25,
				transition: { duration: .3 },
				style: {
					marginTop: "3rem",
					padding: "1.5rem",
					background: "rgba(255,255,255,0.03)",
					borderRadius: "1.5rem",
					border: "1px solid transparent",
					textAlign: "center",
					cursor: "pointer"
				},
				children: [/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "2rem",
						fontWeight: 400,
						color: "#64af03",
						margin: "0 0 0.5rem 0"
					},
					children: /* @__PURE__ */ jsx(AnimatedCounter, {
						to: 10,
						suffix: "K+"
					})
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "0.7rem",
						textTransform: "uppercase",
						letterSpacing: "0.1em",
						color: "hsl(var(--muted-foreground))",
						margin: 0
					},
					children: "Join the Elite Movement"
				})]
			})
		]
	});
	return /* @__PURE__ */ jsx("section", {
		style: {
			position: "relative",
			zIndex: 2
		},
		children: /* @__PURE__ */ jsx("div", {
			style: {
				padding: "120px 0",
				background: "hsl(var(--background))",
				borderBottomLeftRadius: "120px",
				borderBottomRightRadius: "120px",
				borderBottom: "1px solid hsl(var(--border))"
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					style: {
						marginBottom: "6rem",
						textAlign: "center"
					},
					children: [/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "14px",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.4em",
							color: "#fff",
							marginBottom: "1.5rem",
							backgroundColor: "rgba(255, 255, 255, 0.08)",
							padding: "0.5rem 1.25rem",
							borderRadius: "0",
							display: "inline-block"
						},
						children: "The WealthXcelerate Way"
					}), /* @__PURE__ */ jsxs("h2", {
						style: {
							fontSize: "clamp(2rem, 5vw, 4.5rem)",
							lineHeight: 1.1,
							textTransform: "uppercase",
							margin: 0,
							color: "#64af03",
							fontWeight: 400,
							whiteSpace: "nowrap"
						},
						children: [
							"Financial ",
							/* @__PURE__ */ jsx("span", {
								style: {
									fontFamily: "\"Casanova Serif Display\", serif",
									fontStyle: "normal",
									fontWeight: 400,
									textTransform: "none"
								},
								children: "Transformation"
							}),
							" For Life."
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "4rem"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "1.5rem"
						},
						children: pillars$1.map((p, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
							className: "pillar-item",
							particleCount: 20,
							transition: { duration: .4 },
							style: {
								padding: "2.5rem",
								background: "rgba(255,255,255,0.03)",
								borderRadius: "2rem",
								border: "1px solid rgba(255,255,255,0.05)"
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										color: "#64af03",
										marginBottom: "1rem"
									},
									children: p.icon
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.4rem",
										fontWeight: 400,
										color: "hsl(var(--foreground))",
										marginBottom: "0.75rem"
									},
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.95rem",
										color: "hsl(var(--muted-foreground))",
										lineHeight: 1.6,
										margin: 0
									},
									children: p.desc
								})
							]
						}, i))
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "2.5rem"
						},
						children: [
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "22px",
									color: "hsl(var(--muted-foreground))",
									lineHeight: 1.8,
									fontWeight: 300,
									marginBottom: "0.5rem",
									marginTop: "2rem"
								},
								children: "We don't just manage money, we help you design a life of meaning, impact, and total financial freedom. Built on leadership, ethics, and legacy."
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: "2rem"
								},
								children: checks.map((c, i) => /* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "0.75rem"
									},
									children: [/* @__PURE__ */ jsx(CheckCircle, {
										size: 18,
										color: "#64af03"
									}), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.9rem",
											color: "hsl(var(--muted-foreground))"
										},
										children: c
									})]
								}, i))
							}),
							/* @__PURE__ */ jsxs(HoverGalaxyCard, {
								particleCount: 10,
								transition: { duration: .4 },
								style: {
									background: "rgba(255,255,255,0.03)",
									padding: "2.5rem",
									borderRadius: "2rem",
									border: "1px solid rgba(255,255,255,0.05)",
									display: "flex",
									alignItems: "center",
									gap: "2rem",
									cursor: "pointer",
									marginTop: "auto"
								},
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: { textAlign: "center" },
										children: [/* @__PURE__ */ jsx("p", {
											style: {
												fontSize: "2.5rem",
												fontWeight: 400,
												color: "#64af03",
												margin: 0
											},
											children: "10K+"
										}), /* @__PURE__ */ jsx("p", {
											style: {
												fontSize: "0.7rem",
												textTransform: "uppercase",
												color: "hsl(var(--muted-foreground))",
												margin: 0
											},
											children: "Members"
										})]
									}),
									/* @__PURE__ */ jsx("div", { style: {
										width: "1px",
										height: "40px",
										background: "rgba(255,255,255,0.1)"
									} }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "1.1rem",
											color: "hsl(var(--foreground))",
											fontWeight: 500,
											margin: "0 0 0.25rem 0"
										},
										children: "Join the Movement"
									}), /* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "0.9rem",
											color: "hsl(var(--muted-foreground))",
											margin: 0
										},
										children: "Start your path to financial sovereignty today."
									})] })
								]
							})
						]
					})]
				})]
			})
		})
	});
};
//#endregion
//#region src/components/MobileTransformationHeader.tsx
var pillars = [
	{
		title: "Money Mindset",
		icon: /* @__PURE__ */ jsx(Brain, { size: 20 })
	},
	{
		title: "Income & Cash Flow",
		icon: /* @__PURE__ */ jsx(TrendingUp, { size: 20 })
	},
	{
		title: "Debt Strategy",
		icon: /* @__PURE__ */ jsx(Zap, { size: 20 })
	},
	{
		title: "Taxes",
		icon: /* @__PURE__ */ jsx(FileText, { size: 20 })
	},
	{
		title: "Insurance",
		icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 20 })
	},
	{
		title: "College Planning",
		icon: /* @__PURE__ */ jsx(School, { size: 20 })
	},
	{
		title: "Retirement",
		icon: /* @__PURE__ */ jsx(PieChart, { size: 20 })
	},
	{
		title: "Legacy",
		icon: /* @__PURE__ */ jsx(Scroll, { size: 20 })
	},
	{
		title: "Life Insurance as Banking",
		icon: /* @__PURE__ */ jsx(Building2, { size: 20 })
	},
	{
		title: "Estate Planning",
		icon: /* @__PURE__ */ jsx(Users, { size: 20 })
	}
];
var MobileTransformationHeader = () => {
	return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "60px 0",
			backgroundColor: "hsl(var(--background))",
			color: "hsl(var(--foreground))",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			style: { padding: "0 1rem" },
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					style: {
						textAlign: "center",
						marginBottom: "4rem"
					},
					children: [/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "0.75rem",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.4em",
							color: "#64af03",
							marginBottom: "1rem"
						},
						children: "The Transformation"
					}), /* @__PURE__ */ jsxs("h2", {
						style: {
							fontSize: "clamp(1.7rem, 9.5vw, 3.2rem)",
							lineHeight: .9,
							fontWeight: 900,
							textTransform: "uppercase",
							margin: 0,
							letterSpacing: "-0.05em"
						},
						children: [
							"Financial",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								style: {
									color: "#64af03",
									display: "block",
									letterSpacing: "-0.06em"
								},
								children: "Transformation."
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					style: {
						position: "relative",
						padding: "3rem 2rem",
						background: "rgba(100, 175, 3, 0.03)",
						borderRadius: "2rem",
						border: "1px solid rgba(100, 175, 3, 0.1)",
						marginBottom: "5rem",
						textAlign: "center"
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							style: {
								position: "absolute",
								top: "-25px",
								left: "50%",
								transform: "translateX(-50%)",
								width: "50px",
								height: "50px",
								backgroundColor: "#64af03",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#fff",
								fontSize: "2rem",
								fontFamily: "serif",
								boxShadow: "0 10px 20px rgba(100, 175, 3, 0.2)"
							},
							children: "“"
						}),
						/* @__PURE__ */ jsxs("p", {
							style: {
								fontSize: "22px",
								fontFamily: "\"Casanova Serif Display\", serif",
								fontStyle: "normal",
								lineHeight: 1.4,
								color: "hsl(var(--foreground))",
								margin: 0,
								fontWeight: 500,
								textWrap: "balance"
							},
							children: [
								"This isn't advice — it's a ",
								/* @__PURE__ */ jsx("span", {
									style: {
										color: "hsl(87 97% 45%)",
										fontWeight: 700
									},
									children: "blueprint"
								}),
								" for your life."
							]
						}),
						/* @__PURE__ */ jsx("div", { style: {
							marginTop: "1.5rem",
							height: "1px",
							width: "40px",
							backgroundColor: "rgba(100, 175, 3, 0.3)",
							margin: "1.5rem auto 0"
						} })
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "0.85rem",
						fontWeight: 800,
						textTransform: "uppercase",
						letterSpacing: "0.2em",
						color: "hsl(var(--muted-foreground))",
						textAlign: "center",
						marginBottom: "2rem"
					},
					children: "The 10 Foundations"
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(2, 1fr)",
						gap: "1rem"
					},
					children: pillars.map((p, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
						particleCount: 15,
						whileHover: {},
						style: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							textAlign: "center",
							gap: "0.75rem",
							padding: "1.5rem 1rem",
							backgroundColor: "rgba(255,255,255,0.03)",
							borderRadius: "1.25rem",
							border: "1px solid rgba(255,255,255,0.08)"
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: { color: "#64af03" },
							children: p.icon
						}), /* @__PURE__ */ jsx("span", {
							style: {
								fontSize: "0.8rem",
								fontWeight: 800,
								textTransform: "uppercase",
								letterSpacing: "0.05em",
								lineHeight: 1.2,
								color: "hsl(var(--foreground))"
							},
							children: p.title
						})]
					}, i))
				})] })
			]
		})
	});
};
var supabase = createClient("https://llmzuaatgzxgsruxakev.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbXp1YWF0Z3p4Z3NydXhha2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTA2MzIsImV4cCI6MjA5Nzg4NjYzMn0.76S6F_4EZ460vSM-rO38ki0IedF2Y8TwgN3WGqd4t1I");
//#endregion
//#region src/components/MagazineSection.tsx
var DEFAULT_ISSUES = [
	{
		id: "default-4",
		issue_number: 4,
		title: "Predictable Income. Powerful Freedom.",
		image_url: "/WealthXCelerate- Issue 4.png"
	},
	{
		id: "default-3",
		issue_number: 3,
		title: "Intel For The High Net-Worth",
		image_url: "/magazine-cover.webp"
	},
	{
		id: "default-2",
		issue_number: 2,
		title: "Excellence: A Lifestyle, not an Achievement",
		image_url: "/WealthX - January Issue.png"
	},
	{
		id: "default-1",
		issue_number: 1,
		title: "Elevate Your Business.",
		image_url: "3.jpg"
	}
];
var DESCRIPTION = "Exclusive interviews and deep-dive strategies used by Ray Lewis and Dennis M. Postema to architect multi-generational wealth.";
var TOPICS = [
	"Market Insights",
	"Legacy Strategies",
	"Tax Optimization",
	"Asset Protection"
];
var MagazineSection = ({ isMobile = false }) => {
	const [issues, setIssues] = useState(DEFAULT_ISSUES);
	const [activeIssueId, setActiveIssueId] = useState("default-4");
	const [email, setEmail] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);
	useEffect(() => {
		const fetchIssues = async () => {
			try {
				const { data, error } = await supabase.from("magazine_issues").select("*").order("issue_number", { ascending: false });
				if (error) {
					console.error("Error fetching magazine issues:", error.message);
					return;
				}
				if (data && data.length > 0) {
					const fetched = data.map((item) => ({
						id: "default-" + item.issue_number,
						issue_number: item.issue_number,
						title: item.title,
						image_url: item.image_url
					}));
					setIssues(fetched);
					setActiveIssueId(fetched[0].id);
				}
			} catch (err) {
				console.error("Failed to fetch magazine issues:", err.message || err);
			}
		};
		fetchIssues();
	}, []);
	const latestIssueNumber = Math.max(...issues.map((i) => i.issue_number), 0);
	const previousReleaseNumber = latestIssueNumber - 1;
	const exploreIssues = issues.slice(0, 4);
	const getImageUrl = (issue) => {
		if (issue.image_url) {
			if (issue.image_url.startsWith("http") || issue.image_url.startsWith("/")) return issue.image_url;
			return `https://llmzuaatgzxgsruxakev.supabase.co/storage/v1/object/public/magazines/${issue.image_url}`;
		}
		return "/magazine-cover.webp";
	};
	const getIssueLabel = (issue) => {
		return new Date(2026, 1 + (issue.issue_number - 1), 1).toLocaleDateString("en-US", {
			month: "long",
			year: "numeric"
		});
	};
	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email) setIsSubscribed(true);
	};
	const currentIdx = issues.findIndex((issue) => issue.id === activeIssueId);
	const handlePrevIssue = () => {
		if (issues.length === 0) return;
		setActiveIssueId(issues[(currentIdx - 1 + issues.length) % issues.length].id);
	};
	const handleNextIssue = () => {
		if (issues.length === 0) return;
		setActiveIssueId(issues[(currentIdx + 1) % issues.length].id);
	};
	const activeIssue = issues.find((issue) => issue.id === activeIssueId) || issues[0] || DEFAULT_ISSUES[0];
	console.log("ACTIVE_ISSUE:", activeIssue.id, activeIssue.title, activeIssue.image_url);
	console.log("ISSUES_LIST:", issues.map((x) => `${x.id}:${x.title}`));
	const renderTitle = (title) => {
		const parts = title.split(" The ");
		if (parts.length === 2) return /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs("span", {
				style: { whiteSpace: "nowrap" },
				children: [parts[0], " The"]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("span", {
				style: {
					fontFamily: "\"Casanova Serif Display\", serif",
					fontStyle: "normal",
					fontWeight: 400,
					textTransform: "none",
					whiteSpace: "nowrap"
				},
				children: parts[1]
			})
		] });
		const words = title.split(" ");
		if (words.length > 2) {
			const mid = Math.ceil(words.length / 2);
			const firstPart = words.slice(0, mid).join(" ");
			const secondPart = words.slice(mid).join(" ");
			return /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("span", {
					style: { whiteSpace: "nowrap" },
					children: firstPart
				}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("span", {
					style: {
						fontFamily: "\"Casanova Serif Display\", serif",
						fontStyle: "normal",
						fontWeight: 400,
						textTransform: "none",
						whiteSpace: "nowrap"
					},
					children: secondPart
				})
			] });
		}
		return /* @__PURE__ */ jsx("span", {
			style: { whiteSpace: "nowrap" },
			children: title
		});
	};
	if (isMobile) return /* @__PURE__ */ jsx("section", {
		className: "mobile-magazine-redesign",
		style: {
			padding: "60px 20px",
			background: "hsl(var(--background))"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				textAlign: "center",
				maxWidth: "500px",
				margin: "0 auto"
			},
			children: [
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "0.65rem",
						fontWeight: 800,
						textTransform: "uppercase",
						letterSpacing: "0.3em",
						color: "hsl(var(--muted-foreground))",
						marginBottom: "1.25rem"
					},
					children: "The Monthly Blueprint"
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						maxWidth: "280px",
						margin: "0 auto 1rem",
						position: "relative"
					},
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 15
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -15
							},
							transition: { duration: .3 },
							style: { position: "relative" },
							children: [/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								inset: "-10px",
								background: "radial-gradient(circle, rgba(100, 175, 3, 0.15) 0%, transparent 70%)",
								filter: "blur(15px)",
								zIndex: 0,
								pointerEvents: "none"
							} }), /* @__PURE__ */ jsx("img", {
								src: getImageUrl(activeIssue),
								alt: activeIssue.title,
								style: {
									width: "100%",
									borderRadius: "0.75rem",
									boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
									border: "1px solid rgba(255, 255, 255, 0.12)",
									position: "relative",
									zIndex: 1
								}
							})]
						}, activeIssue.id)
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "inline-flex",
						alignItems: "center",
						gap: "1.25rem",
						margin: "0 auto 2rem",
						background: "rgba(255, 255, 255, 0.03)",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						padding: "0.4rem 1rem",
						borderRadius: "99px"
					},
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: handlePrevIssue,
							style: {
								background: "transparent",
								border: "none",
								color: "#fff",
								cursor: "pointer",
								padding: "4px",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								outline: "none"
							},
							children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
						}),
						/* @__PURE__ */ jsxs("span", {
							style: {
								fontSize: "0.75rem",
								fontWeight: 800,
								color: "hsl(var(--muted-foreground))",
								letterSpacing: "0.1em",
								minWidth: "40px",
								textAlign: "center"
							},
							children: [
								currentIdx + 1,
								" / ",
								issues.length
							]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: handleNextIssue,
							style: {
								background: "transparent",
								border: "none",
								color: "#fff",
								cursor: "pointer",
								padding: "4px",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								outline: "none"
							},
							children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
						})
					]
				}),
				/* @__PURE__ */ jsx(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .2 },
						children: [
							/* @__PURE__ */ jsxs("p", {
								style: {
									fontSize: "0.7rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.15em",
									color: "#64af03",
									marginBottom: "0.5rem"
								},
								children: [
									getIssueLabel(activeIssue),
									activeIssue.issue_number === latestIssueNumber && " • LATEST RELEASE",
									activeIssue.issue_number === previousReleaseNumber && " • PREVIOUS RELEASE"
								]
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "2rem",
									fontWeight: 800,
									lineHeight: 1.15,
									textTransform: "uppercase",
									marginBottom: "1.25rem",
									color: "#64af03"
								},
								children: renderTitle(activeIssue.title)
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.95rem",
									color: "hsl(var(--muted-foreground))",
									lineHeight: 1.6,
									marginBottom: "2rem"
								},
								children: DESCRIPTION
							})
						]
					}, activeIssue.id)
				}),
				/* @__PURE__ */ jsx("div", {
					style: { marginBottom: "3rem" },
					children: !isSubscribed ? /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubscribe,
						style: {
							position: "relative",
							width: "100%"
						},
						children: [/* @__PURE__ */ jsx("input", {
							type: "email",
							placeholder: "Enter your email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							style: {
								width: "100%",
								padding: "1rem 3.5rem 1rem 1.25rem",
								borderRadius: "8px",
								border: "1px solid rgba(255,255,255,0.15)",
								background: "rgba(255,255,255,0.03)",
								color: "hsl(var(--foreground))",
								fontSize: "0.95rem",
								outline: "none"
							}
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							style: {
								position: "absolute",
								right: "6px",
								top: "6px",
								bottom: "6px",
								width: "36px",
								height: "36px",
								background: "#64af03",
								color: "#000",
								border: "none",
								borderRadius: "6px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer"
							},
							children: /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
						})]
					}) : /* @__PURE__ */ jsx("div", {
						style: {
							color: "#64af03",
							fontWeight: 700,
							padding: "1rem",
							backgroundColor: "rgba(100, 175, 3, 0.05)",
							border: "1px solid rgba(100, 175, 3, 0.2)",
							borderRadius: "8px"
						},
						children: "Successfully subscribed!"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						borderTop: "1px solid rgba(255, 255, 255, 0.08)",
						paddingTop: "2rem"
					},
					children: [/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: "0.75rem",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.15em",
							color: "hsl(var(--muted-foreground))",
							marginBottom: "1.25rem"
						},
						children: "Explore Issues"
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							justifyContent: "center",
							gap: "1.25rem",
							flexWrap: "wrap"
						},
						children: exploreIssues.map((issue) => {
							const isActive = issue.id === activeIssueId;
							return /* @__PURE__ */ jsxs("div", {
								onClick: () => {
									if (!isActive) setActiveIssueId(issue.id);
								},
								style: {
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									cursor: "pointer",
									width: "75px"
								},
								children: [/* @__PURE__ */ jsxs(motion.div, {
									animate: isActive ? { boxShadow: [
										"0 0 8px rgba(100, 175, 3, 0.4), 0 4px 8px rgba(0,0,0,0.3)",
										"0 0 16px rgba(100, 175, 3, 0.7), 0 4px 8px rgba(0,0,0,0.3)",
										"0 0 8px rgba(100, 175, 3, 0.4), 0 4px 8px rgba(0,0,0,0.3)"
									] } : {},
									transition: isActive ? {
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut"
									} : {},
									style: {
										position: "relative",
										borderRadius: "0.35rem",
										overflow: "hidden",
										aspectRatio: "3/4",
										width: "100%",
										border: isActive ? "2px solid #64af03" : "1px solid rgba(255,255,255,0.08)",
										marginBottom: "0.4rem",
										backgroundColor: "hsl(var(--card))"
									},
									children: [/* @__PURE__ */ jsx("img", {
										src: getImageUrl(issue),
										alt: issue.title,
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover",
											opacity: isActive ? 1 : .65,
											transition: "opacity 0.3s ease"
										}
									}), isActive && /* @__PURE__ */ jsx("div", {
										style: {
											position: "absolute",
											bottom: 0,
											left: 0,
											right: 0,
											background: "#64af03",
											color: "#000",
											fontSize: "0.55rem",
											fontWeight: 900,
											textAlign: "center",
											padding: "1px 0",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											zIndex: 2
										},
										children: "ACTIVE"
									})]
								}), /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "0.6rem",
										fontWeight: isActive ? 800 : 500,
										color: isActive ? "#64af03" : "hsl(var(--muted-foreground))",
										textAlign: "center",
										textTransform: "uppercase",
										letterSpacing: "0.02em"
									},
									children: getIssueLabel(issue).split(" ")[0]
								})]
							}, issue.id);
						})
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ jsx("section", {
		className: "desktop-magazine-section",
		style: {
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			backgroundColor: "hsl(var(--background))",
			padding: "120px 0",
			borderBottomLeftRadius: "120px",
			borderBottomRightRadius: "120px",
			position: "relative",
			zIndex: 1
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			style: {
				maxWidth: "1200px",
				margin: "0 auto",
				width: "100%",
				padding: "0 2rem"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1.2fr",
					gap: "6rem",
					alignItems: "center",
					marginBottom: "5rem"
				},
				children: [/* @__PURE__ */ jsxs("div", {
					style: {
						position: "relative",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 30,
								scale: .95
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -30,
								scale: .95
							},
							transition: {
								duration: .4,
								ease: "easeOut"
							},
							style: {
								position: "relative",
								width: "100%",
								maxWidth: "380px"
							},
							whileHover: {
								y: -8,
								transition: { duration: .2 }
							},
							children: [/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								inset: "-15px",
								background: "radial-gradient(circle, rgba(100, 175, 3, 0.2) 0%, transparent 70%)",
								filter: "blur(20px)",
								zIndex: 0,
								pointerEvents: "none"
							} }), /* @__PURE__ */ jsx("img", {
								src: getImageUrl(activeIssue),
								alt: activeIssue.title,
								style: {
									width: "100%",
									borderRadius: "1rem",
									boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(100, 175, 3, 0.1)",
									border: "1px solid rgba(255, 255, 255, 0.15)",
									display: "block",
									position: "relative",
									zIndex: 1
								}
							})]
						}, activeIssue.id)
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "1.5rem",
							marginTop: "2rem",
							background: "rgba(255, 255, 255, 0.03)",
							border: "1px solid rgba(255, 255, 255, 0.08)",
							padding: "0.5rem 1.25rem",
							borderRadius: "99px",
							boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
							zIndex: 5
						},
						children: [
							/* @__PURE__ */ jsx("button", {
								onClick: handlePrevIssue,
								style: {
									background: "transparent",
									border: "none",
									color: "#fff",
									cursor: "pointer",
									padding: "6px",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									transition: "all 0.2s",
									outline: "none"
								},
								onMouseEnter: (e) => e.currentTarget.style.color = "#64af03",
								onMouseLeave: (e) => e.currentTarget.style.color = "#fff",
								title: "Newer Issue",
								children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
							}),
							/* @__PURE__ */ jsxs("span", {
								style: {
									fontSize: "0.8rem",
									fontWeight: 800,
									color: "hsl(var(--muted-foreground))",
									letterSpacing: "0.1em",
									minWidth: "50px",
									textAlign: "center"
								},
								children: [
									currentIdx + 1,
									" / ",
									issues.length
								]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: handleNextIssue,
								style: {
									background: "transparent",
									border: "none",
									color: "#fff",
									cursor: "pointer",
									padding: "6px",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									transition: "all 0.2s",
									outline: "none"
								},
								onMouseEnter: (e) => e.currentTarget.style.color = "#64af03",
								onMouseLeave: (e) => e.currentTarget.style.color = "#fff",
								title: "Older Issue",
								children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					},
					children: [/* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -20
							},
							transition: { duration: .3 },
							children: [
								/* @__PURE__ */ jsxs("p", {
									style: {
										fontSize: "13px",
										fontWeight: 800,
										textTransform: "uppercase",
										letterSpacing: "0.35em",
										color: "#fff",
										marginBottom: "1rem",
										backgroundColor: "rgba(255, 255, 255, 0.05)",
										padding: "0.4rem 1rem",
										borderRadius: "4px",
										display: "inline-block",
										border: "1px solid rgba(255, 255, 255, 0.1)"
									},
									children: [
										getIssueLabel(activeIssue),
										activeIssue.issue_number === latestIssueNumber && " • LATEST RELEASE",
										activeIssue.issue_number === previousReleaseNumber && " • PREVIOUS RELEASE"
									]
								}),
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "3rem",
										fontWeight: 800,
										lineHeight: 1.15,
										textTransform: "uppercase",
										color: "#64af03",
										marginBottom: "1.5rem"
									},
									children: renderTitle(activeIssue.title)
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "18px",
										color: "hsl(var(--muted-foreground))",
										lineHeight: 1.7,
										marginBottom: "2rem",
										maxWidth: "520px"
									},
									children: DESCRIPTION
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
										gap: "1.2rem",
										marginBottom: "2.5rem",
										maxWidth: "500px"
									},
									children: TOPICS.map((item, i) => /* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: "0.6rem"
										},
										children: [/* @__PURE__ */ jsx(CheckCircle, {
											size: 16,
											color: "#64af03",
											style: { flexShrink: 0 }
										}), /* @__PURE__ */ jsx("span", {
											style: {
												fontWeight: 600,
												color: "hsl(var(--foreground))",
												fontSize: "0.85rem"
											},
											children: item
										})]
									}, i))
								})
							]
						}, activeIssue.id)
					}), !isSubscribed ? /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubscribe,
						style: {
							display: "flex",
							gap: "0.75rem",
							maxWidth: "450px"
						},
						children: [/* @__PURE__ */ jsx("input", {
							type: "email",
							placeholder: "Enter your email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							style: {
								flex: 1,
								padding: "1rem 1.5rem",
								borderRadius: "8px",
								border: "1px solid rgba(255,255,255,0.15)",
								background: "rgba(255,255,255,0.03)",
								color: "hsl(var(--foreground))",
								outline: "none",
								fontSize: "0.95rem",
								transition: "all 0.2s",
								boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)"
							},
							onFocus: (e) => e.target.style.borderColor = "#64af03",
							onBlur: (e) => e.target.style.borderColor = "rgba(255,255,255,0.15)"
						}), /* @__PURE__ */ jsx(HoverGalaxyButton, {
							whileHover: {
								scale: 1.03,
								backgroundColor: "rgba(100, 175, 3, 0.1)",
								color: "hsl(87 97% 45%)"
							},
							whileTap: { scale: .98 },
							type: "submit",
							className: "btn btn-outline",
							style: {
								padding: "1rem 2rem",
								color: "hsl(87 97% 45%)",
								border: "1px solid hsl(87 97% 45%)",
								backgroundColor: "transparent",
								borderRadius: "8px",
								fontWeight: 700,
								fontSize: "13px",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								cursor: "pointer",
								transition: "all 0.2s ease"
							},
							children: "Join Free"
						})]
					}) : /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						style: {
							color: "#64af03",
							fontWeight: 700,
							padding: "1.25rem",
							backgroundColor: "rgba(100, 175, 3, 0.05)",
							border: "1px solid rgba(100, 175, 3, 0.2)",
							borderRadius: "8px",
							textAlign: "center",
							maxWidth: "450px"
						},
						children: "Welcome to the WealthX Blueprint!"
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					borderTop: "1px solid rgba(255, 255, 255, 0.08)",
					paddingTop: "3rem",
					marginTop: "2rem"
				},
				children: [/* @__PURE__ */ jsx("h3", {
					style: {
						fontSize: "0.85rem",
						fontWeight: 800,
						textTransform: "uppercase",
						letterSpacing: "0.25em",
						color: "hsl(var(--muted-foreground))",
						marginBottom: "1.5rem",
						textAlign: "center"
					},
					children: "Explore Issues"
				}), /* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						justifyContent: "center",
						gap: "2.5rem",
						flexWrap: "wrap"
					},
					children: exploreIssues.map((issue) => {
						const isActive = issue.id === activeIssueId;
						return /* @__PURE__ */ jsxs("div", {
							onClick: () => {
								if (!isActive) setActiveIssueId(issue.id);
							},
							style: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								cursor: "pointer",
								width: "120px",
								transition: "all 0.3s ease"
							},
							children: [/* @__PURE__ */ jsxs(motion.div, {
								whileHover: {
									y: -6,
									scale: 1.05
								},
								animate: isActive ? { boxShadow: [
									"0 0 15px rgba(100, 175, 3, 0.4), 0 10px 20px rgba(0,0,0,0.3)",
									"0 0 25px rgba(100, 175, 3, 0.8), 0 10px 20px rgba(0,0,0,0.3)",
									"0 0 15px rgba(100, 175, 3, 0.4), 0 10px 20px rgba(0,0,0,0.3)"
								] } : {},
								transition: isActive ? {
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut"
								} : {},
								style: {
									position: "relative",
									borderRadius: "0.5rem",
									overflow: "hidden",
									aspectRatio: "3/4",
									width: "100%",
									border: isActive ? "2px solid #64af03" : "1px solid rgba(255,255,255,0.1)",
									marginBottom: "0.75rem",
									backgroundColor: "hsl(var(--card))"
								},
								children: [/* @__PURE__ */ jsx("img", {
									src: getImageUrl(issue),
									alt: issue.title,
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover",
										opacity: isActive ? 1 : .65,
										transition: "opacity 0.3s ease"
									}
								}), isActive && /* @__PURE__ */ jsx("div", {
									style: {
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										background: "#64af03",
										color: "#000",
										fontSize: "0.65rem",
										fontWeight: 900,
										textAlign: "center",
										padding: "2px 0",
										textTransform: "uppercase",
										letterSpacing: "0.05em"
									},
									children: "ACTIVE"
								})]
							}), /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.75rem",
									fontWeight: isActive ? 800 : 500,
									color: isActive ? "#64af03" : "hsl(var(--muted-foreground))",
									textAlign: "center",
									textTransform: "uppercase",
									letterSpacing: "0.05em",
									transition: "color 0.3s ease"
								},
								children: getIssueLabel(issue)
							})]
						}, issue.id);
					})
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/BookSection.tsx
var BookSection = ({ isMobile = false }) => {
	const navigate = useNavigate();
	const tools = [
		{
			icon: /* @__PURE__ */ jsx(Shield, { size: 18 }),
			title: "Strategic Protection",
			desc: "Bulletproof insurance & risk mitigation."
		},
		{
			icon: /* @__PURE__ */ jsx(TrendingUp, { size: 18 }),
			title: "Wealth Optimization",
			desc: "Tactical growth & tax efficiency."
		},
		{
			icon: /* @__PURE__ */ jsx(Landmark, { size: 18 }),
			title: "Legacy Architecture",
			desc: "Generational wealth & estate design."
		}
	];
	if (isMobile) return /* @__PURE__ */ jsx("section", {
		style: {
			padding: "60px 20px",
			backgroundColor: "hsl(var(--background))"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				textAlign: "center",
				marginBottom: "3rem"
			},
			children: [
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						justifyContent: "center",
						gap: "0",
						marginBottom: "2rem"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							width: "140px",
							transform: "rotate(-5deg) translateX(15px)",
							zIndex: 1,
							borderRadius: "1rem",
							overflow: "hidden",
							boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: "/ray-lewis.png",
							alt: "Ray Lewis",
							style: {
								width: "100%",
								aspectRatio: "4/5",
								objectFit: "cover"
							}
						})
					}), /* @__PURE__ */ jsx("div", {
						style: {
							width: "140px",
							transform: "rotate(5deg) translateX(-15px)",
							zIndex: 2,
							borderRadius: "1rem",
							overflow: "hidden",
							boxShadow: "0 15px 40px rgba(0,0,0,0.4)"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: "/dennis-postema.png",
							alt: "Dennis M. Postema",
							style: {
								width: "100%",
								aspectRatio: "4/5",
								objectFit: "cover"
							}
						})
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "0.6rem",
						fontWeight: 800,
						textTransform: "uppercase",
						letterSpacing: "0.3em",
						color: "#fff",
						marginBottom: "1rem"
					},
					children: "Educational Tools"
				}),
				/* @__PURE__ */ jsxs("h2", {
					style: {
						fontSize: "2.4rem",
						fontWeight: 900,
						lineHeight: 1,
						textTransform: "uppercase",
						color: "#64af03",
						margin: "0 0 1.5rem"
					},
					children: [
						"Foundations of",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							style: {
								fontFamily: "\"Casanova Serif Display\", serif",
								fontStyle: "normal",
								fontWeight: 400,
								textTransform: "none",
								color: "#64af03"
							},
							children: "Financial Legacy"
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "1rem",
						color: "hsl(var(--muted-foreground))",
						lineHeight: 1.6,
						marginBottom: "2.5rem"
					},
					children: "Wealth isn't just about the numbers in your bank account — it's about the knowledge in your mind."
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						textAlign: "left"
					},
					children: tools.map((t, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
						particleCount: 6,
						whileHover: {
							scale: 1.02,
							backgroundColor: "rgba(255,255,255,0.06)"
						},
						transition: { duration: .3 },
						style: {
							padding: "1.25rem",
							backgroundColor: "hsl(var(--card))",
							borderRadius: "1rem",
							border: "1px solid hsl(var(--border))",
							display: "flex",
							gap: "1rem",
							alignItems: "center"
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: { color: "hsl(var(--primary))" },
							children: t.icon
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							style: {
								fontSize: "0.85rem",
								fontWeight: 800,
								textTransform: "uppercase",
								color: "hsl(var(--foreground))",
								margin: 0
							},
							children: t.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "0.8rem",
								color: "hsl(var(--muted-foreground))",
								margin: 0
							},
							children: t.desc
						})] })]
					}, i))
				}),
				/* @__PURE__ */ jsxs(HoverGalaxyButton, {
					whileHover: {
						scale: 1.05,
						backgroundColor: "rgba(100, 175, 3, 0.1)",
						color: "hsl(87 97% 45%)"
					},
					whileTap: { scale: .98 },
					onClick: () => navigate("/books"),
					className: "btn btn-outline",
					style: {
						marginTop: "2.5rem",
						width: "100%",
						padding: "1.1rem",
						color: "hsl(87 97% 45%)",
						border: "1px solid hsl(87 97% 45%)",
						backgroundColor: "transparent",
						borderRadius: "8px",
						fontWeight: 700,
						fontSize: "14px",
						textTransform: "uppercase",
						letterSpacing: "0.15em",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "0.5rem",
						transition: "all 0.2s ease"
					},
					children: ["Explore Full Library ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
				})
			]
		})
	});
	return /* @__PURE__ */ jsxs("section", {
		style: {
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			position: "relative",
			zIndex: 0,
			padding: "120px 0",
			backgroundColor: "hsl(var(--card))",
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				position: "absolute",
				top: "50%",
				right: "-4%",
				fontSize: "22vw",
				fontWeight: 900,
				color: "rgba(255,255,255,0.025)",
				pointerEvents: "none",
				transform: "translateY(-50%)",
				zIndex: 0,
				letterSpacing: "-0.05em"
			},
			children: "BOOKS"
		}), /* @__PURE__ */ jsxs("div", {
			className: "container",
			style: {
				position: "relative",
				zIndex: 1,
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				gap: "6rem",
				alignItems: "stretch"
			},
			children: [/* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .8 },
				style: { height: "100%" },
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: "1rem",
						height: "100%"
					},
					children: [/* @__PURE__ */ jsx(motion.div, {
						style: {
							flex: 1,
							height: "100%"
						},
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .7 },
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								borderRadius: "1.25rem",
								overflow: "hidden",
								height: "100%",
								boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
								border: "1px solid rgba(255,255,255,0.07)"
							},
							children: [/* @__PURE__ */ jsx("img", {
								src: "/ray-lewis.png",
								alt: "Ray Lewis",
								style: {
									width: "100%",
									height: "100%",
									objectFit: "cover",
									objectPosition: "top center",
									display: "block"
								}
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									position: "absolute",
									bottom: 0,
									left: 0,
									right: 0,
									background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
									padding: "2rem 1rem 1rem"
								},
								children: [/* @__PURE__ */ jsx("p", {
									style: {
										margin: 0,
										fontSize: "0.55rem",
										fontWeight: 900,
										textTransform: "uppercase",
										letterSpacing: "0.2em",
										color: "#64af03"
									},
									children: "NFL Legend"
								}), /* @__PURE__ */ jsx("p", {
									style: {
										margin: 0,
										fontSize: "1rem",
										fontWeight: 700,
										color: "#fff"
									},
									children: "Ray Lewis"
								})]
							})]
						})
					}), /* @__PURE__ */ jsx(motion.div, {
						style: {
							flex: 1,
							height: "100%"
						},
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .7,
							delay: .1
						},
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								borderRadius: "1.25rem",
								overflow: "hidden",
								height: "100%",
								boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
								border: "1px solid rgba(255,255,255,0.07)"
							},
							children: [/* @__PURE__ */ jsx("img", {
								src: "/dennis-postema.png",
								alt: "Dennis M. Postema",
								style: {
									width: "100%",
									height: "100%",
									objectFit: "cover",
									objectPosition: "top center",
									display: "block"
								}
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									position: "absolute",
									bottom: 0,
									left: 0,
									right: 0,
									background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
									padding: "2rem 1rem 1rem"
								},
								children: [/* @__PURE__ */ jsx("p", {
									style: {
										margin: 0,
										fontSize: "0.55rem",
										fontWeight: 900,
										textTransform: "uppercase",
										letterSpacing: "0.2em",
										color: "#64af03"
									},
									children: "Financial Expert"
								}), /* @__PURE__ */ jsx("p", {
									style: {
										margin: 0,
										fontSize: "1rem",
										fontWeight: 700,
										color: "#fff"
									},
									children: "Dennis M. Postema"
								})]
							})]
						})
					})]
				})
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 50
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .8 },
				children: [
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "14px",
							fontWeight: 800,
							textTransform: "uppercase",
							letterSpacing: "0.4em",
							color: "#fff",
							marginBottom: "1.5rem",
							backgroundColor: "rgba(255, 255, 255, 0.08)",
							padding: "0.5rem 1.25rem",
							borderRadius: "0",
							display: "inline-block"
						},
						children: "Educational Tools"
					}),
					/* @__PURE__ */ jsxs("h2", {
						style: {
							fontSize: "72px",
							fontWeight: 400,
							lineHeight: 1,
							textTransform: "uppercase",
							color: "#64af03",
							marginBottom: "1.5rem"
						},
						children: [
							"Foundations of",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								style: {
									fontFamily: "\"Casanova Serif Display\", serif",
									fontStyle: "normal",
									fontWeight: 400,
									textTransform: "none",
									color: "#64af03"
								},
								children: "Financial Legacy"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "22px",
							color: "hsl(var(--muted-foreground))",
							lineHeight: 1.8,
							marginBottom: "2.5rem",
							maxWidth: "450px"
						},
						children: "Explore the definitive collection of blueprints used to architect generational wealth."
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "1.5rem",
							marginBottom: "3rem"
						},
						children: tools.slice(0, 2).map((t, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
							particleCount: 6,
							transition: { duration: .3 },
							style: {
								padding: "1.5rem",
								borderRadius: "1rem",
								border: "1px solid transparent"
							},
							children: [/* @__PURE__ */ jsx("h4", {
								style: {
									fontSize: "0.75rem",
									fontWeight: 800,
									textTransform: "uppercase",
									color: "hsl(var(--primary))",
									marginBottom: "0.5rem"
								},
								children: t.title
							}), /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.85rem",
									color: "hsl(var(--muted-foreground))",
									margin: 0
								},
								children: t.desc
							})]
						}, i))
					}),
					/* @__PURE__ */ jsxs(HoverGalaxyButton, {
						whileHover: {
							scale: 1.05,
							backgroundColor: "rgba(100, 175, 3, 0.1)",
							color: "hsl(87 97% 45%)"
						},
						whileTap: { scale: .98 },
						onClick: () => navigate("/books"),
						className: "btn btn-outline",
						style: {
							padding: "1.2rem 2.5rem",
							width: "100%",
							color: "hsl(87 97% 45%)",
							border: "1px solid hsl(87 97% 45%)",
							backgroundColor: "transparent",
							borderRadius: "8px",
							fontWeight: 700,
							fontSize: "14px",
							textTransform: "uppercase",
							letterSpacing: "0.15em",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "0.75rem",
							transition: "all 0.2s ease"
						},
						children: ["Explore Library ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
					})
				]
			})]
		})]
	});
};
//#endregion
//#region src/components/Testimonials.tsx
var Testimonials = () => {
	return /* @__PURE__ */ jsxs("section", {
		style: {
			padding: "120px 0",
			backgroundColor: "transparent",
			position: "relative",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				top: "10%",
				right: "-5%",
				width: "600px",
				height: "600px",
				background: "radial-gradient(circle, rgba(100,175,3,0.03) 0%, transparent 60%)",
				zIndex: 0,
				pointerEvents: "none"
			} }),
			/* @__PURE__ */ jsxs("svg", {
				style: {
					position: "absolute",
					bottom: "-10%",
					left: "-10%",
					opacity: .02,
					zIndex: 0,
					pointerEvents: "none"
				},
				width: "800",
				height: "800",
				viewBox: "0 0 100 100",
				children: [/* @__PURE__ */ jsx("path", {
					d: "M0,100 L0,80 Q25,60 50,80 T100,60 L100,100 Z",
					fill: "#fff"
				}), /* @__PURE__ */ jsx("path", {
					d: "M0,100 L0,90 Q25,70 50,90 T100,70 L100,100 Z",
					fill: "#64af03"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container",
				style: {
					position: "relative",
					zIndex: 1
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						textAlign: "center",
						marginBottom: "6rem"
					},
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .1
						},
						transition: { duration: .8 },
						children: [
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.85rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.3em",
									color: "#fff",
									whiteSpace: "nowrap",
									marginBottom: "1.5rem",
									display: "inline-block"
								},
								children: "The WealthX Blueprint"
							}),
							/* @__PURE__ */ jsxs("h2", {
								style: {
									fontSize: "clamp(3rem, 7vw, 5rem)",
									fontWeight: 400,
									lineHeight: 1,
									margin: "0 0 1.5rem 0",
									letterSpacing: "-0.02em",
									color: "#64af03"
								},
								children: ["Engineered ", /* @__PURE__ */ jsx("span", {
									style: {
										fontFamily: "\"Casanova Serif Display\", serif",
										fontStyle: "normal",
										fontWeight: 400,
										color: "#64af03"
									},
									children: "Growth."
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								style: {
									maxWidth: "700px",
									margin: "0 auto",
									fontSize: "clamp(0.85rem, 3.5vw, 1.25rem)",
									color: "hsl(var(--muted-foreground))",
									lineHeight: 1.6,
									fontWeight: 300,
									whiteSpace: "normal"
								},
								children: [
									"Precision-driven strategies and measurable outcomes.",
									/* @__PURE__ */ jsx("br", { className: "desktop-only" }),
									" ",
									"We don't just plan for the future; we architect it."
								]
							})
						]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "dashboard-grid",
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "4rem"
						},
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { duration: .8 },
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1rem",
									textTransform: "uppercase",
									letterSpacing: "0.2em",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "2rem"
								},
								children: "Portfolio Architecture"
							}), /* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "2rem"
								},
								children: [
									{
										label: "Asset Protection",
										value: 92
									},
									{
										label: "Tax Optimization",
										value: 85
									},
									{
										label: "Legacy Planning",
										value: 100
									}
								].map((item, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										marginBottom: "0.75rem"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.9rem",
											fontWeight: 700,
											color: "hsl(var(--foreground))",
											textTransform: "uppercase",
											letterSpacing: "0.1em"
										},
										children: item.label
									}), /* @__PURE__ */ jsxs("span", {
										style: {
											fontSize: "0.9rem",
											fontWeight: 800,
											color: "#64af03"
										},
										children: [item.value, "%"]
									})]
								}), /* @__PURE__ */ jsx("div", {
									style: {
										width: "100%",
										height: "8px",
										backgroundColor: "rgba(255,255,255,0.05)",
										borderRadius: "99px",
										overflow: "hidden"
									},
									children: /* @__PURE__ */ jsx(motion.div, {
										initial: { width: "0%" },
										whileInView: { width: `${item.value}%` },
										viewport: { once: true },
										transition: {
											duration: 1.5,
											delay: i * .2,
											ease: "easeOut"
										},
										style: {
											height: "100%",
											backgroundColor: "#64af03",
											borderRadius: "99px"
										}
									})
								})] }, i))
							})]
						}), /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .8,
								delay: .3
							},
							style: {
								padding: "2rem",
								border: "1px solid rgba(255,255,255,0.05)",
								background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)",
								borderRadius: "1rem"
							},
							children: [
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "0.85rem",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										fontWeight: 700,
										color: "hsl(var(--muted-foreground))",
										marginBottom: "1.5rem"
									},
									children: "Growth Trajectory"
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										display: "flex",
										alignItems: "flex-end",
										gap: "1rem",
										height: "120px",
										paddingBottom: "1rem",
										borderBottom: "1px solid rgba(255,255,255,0.1)"
									},
									children: [
										40,
										55,
										45,
										70,
										60,
										85,
										100
									].map((height, i) => /* @__PURE__ */ jsx(motion.div, {
										initial: { height: "0%" },
										whileInView: { height: `${height}%` },
										viewport: { once: true },
										transition: {
											duration: 1,
											delay: i * .1,
											ease: "easeOut"
										},
										style: {
											flex: 1,
											backgroundColor: i === 6 ? "#64af03" : "rgba(255,255,255,0.1)",
											borderRadius: "4px 4px 0 0"
										}
									}, i))
								}),
								/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										paddingTop: "1rem"
									},
									children: [/* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.75rem",
											color: "hsl(var(--muted-foreground))"
										},
										children: "Phase 1"
									}), /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "0.75rem",
											color: "#64af03",
											fontWeight: 800
										},
										children: "Generational"
									})]
								})
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "5rem"
						},
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: 30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: {
								duration: .8,
								delay: .2
							},
							children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "1rem",
									textTransform: "uppercase",
									letterSpacing: "0.2em",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "3rem"
								},
								children: "Execution Process"
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									position: "relative",
									paddingLeft: "2.5rem"
								},
								children: [
									/* @__PURE__ */ jsx("div", { style: {
										position: "absolute",
										left: "0",
										top: "0",
										bottom: "0",
										width: "2px",
										backgroundColor: "rgba(255,255,255,0.05)"
									} }),
									/* @__PURE__ */ jsx(motion.div, {
										initial: { height: "0%" },
										whileInView: { height: "100%" },
										viewport: { once: true },
										transition: {
											duration: 2,
											ease: "easeInOut"
										},
										style: {
											position: "absolute",
											left: "0",
											top: "0",
											width: "2px",
											backgroundColor: "#64af03"
										}
									}),
									[
										{
											step: "01",
											title: "Discovery & Audit",
											desc: "Comprehensive analysis of current financial positioning."
										},
										{
											step: "02",
											title: "Strategy Architecture",
											desc: "Customized framework design and stress-testing."
										},
										{
											step: "03",
											title: "Active Management",
											desc: "Ongoing optimization and fiduciary oversight."
										}
									].map((item, i) => /* @__PURE__ */ jsxs("div", {
										style: {
											position: "relative",
											marginBottom: i === 2 ? 0 : "3.5rem"
										},
										children: [
											/* @__PURE__ */ jsx("div", { style: {
												position: "absolute",
												left: "-2.85rem",
												top: "0",
												width: "16px",
												height: "16px",
												backgroundColor: "#000",
												border: "2px solid #64af03",
												borderRadius: "50%",
												zIndex: 2
											} }),
											/* @__PURE__ */ jsx(motion.div, {
												initial: {
													scale: 0,
													opacity: 0
												},
												whileInView: {
													scale: 1,
													opacity: 1
												},
												viewport: { once: true },
												transition: {
													delay: .5 + i * .4,
													duration: .5
												},
												style: {
													position: "absolute",
													left: "-3.35rem",
													top: "-0.5rem",
													width: "32px",
													height: "32px",
													backgroundColor: "rgba(100,175,3,0.2)",
													borderRadius: "50%",
													zIndex: 1
												}
											}),
											/* @__PURE__ */ jsxs("div", {
												style: {
													display: "flex",
													alignItems: "baseline",
													gap: "1rem",
													marginBottom: "0.5rem"
												},
												children: [/* @__PURE__ */ jsx("span", {
													style: {
														fontSize: "0.85rem",
														fontWeight: 900,
														color: "#64af03",
														fontFamily: "\"Casanova Serif Display\", serif"
													},
													children: item.step
												}), /* @__PURE__ */ jsx("h4", {
													style: {
														fontSize: "1.3rem",
														fontWeight: 700,
														color: "hsl(var(--foreground))",
														margin: 0
													},
													children: item.title
												})]
											}),
											/* @__PURE__ */ jsx("p", {
												style: {
													fontSize: "1rem",
													color: "hsl(var(--muted-foreground))",
													margin: 0,
													lineHeight: 1.5
												},
												children: item.desc
											})
										]
									}, i))
								]
							})]
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
            align-items: center;
          }
        }
      ` })
		]
	});
};
//#endregion
//#region src/components/CTASection.tsx
var CTASection = () => {
	return /* @__PURE__ */ jsxs("section", {
		style: {
			padding: "100px 0",
			borderTop: "1px solid hsl(var(--border))",
			backgroundColor: "hsl(var(--background))"
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: "container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "cta-content-wrapper",
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					maxWidth: "700px",
					margin: "0 auto"
				},
				children: [
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontSize: "72px",
							fontWeight: 400,
							marginBottom: "1.25rem",
							letterSpacing: "-0.02em",
							color: "#64af03"
						},
						children: "Begin Your Journey"
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: "22px",
							color: "hsl(var(--muted-foreground))",
							marginBottom: "2.5rem",
							lineHeight: 1.6
						},
						children: "Connect with our experts and start implementing the blueprint today."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "cta-button-group",
						style: {
							display: "flex",
							gap: "1rem",
							flexWrap: "wrap",
							justifyContent: "center"
						},
						children: [/* @__PURE__ */ jsx("a", {
							href: "https://www.pmg1.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								textDecoration: "none",
								display: "inline-flex",
								minWidth: "260px"
							},
							children: /* @__PURE__ */ jsx(HoverGalaxyButton, {
								className: "btn btn-primary",
								style: {
									padding: "1rem 3rem",
									fontSize: "14px",
									borderRadius: "8px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "0.75rem",
									fontWeight: 600,
									transition: "background-color 0.2s ease",
									border: "1px solid #64af03",
									cursor: "pointer",
									width: "100%",
									minWidth: "260px"
								},
								whileHover: {
									scale: 1.05,
									backgroundColor: "#64af03",
									color: "#ffffff"
								},
								children: "Find a WealthX Coach"
							})
						}), /* @__PURE__ */ jsx(HoverGalaxyLink, {
							to: "/contact",
							className: "btn btn-outline",
							style: {
								padding: "1rem 3rem",
								fontSize: "14px",
								borderRadius: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.75rem",
								fontWeight: 600,
								backgroundColor: "transparent",
								transition: "all 0.2s ease",
								cursor: "pointer",
								border: "1px solid hsl(87 97% 45%)",
								color: "hsl(87 97% 45%)",
								minWidth: "260px"
							},
							whileHover: {
								scale: 1.05,
								backgroundColor: "rgba(100, 175, 3, 0.1)",
								color: "hsl(87 97% 45%)"
							},
							children: "Enroll in University"
						})]
					})
				]
			})
		}), /* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 768px) {
          .cta-content-wrapper {
             padding: 0 1rem !important;
          }
          .cta-content-wrapper h2 {
             font-size: 2rem !important;
          }
          .cta-button-group {
             flex-direction: column !important;
             width: 100% !important;
          }
          .cta-button-group a, .cta-button-group button {
             width: 100% !important;
             min-width: 100% !important;
             justify-content: center !important;
             min-height: 54px !important;
          }
        }
      ` })]
	});
};
//#endregion
//#region src/components/Footer.tsx
var FacebookIcon = ({ size = 24 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
});
var LinkedinIcon = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
		/* @__PURE__ */ jsx("rect", {
			x: "2",
			y: "9",
			width: "4",
			height: "12"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "4",
			cy: "4",
			r: "2"
		})
	]
});
var XIcon = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M4 4l16 16" }), /* @__PURE__ */ jsx("path", { d: "M20 4L4 20" })]
});
var InstagramIcon = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "2",
			y: "2",
			width: "20",
			height: "20",
			rx: "5",
			ry: "5"
		}),
		/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
		/* @__PURE__ */ jsx("line", {
			x1: "17.5",
			y1: "6.5",
			x2: "17.51",
			y2: "6.5"
		})
	]
});
var PinterestIcon = ({ size = 24 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.24 2 11.47c0 3.87 2.44 7.2 5.94 8.67-.08-.66-.15-1.68.03-2.4l1.29-5.18s-.33-.62-.33-1.55c0-1.45.89-2.54 2-2.54.94 0 1.4.67 1.4 1.47 0 .9-.6 2.24-.92 3.48-.26 1.04.55 1.88 1.62 1.88 1.94 0 3.44-1.94 3.44-4.74 0-2.48-1.88-4.21-4.56-4.21-3.1 0-4.92 2.2-4.92 4.48 0 .89.36 1.84.81 2.35.09.1.1.19.07.3l-.3 1.15c-.05.18-.16.22-.37.13-1.38-.61-2.24-2.52-2.24-4.05 0-3.3 2.53-6.34 7.31-6.34 3.84 0 6.82 2.59 6.82 6.05 0 3.62-2.41 6.54-5.76 6.54-1.12 0-2.18-.55-2.54-1.2l-.69 2.49c-.25.91-.92 2.05-1.37 2.75 1.03.3 2.12.46 3.27.46 5.52 0 10-4.24 10-9.47S17.52 2 12 2z" })
});
var TikTokIcon = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M14 3v11.2a4.2 4.2 0 1 1-4-4.2" }), /* @__PURE__ */ jsx("path", { d: "M14 3c.5 3 2.3 5 5 5" })]
});
var YoutubeIcon = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M22 12s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C17.8 4.5 12 4.5 12 4.5s-5.8 0-7.5.4A3 3 0 0 0 2.4 7C2 8.6 2 12 2 12s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4a3 3 0 0 0 2.1-2.1c.4-1.6.4-5 .4-5z" }), /* @__PURE__ */ jsx("path", { d: "M10 9.75v4.5L15 12z" })]
});
var BlueskyIcon = ({ size = 24 }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ jsx("path", { d: "M12 11c-1.5-3.1-4-5.8-6.2-6.8-1.6-.7-2.8-.2-2.8 1.7 0 3.8 3.1 6.1 6.2 6.6-3.6.6-5.7 2.3-5 4.5.6 1.8 3.1 1.7 5.1.4 1.1-.7 2-1.9 2.7-3.1.7 1.2 1.6 2.4 2.7 3.1 2 1.3 4.5 1.4 5.1-.4.7-2.2-1.4-3.9-5-4.5C17.9 12 21 9.7 21 5.9c0-1.9-1.2-2.4-2.8-1.7C16 5.2 13.5 7.9 12 11z" })
});
var ThreadsIcon = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M18.5 8.5C17.4 5.7 15.1 4 12 4c-4.4 0-7 3.3-7 8s2.7 8 7.2 8c3.2 0 5.5-1.5 6.8-4.1" }), /* @__PURE__ */ jsx("path", { d: "M9.1 10.8c.8-1 1.8-1.5 3.1-1.5 2.5 0 4.3 1.8 4.3 4.1s-1.8 4-4.4 4c-2 0-3.4-1.1-3.4-2.8 0-1.6 1.3-2.7 3.3-2.7 1.4 0 2.9.4 4.6 1.1" })]
});
var Footer = () => {
	const [email, setEmail] = useState("");
	return /* @__PURE__ */ jsxs("footer", {
		className: "main-footer",
		style: {
			backgroundColor: "hsl(var(--background))",
			color: "hsl(var(--foreground))",
			padding: "120px 0 60px",
			position: "relative",
			overflow: "hidden",
			borderTop: "1px solid hsl(var(--border))"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					zIndex: 0,
					pointerEvents: "none"
				},
				children: [...Array(40)].map((_, i) => {
					const size = Math.random() * 3 + 1.5;
					const duration = 6 + Math.random() * 10;
					const delay = Math.random() * -15;
					const leftPos = Math.random() * 100;
					return /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							y: 50
						},
						animate: {
							opacity: [
								0,
								1,
								1,
								0
							],
							y: -600,
							x: (Math.random() - .5) * 100
						},
						transition: {
							duration,
							repeat: Infinity,
							delay,
							ease: "linear"
						},
						style: {
							position: "absolute",
							left: `${leftPos}%`,
							bottom: "-20px",
							width: `${size}px`,
							height: `${size}px`,
							borderRadius: "50%",
							backgroundColor: i % 4 === 0 ? "#64af03" : "white",
							boxShadow: i % 4 === 0 ? `0 0 10px rgba(100, 175, 3, 0.8)` : `0 0 8px rgba(255,255,255,0.8)`,
							zIndex: 1
						}
					}, i);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					bottom: "-5%",
					right: "-2%",
					fontSize: "clamp(8rem, 18vw, 18rem)",
					fontWeight: 900,
					color: "hsl(var(--foreground) / 0.02)",
					lineHeight: 1,
					userSelect: "none",
					pointerEvents: "none",
					letterSpacing: "-0.05em",
					zIndex: 1
				},
				children: "WX"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "container",
				style: {
					position: "relative",
					zIndex: 1
				},
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mobile-stack footer-top-section",
					style: {
						display: "grid",
						gridTemplateColumns: "1.5fr 1fr 1fr",
						gap: "6rem",
						marginBottom: "6rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "footer-brand-column",
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "2.5rem"
							},
							children: [
								/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", {
									src: "/logo-dark.png",
									alt: "WealthXcelerate Partners",
									style: {
										height: "48px",
										width: "auto",
										display: "block"
									}
								}) }),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.95rem",
										color: "hsl(var(--muted-foreground))",
										lineHeight: 1.8,
										maxWidth: "300px",
										fontWeight: 300
									},
									children: "Financial transformation for life. Built on leadership, ethics, education, and legacy."
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "1.25rem",
										fontStyle: "normal",
										color: "#64af03",
										fontFamily: "\"Casanova Serif Display\", serif",
										fontWeight: 600,
										letterSpacing: "0.05em",
										margin: 0
									},
									children: "Faith. Family. Finances. Freedom."
								}),
								/* @__PURE__ */ jsxs("form", {
									onSubmit: (e) => {
										e.preventDefault();
										setEmail("");
										alert("Thank you!");
									},
									style: {
										display: "flex",
										gap: "0.75rem",
										marginTop: "0.5rem",
										maxWidth: "350px"
									},
									children: [/* @__PURE__ */ jsx("input", {
										type: "email",
										placeholder: "Your email address",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										required: true,
										style: {
											flex: 1,
											padding: "1rem 1.5rem",
											borderRadius: "99px",
											border: "1px solid hsl(var(--border))",
											backgroundColor: "hsl(var(--card))",
											color: "hsl(var(--foreground))",
											fontSize: "0.85rem",
											outline: "none",
											fontFamily: "Roboto, sans-serif"
										}
									}), /* @__PURE__ */ jsx(motion.button, {
										type: "submit",
										whileHover: {
											scale: 1.1,
											backgroundColor: "#64af03",
											color: "white",
											boxShadow: "0 0 20px rgba(100, 175, 3, 0.6)"
										},
										transition: { duration: .3 },
										style: {
											width: "48px",
											height: "48px",
											borderRadius: "50%",
											backgroundColor: "hsl(var(--foreground))",
											color: "hsl(var(--background))",
											border: "none",
											cursor: "pointer",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
											boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
										},
										children: /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "2rem"
							},
							children: [/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.7rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.3em",
									color: "hsl(var(--muted-foreground))"
								},
								children: "Navigate"
							}), /* @__PURE__ */ jsx("ul", {
								style: {
									listStyle: "none",
									display: "flex",
									flexDirection: "column",
									gap: "1.25rem"
								},
								children: [
									{
										label: "Home",
										to: "/"
									},
									{
										label: "About",
										to: "/about"
									},
									{
										label: "University",
										to: "/university"
									},
									{
										label: "WealthX TV",
										to: "/tv"
									},
									{
										label: "Educational Tools",
										to: "/books"
									},
									{
										label: "Contact",
										to: "/contact"
									}
								].map(({ label, to }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to,
									style: {
										textDecoration: "none",
										fontSize: "0.95rem",
										color: "hsl(var(--muted-foreground))",
										fontWeight: 500,
										transition: "all 0.3s ease",
										display: "inline-block"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.color = "hsl(87 97% 45%)";
										e.currentTarget.style.textShadow = "0 0 10px rgba(100, 175, 3, 0.5)";
										e.currentTarget.style.transform = "translateX(4px)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.color = "hsl(var(--muted-foreground))";
										e.currentTarget.style.textShadow = "none";
										e.currentTarget.style.transform = "translateX(0)";
									},
									children: label
								}) }, to))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "2rem"
							},
							children: [/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.7rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.3em",
									color: "hsl(var(--muted-foreground))"
								},
								children: "Legal"
							}), /* @__PURE__ */ jsx("ul", {
								style: {
									listStyle: "none",
									display: "flex",
									flexDirection: "column",
									gap: "1.25rem"
								},
								children: [
									{
										label: "Privacy Policy",
										path: "/privacy"
									},
									{
										label: "Terms of Service",
										path: "/terms"
									},
									{
										label: "Disclaimer",
										path: "/disclaimer"
									}
								].map((item) => /* @__PURE__ */ jsx("li", { children: item.path === "#" ? /* @__PURE__ */ jsx("a", {
									href: item.path,
									style: {
										textDecoration: "none",
										fontSize: "0.95rem",
										color: "hsl(var(--muted-foreground))",
										fontWeight: 500,
										transition: "color 0.3s ease"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.color = "hsl(87 97% 45%)";
										e.currentTarget.style.textShadow = "0 0 10px rgba(100, 175, 3, 0.5)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.color = "hsl(var(--muted-foreground))";
										e.currentTarget.style.textShadow = "none";
									},
									children: item.label
								}) : /* @__PURE__ */ jsx(Link, {
									to: item.path,
									style: {
										textDecoration: "none",
										fontSize: "0.95rem",
										color: "hsl(var(--muted-foreground))",
										fontWeight: 500,
										transition: "color 0.3s ease"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.color = "hsl(87 97% 45%)";
										e.currentTarget.style.textShadow = "0 0 10px rgba(100, 175, 3, 0.5)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.color = "hsl(var(--muted-foreground))";
										e.currentTarget.style.textShadow = "none";
									},
									children: item.label
								}) }, item.label))
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						paddingTop: "3rem",
						borderTop: "1px solid hsl(var(--border))",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "2rem"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem"
						},
						children: [/* @__PURE__ */ jsxs("p", {
							style: {
								fontSize: "0.75rem",
								color: "hsl(var(--muted-foreground))",
								letterSpacing: "0.02em",
								fontWeight: 400
							},
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" WealthXcelerate Partners. All rights reserved."
							]
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "0.75rem",
								color: "hsl(var(--muted-foreground))",
								letterSpacing: "0.02em",
								fontWeight: 400
							},
							children: "WealthXcelerate is owned and operated by Postema Media Management, LLC."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: "2.5rem",
							alignItems: "center",
							flexWrap: "wrap"
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								gap: "1.25rem",
								alignItems: "center"
							},
							children: [
								{
									Icon: LinkedinIcon,
									href: "https://www.linkedin.com/company/wealthxcelerate",
									label: "LinkedIn"
								},
								{
									Icon: XIcon,
									href: "https://x.com/WealthXMagazine",
									label: "X"
								},
								{
									Icon: PinterestIcon,
									href: "https://www.pinterest.com/wealthxmagazine/",
									label: "Pinterest"
								},
								{
									Icon: TikTokIcon,
									href: "https://www.tiktok.com/@wealthxmagazine",
									label: "TikTok"
								},
								{
									Icon: InstagramIcon,
									href: "https://www.instagram.com/wealthxcelerate/",
									label: "Instagram"
								},
								{
									Icon: YoutubeIcon,
									href: "https://www.youtube.com/@WealthXcelerate-mgz",
									label: "YouTube"
								},
								{
									Icon: BlueskyIcon,
									href: "https://bsky.app/profile/wealthxcelerate.bsky.social",
									label: "Bluesky"
								},
								{
									Icon: FacebookIcon,
									href: "https://www.facebook.com/profile.php?id=61561601730089",
									label: "Facebook"
								},
								{
									Icon: ThreadsIcon,
									href: "https://www.threads.com/@wealthx.celerate",
									label: "Threads"
								}
							].map(({ Icon, href, label }, i) => {
								const iconStyle = {
									color: "hsl(var(--muted-foreground))",
									transition: "color 0.3s ease, transform 0.3s ease",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
									opacity: href ? 1 : .45,
									cursor: href ? "pointer" : "default"
								};
								if (!href) return /* @__PURE__ */ jsxs("span", {
									className: "footer-social-icon",
									"aria-label": label,
									style: iconStyle,
									children: [/* @__PURE__ */ jsx("span", {
										className: "footer-social-tooltip",
										children: label
									}), /* @__PURE__ */ jsx(Icon, { size: 18 })]
								}, i);
								return /* @__PURE__ */ jsxs("a", {
									className: "footer-social-icon",
									href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": label,
									style: iconStyle,
									onMouseEnter: (e) => {
										e.currentTarget.style.color = "#64af03";
										e.currentTarget.style.transform = "translateY(-2px)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.color = "hsl(var(--muted-foreground))";
										e.currentTarget.style.transform = "translateY(0)";
									},
									children: [/* @__PURE__ */ jsx("span", {
										className: "footer-social-tooltip",
										children: label
									}), /* @__PURE__ */ jsx(Icon, { size: 18 })]
								}, i);
							})
						}), /* @__PURE__ */ jsx("a", {
							href: "https://wealthxcelerate.app.clientclub.net/",
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								background: "none",
								border: "none",
								cursor: "pointer",
								padding: 0,
								textDecoration: "none",
								fontSize: "0.75rem",
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: "0.15em",
								color: "hsl(var(--muted-foreground))",
								transition: "color 0.3s ease",
								display: "inline-block"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.color = "hsl(87 97% 45%)";
								e.currentTarget.style.textShadow = "0 0 15px rgba(100, 175, 3, 0.6)";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.color = "hsl(var(--muted-foreground))";
								e.currentTarget.style.textShadow = "none";
							},
							children: "WXC University →"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .footer-social-tooltip {
          position: absolute;
          left: 50%;
          bottom: calc(100% + 0.75rem);
          transform: translate(-50%, 6px);
          padding: 0.35rem 0.6rem;
          border: 1px solid rgba(100, 175, 3, 0.35);
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
        }
        .footer-social-icon:hover .footer-social-tooltip,
        .footer-social-icon:focus-visible .footer-social-tooltip {
          opacity: 1;
          transform: translate(-50%, 0);
        }
        @media (max-width: 768px) {
          .main-footer {
            padding: 60px 0 40px !important;
          }
          .footer-top-section {
            gap: 3rem !important;
            margin-bottom: 3rem !important;
          }
          .footer-brand-column {
            gap: 1.5rem !important;
          }
        }
      ` })
		]
	});
};
//#endregion
//#region src/components/SEO.tsx
var SEO = ({ title = "WealthXcelerate", description = "A complete financial blueprint for wealth, protection, and legacy. Led by Ray Lewis & Dennis M. Postema.", type = "website", url = "https://wealthxcelerate.com", image = "https://wealthxcelerate.com/logo-dark.png", structuredData, children }) => {
	return /* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: title }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: url
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: type
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: url
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: title
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: image
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:card",
			content: "summary_large_image"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:url",
			content: url
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:title",
			content: title
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:image",
			content: image
		}),
		structuredData && /* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(structuredData)
		}),
		children
	] });
};
//#endregion
//#region src/pages/Home.tsx
var Home = () => {
	return /* @__PURE__ */ jsxs("div", {
		style: { background: "transparent" },
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "WealthXcelerate | Faith-Based Financial & Legacy Blueprint",
				description: "Transform your financial future with WealthXcelerate. Led by Ray Lewis and Dennis M. Postema, RFC. Faith, leadership, ethics, education, and legacy.",
				url: "https://wealthxcelerate.com",
				structuredData: {
					"@context": "https://schema.org",
					"@graph": [{
						"@type": "WebSite",
						"@id": "https://wealthxcelerate.com/#website",
						"url": "https://wealthxcelerate.com",
						"name": "WealthXcelerate",
						"description": "Faith-based financial movement and legacy architecture platform led by Ray Lewis and Dennis M. Postema, RFC."
					}, {
						"@type": "Organization",
						"@id": "https://wealthxcelerate.com/#organization",
						"name": "WealthXcelerate",
						"url": "https://wealthxcelerate.com",
						"logo": "https://wealthxcelerate.com/logo-dark.png",
						"description": "A complete financial blueprint for wealth, protection, and generational legacy.",
						"founders": [{
							"@type": "Person",
							"name": "Ray Lewis"
						}, {
							"@type": "Person",
							"name": "Dennis M. Postema, RFC"
						}],
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "2014 Baltimore Street",
							"addressLocality": "Defiance",
							"addressRegion": "OH",
							"postalCode": "43512",
							"addressCountry": "US"
						}
					}]
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsxs("div", {
					className: "desktop-only",
					style: {
						position: "relative",
						zIndex: 10,
						backgroundColor: "hsl(var(--background))"
					},
					children: [
						/* @__PURE__ */ jsx(TransformationSection, {}),
						/* @__PURE__ */ jsx(MagazineSection, {}),
						/* @__PURE__ */ jsx(BookSection, {}),
						/* @__PURE__ */ jsx(Testimonials, {}),
						/* @__PURE__ */ jsx(CTASection, {})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mobile-only",
					style: {
						flexDirection: "column",
						overflow: "hidden"
					},
					children: [
						/* @__PURE__ */ jsx(MobileTransformationHeader, {}),
						/* @__PURE__ */ jsx(TransformationSection, { isMobile: true }),
						/* @__PURE__ */ jsx(MagazineSection, { isMobile: true }),
						/* @__PURE__ */ jsx(BookSection, { isMobile: true }),
						/* @__PURE__ */ jsx(Testimonials, {}),
						/* @__PURE__ */ jsx(CTASection, {})
					]
				})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
};
//#endregion
//#region src/pages/About.tsx
var About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const values = [
		{
			title: "Leadership",
			desc: "Led by a Hall of Famer and a master strategist with 23+ years of financial\xA0dominance."
		},
		{
			title: "Ethics",
			desc: "Your family's prosperity is our north star. We operate with radical\xA0transparency."
		},
		{
			title: "Education",
			desc: "We don't sell products. We provide a world-class financial education\xA0blueprint."
		},
		{
			title: "Legacy",
			desc: "Designing wealth architectures that transcend generations and\xA0borders."
		}
	];
	const fadeUp = {
		hidden: {
			opacity: 0,
			y: 40
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .8,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "#000000",
			color: "#ffffff",
			minHeight: "100vh",
			overflowX: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "The Visionaries | WealthXcelerate",
				description: "Meet the architects of financial freedom: Ray Lewis and Dennis M. Postema. Experience the intersection of championship leadership and financial mastery.",
				url: "https://wealthxcelerate.com/about",
				structuredData: {
					"@context": "https://schema.org",
					"@graph": [
						{
							"@type": "AboutPage",
							"@id": "https://wealthxcelerate.com/about",
							"url": "https://wealthxcelerate.com/about",
							"name": "The Visionaries | WealthXcelerate",
							"description": "Meet Ray Lewis and Dennis M. Postema, RFC - the co-founders and legacy architects behind WealthXcelerate."
						},
						{
							"@type": "Person",
							"name": "Ray Lewis",
							"jobTitle": "Co-Founder & Lead Coach",
							"description": "Pro Football Hall of Famer, 2x Super Bowl Champion, and co-founder of WealthXcelerate.",
							"affiliation": {
								"@type": "Organization",
								"name": "WealthXcelerate"
							}
						},
						{
							"@type": "Person",
							"name": "Dennis M. Postema, RFC",
							"jobTitle": "Co-Founder & Registered Financial Consultant",
							"description": "Registered Financial Consultant, international best-selling author, and financial strategist.",
							"url": "https://dennispostema.com",
							"sameAs": ["https://www.linkedin.com/in/dennispostema"],
							"affiliation": {
								"@type": "Organization",
								"name": "WealthXcelerate"
							}
						}
					]
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("section", {
				style: {
					paddingTop: "clamp(180px, 20vh, 250px)",
					paddingBottom: "0",
					position: "relative"
				},
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						top: "10%",
						left: "50%",
						transform: "translateX(-50%)",
						fontSize: "25vw",
						fontWeight: 950,
						color: "rgba(255,255,255,0.02)",
						whiteSpace: "nowrap",
						pointerEvents: "none",
						zIndex: 0,
						letterSpacing: "-0.05em"
					},
					children: "ARCHITECTS"
				}), /* @__PURE__ */ jsx("div", {
					className: "container",
					style: {
						position: "relative",
						zIndex: 1
					},
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: "hidden",
						animate: "show",
						variants: { show: { transition: { staggerChildren: .1 } } },
						style: { textAlign: "center" },
						children: [/* @__PURE__ */ jsx(motion.p, {
							variants: fadeUp,
							style: {
								fontSize: "14px",
								fontWeight: 800,
								textTransform: "uppercase",
								letterSpacing: "0.6em",
								color: "#fff",
								marginBottom: "3rem"
							},
							children: "The Founders & Vision"
						}), /* @__PURE__ */ jsxs(motion.h1, {
							variants: fadeUp,
							style: {
								fontSize: "clamp(1.5rem, 6.5vw, 6.5rem)",
								fontWeight: 400,
								lineHeight: .8,
								margin: 0,
								letterSpacing: "-0.07em",
								textTransform: "uppercase"
							},
							children: [
								"Mastery.",
								/* @__PURE__ */ jsx("br", {}),
								"Legacy.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									style: {
										color: "#fff",
										display: "block"
									},
									children: "Impact."
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "220px 0 120px",
					background: "linear-gradient(180deg, transparent 0%, rgba(100,175,3,0.05) 50%, transparent 100%)",
					position: "relative"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 50
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: 1.2 },
						className: "manifesto-quote-container",
						style: {
							maxWidth: "1000px",
							margin: "0 auto",
							textAlign: "center",
							position: "relative",
							padding: "0 4rem"
						},
						children: [
							/* @__PURE__ */ jsx("span", {
								style: {
									position: "absolute",
									top: "-8rem",
									left: 0,
									width: "100%",
									textAlign: "center",
									fontSize: "15rem",
									color: "#64af03",
									fontFamily: "serif",
									fontWeight: 900,
									opacity: .1,
									lineHeight: 1,
									pointerEvents: "none",
									zIndex: 0,
									userSelect: "none"
								},
								children: "“"
							}),
							/* @__PURE__ */ jsxs("p", {
								style: {
									fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
									fontWeight: 300,
									lineHeight: 1.4,
									margin: "0",
									fontFamily: "\"Casanova Serif Display\", serif",
									color: "rgba(255,255,255,0.9)",
									position: "relative",
									zIndex: 1
								},
								children: [
									"\"We didn't build WealthXcelerate to be another financial firm. We built it to be a ",
									/* @__PURE__ */ jsx("span", {
										style: {
											color: "#64af03",
											fontWeight: 600
										},
										children: "sanctuary for legacy"
									}),
									" where the world's most driven individuals secure their future.\""
								]
							}),
							/* @__PURE__ */ jsx("div", { style: {
								width: "60px",
								height: "2px",
								background: "#64af03",
								margin: "3rem auto 0",
								position: "relative",
								zIndex: 1
							} })
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: { padding: "0 0 120px" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx("div", {
						style: { marginBottom: "120px" },
						children: /* @__PURE__ */ jsxs(HoverGalaxyCard, {
							particleCount: 30,
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							whileHover: {},
							transition: { duration: .4 },
							style: {
								background: "rgba(255, 255, 255, 0.02)",
								border: "1px solid rgba(255, 255, 255, 0.05)",
								borderRadius: "4rem",
								padding: "clamp(2rem, 6vw, 6rem)",
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
								gap: "6rem",
								alignItems: "center",
								overflow: "hidden",
								position: "relative"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: { position: "relative" },
								children: [/* @__PURE__ */ jsx("div", { style: {
									position: "absolute",
									top: "-10%",
									left: "-10%",
									width: "120%",
									height: "120%",
									background: "radial-gradient(circle, rgba(100, 175, 3, 0.1) 0%, transparent 70%)",
									zIndex: 0
								} }), /* @__PURE__ */ jsx("div", {
									style: {
										borderRadius: "2.5rem",
										overflow: "hidden",
										aspectRatio: "4/5",
										position: "relative",
										zIndex: 1,
										boxShadow: "0 50px 100px -30px rgba(0,0,0,0.5)"
									},
									children: /* @__PURE__ */ jsx("img", {
										src: "/ray-lewis.png",
										alt: "Ray Lewis",
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover"
										}
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								style: {
									position: "relative",
									zIndex: 1
								},
								children: [
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "14px",
											fontWeight: 800,
											color: "#fff",
											letterSpacing: "0.5em",
											textTransform: "uppercase",
											marginBottom: "1.5rem"
										},
										children: "The Visionary"
									}),
									/* @__PURE__ */ jsx("h2", {
										style: {
											fontSize: "clamp(2.5rem, 8vw, 72px)",
											fontWeight: 400,
											lineHeight: .9,
											margin: "0 0 2rem 0",
											letterSpacing: "-0.05em",
											whiteSpace: "normal",
											wordBreak: "keep-all"
										},
										children: "RAY LEWIS"
									}),
									/* @__PURE__ */ jsx("div", { style: {
										height: "1px",
										width: "40px",
										background: "rgba(255,255,255,0.2)",
										marginBottom: "2rem"
									} }),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "1.1rem",
											color: "rgba(255,255,255,0.7)",
											lineHeight: 1.6,
											marginBottom: "3rem",
											fontWeight: 300
										},
										children: "A Pro Football Hall of Famer and 2x Super Bowl Champion. Ray brings the intensity of a champion to the world of wealth architecture, proving that leadership is the ultimate\xA0currency."
									}),
									/* @__PURE__ */ jsxs(Link, {
										to: "/contact",
										style: {
											display: "inline-flex",
											alignItems: "center",
											gap: "1rem",
											color: "#64af03",
											textDecoration: "none",
											fontSize: "0.9rem",
											fontWeight: 700,
											textTransform: "uppercase",
											letterSpacing: "0.1em",
											transition: "all 0.3s ease"
										},
										onMouseEnter: (e) => {
											e.currentTarget.style.gap = "1.5rem";
											e.currentTarget.style.color = "hsl(87 97% 45%)";
										},
										onMouseLeave: (e) => {
											e.currentTarget.style.gap = "1rem";
											e.currentTarget.style.color = "#64af03";
										},
										children: ["Connect with Ray ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
									})
								]
							})]
						})
					}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(HoverGalaxyCard, {
						particleCount: 30,
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						whileHover: {},
						transition: { duration: .4 },
						style: {
							background: "rgba(255, 255, 255, 0.02)",
							border: "1px solid rgba(255, 255, 255, 0.05)",
							borderRadius: "4rem",
							padding: "clamp(2rem, 6vw, 6rem)",
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
							gap: "6rem",
							alignItems: "center",
							overflow: "hidden",
							position: "relative"
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								zIndex: 1,
								order: 1
							},
							children: [
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "14px",
										fontWeight: 800,
										color: "#fff",
										letterSpacing: "0.5em",
										textTransform: "uppercase",
										marginBottom: "1.5rem"
									},
									children: "The Strategist"
								}),
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "clamp(2.5rem, 8vw, 72px)",
										fontWeight: 400,
										lineHeight: .9,
										margin: "0 0 2rem 0",
										letterSpacing: "-0.05em",
										whiteSpace: "normal",
										wordBreak: "keep-all"
									},
									children: "DENNIS M. POSTEMA"
								}),
								/* @__PURE__ */ jsx("div", { style: {
									height: "1px",
									width: "40px",
									background: "rgba(255,255,255,0.2)",
									marginBottom: "2rem"
								} }),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "1.1rem",
										color: "rgba(255,255,255,0.7)",
										lineHeight: 1.6,
										marginBottom: "3rem",
										fontWeight: 300
									},
									children: "A Registered Financial Consultant and serial entrepreneur. Dennis translates complex financial landscapes into actionable blueprints for high net worth individuals\xA0worldwide."
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "1rem",
										color: "#64af03",
										textDecoration: "none",
										fontSize: "0.9rem",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										transition: "all 0.3s ease"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.gap = "1.5rem";
										e.currentTarget.style.color = "hsl(87 97% 45%)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.gap = "1rem";
										e.currentTarget.style.color = "#64af03";
									},
									children: ["Connect with Dennis ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								order: 2
							},
							children: [/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								top: "-10%",
								right: "-10%",
								width: "120%",
								height: "120%",
								background: "radial-gradient(circle, rgba(100, 175, 3, 0.1) 0%, transparent 70%)",
								zIndex: 0
							} }), /* @__PURE__ */ jsx("div", {
								style: {
									borderRadius: "2.5rem",
									overflow: "hidden",
									aspectRatio: "4/5",
									position: "relative",
									zIndex: 1,
									boxShadow: "0 50px 100px -30px rgba(0,0,0,0.5)",
									maxWidth: "450px",
									margin: "0 auto"
								},
								children: /* @__PURE__ */ jsx("img", {
									src: "/dennis-postema.png",
									alt: "Dennis M. Postema",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover"
									}
								})
							})]
						})]
					}) })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "0 0 120px",
					backgroundColor: "rgba(255,255,255,0.01)",
					backdropFilter: "blur(16px)",
					WebkitBackdropFilter: "blur(16px)",
					borderTop: "1px solid rgba(255,255,255,0.05)"
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							marginBottom: "6rem"
						},
						children: [/* @__PURE__ */ jsx("h2", {
							className: "foundational-pillars-header",
							style: {
								fontSize: "72px",
								fontWeight: 400,
								color: "#64af03",
								marginBottom: "1.5rem",
								letterSpacing: "-0.03em"
							},
							children: "Our Foundational Pillars"
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "1.1rem",
								color: "rgba(255,255,255,0.5)",
								maxWidth: "700px",
								margin: "0 auto",
								lineHeight: 1.6,
								textWrap: "balance"
							},
							children: "Built on championship leadership meets decades of real-world financial\xA0expertise."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "pillars-grid",
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(4, 1fr)",
							gap: "2rem"
						},
						children: values.map((val, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
							particleCount: 15,
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: i * .1
							},
							whileHover: {},
							style: {
								padding: "3rem 2rem",
								background: "rgba(255,255,255,0.02)",
								border: "1px solid rgba(255,255,255,0.05)",
								borderRadius: "2.5rem",
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								gap: "1.5rem",
								justifyContent: "center",
								transition: "background-color 0.3s ease, border-color 0.3s ease"
							},
							children: [/* @__PURE__ */ jsx("h4", {
								style: {
									fontSize: "1.5rem",
									fontWeight: 400,
									color: "#64af03",
									textTransform: "uppercase",
									margin: 0,
									letterSpacing: "0.02em"
								},
								children: val.title
							}), /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "1.1rem",
									color: "rgba(255,255,255,0.7)",
									lineHeight: 1.6,
									margin: 0,
									fontWeight: 300
								},
								children: val.desc
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "0 0 200px",
					textAlign: "center"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						style: {
							background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
							border: "1px solid rgba(255,255,255,0.05)",
							borderRadius: "5rem",
							padding: "clamp(3rem, 8vw, 8rem)",
							position: "relative",
							overflow: "hidden"
						},
						children: [
							/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "100%",
								height: "100%",
								background: "radial-gradient(circle, rgba(100, 175, 3, 0.1) 0%, transparent 70%)",
								pointerEvents: "none"
							} }),
							/* @__PURE__ */ jsxs("h2", {
								style: {
									fontSize: "72px",
									fontWeight: 400,
									letterSpacing: "-0.06em",
									margin: "0 0 2rem 0",
									lineHeight: .9,
									textTransform: "uppercase"
								},
								children: [
									"Your Legacy",
									/* @__PURE__ */ jsx("br", {}),
									"Starts Now."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "1.1rem",
									color: "rgba(255,255,255,0.6)",
									marginBottom: "4rem",
									maxWidth: "500px",
									margin: "0 auto 4rem"
								},
								children: "Join the elite circle of individuals who don't just dream of the future—they architect it."
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									display: "flex",
									gap: "1.5rem",
									justifyContent: "center",
									flexWrap: "wrap"
								},
								children: /* @__PURE__ */ jsx(HoverGalaxyLink, {
									to: "/contact",
									className: "btn btn-outline",
									style: {
										padding: "1.5rem 3.5rem",
										borderRadius: "8px",
										color: "hsl(87 97% 45%)",
										border: "1px solid hsl(87 97% 45%)",
										backgroundColor: "transparent",
										textDecoration: "none",
										fontWeight: 800,
										fontSize: "14px",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										transition: "all 0.3s ease",
										whiteSpace: "nowrap"
									},
									whileHover: {
										backgroundColor: "rgba(100, 175, 3, 0.1)",
										color: "hsl(87 97% 45%)",
										borderColor: "hsl(87 97% 45%)"
									},
									children: "Secure Your Blueprint"
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 899px) {
          .foundational-pillars-header {
            white-space: normal !important;
            word-break: keep-all;
          }
          .manifesto-quote-container {
            padding: 0 1.5rem !important;
            overflow: hidden !important;
          }
          .manifesto-quote-container span:first-child {
            display: none !important;
          }
          .manifesto-quote-container p {
            font-size: 1.35rem !important;
            line-height: 1.5 !important;
            padding: 2.5rem 0 !important;
            border-top: 1px solid rgba(100, 175, 3, 0.4);
            border-bottom: 1px solid rgba(100, 175, 3, 0.4);
            color: #fff !important;
          }
          .manifesto-quote-container p span {
            font-size: inherit !important;
          }
        }
      ` })
		]
	});
};
//#endregion
//#region src/pages/Login.tsx
var Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "mobile-stack",
		style: {
			minHeight: "100vh",
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			overflow: "hidden",
			background: "transparent"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Partner Login | WealthXcelerate",
				description: "Secure portal access to the WealthXcelerate partner ecosystem and training dashboard.",
				url: "https://wealthxcelerate.com/login",
				structuredData: {
					"@context": "https://schema.org",
					"@type": "WebPage",
					"@id": "https://wealthxcelerate.com/login",
					"url": "https://wealthxcelerate.com/login",
					"name": "Partner Login | WealthXcelerate",
					"description": "Secure access portal for WealthXcelerate members and partners."
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					background: "hsl(var(--card))",
					borderRight: "1px solid hsl(var(--border) / 0.5)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "3rem 4rem",
					position: "relative",
					overflow: "hidden"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							position: "absolute",
							bottom: "-5%",
							right: "-5%",
							fontSize: "18rem",
							fontWeight: 900,
							color: "hsl(var(--background) / 0.03)",
							lineHeight: 1,
							userSelect: "none",
							letterSpacing: "-0.05em"
						},
						children: "WX"
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Link, {
						to: "/",
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "0.5rem",
							textDecoration: "none",
							color: "hsl(var(--foreground) / 0.6)",
							fontSize: "0.8rem",
							marginBottom: "4rem"
						},
						children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 16 }), "Back to Home"]
					}), /* @__PURE__ */ jsx("img", {
						src: "/logo-white.png",
						alt: "WealthXcelerate",
						style: {
							height: "44px",
							width: "auto",
							filter: "brightness(0) invert(1)",
							display: "block"
						}
					})] }),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: 1
						},
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "1.5rem"
						},
						children: [/* @__PURE__ */ jsx("p", {
							style: {
								fontFamily: "\"Casanova Serif Display\", serif",
								fontStyle: "italic",
								fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
								color: "hsl(var(--foreground))",
								lineHeight: 1.4,
								maxWidth: "420px"
							},
							children: "\"Financial freedom isn't a destination — it's a daily decision.\""
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "1rem"
							},
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: "40px",
								height: "2px",
								backgroundColor: "hsl(var(--primary))"
							} }), /* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "0.75rem",
									fontWeight: 600,
									textTransform: "uppercase",
									letterSpacing: "0.15em",
									color: "hsl(var(--primary))"
								},
								children: "WealthXcelerate Partners"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: "3rem",
							paddingTop: "2rem",
							borderTop: "1px solid hsl(var(--background) / 0.08)"
						},
						children: [
							{
								num: "10K+",
								label: "Members"
							},
							{
								num: "$2B+",
								label: "Wealth Built"
							},
							{
								num: "15+",
								label: "Years"
							}
						].map((s, i) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "1.5rem",
								fontWeight: 900,
								color: "hsl(var(--foreground))",
								lineHeight: 1
							},
							children: s.num
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontSize: "0.65rem",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "hsl(var(--foreground) / 0.4)",
								marginTop: "0.25rem"
							},
							children: s.label
						})] }, i))
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: {
					background: "transparent",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "3rem",
					position: "relative"
				},
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .9,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					style: {
						width: "100%",
						maxWidth: "420px",
						display: "flex",
						flexDirection: "column",
						gap: "2.5rem"
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem"
							},
							children: [
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.65rem",
										fontWeight: 800,
										textTransform: "uppercase",
										letterSpacing: "0.3em",
										color: "hsl(var(--primary))"
									},
									children: "Secure Access"
								}),
								/* @__PURE__ */ jsxs("h1", {
									style: {
										fontSize: "2.5rem",
										lineHeight: .95,
										textTransform: "uppercase",
										letterSpacing: "-0.03em",
										margin: 0
									},
									children: [
										"Partner",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											style: {
												fontFamily: "\"Casanova Serif Display\", serif",
												fontStyle: "normal",
												fontWeight: 400,
												textTransform: "none",
												color: "hsl(var(--foreground))"
											},
											children: "Login"
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									style: {
										fontSize: "0.875rem",
										color: "hsl(var(--muted-foreground))",
										marginTop: "0.5rem",
										lineHeight: 1.6
									},
									children: "Enter your credentials to access your WealthXcelerate partner dashboard."
								})
							]
						}),
						/* @__PURE__ */ jsxs("form", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "1.25rem"
							},
							onSubmit: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "0.5rem"
									},
									children: [/* @__PURE__ */ jsx("label", {
										style: {
											fontSize: "0.65rem",
											fontWeight: 800,
											textTransform: "uppercase",
											letterSpacing: "0.15em",
											color: "hsl(var(--foreground))"
										},
										children: "Email Address"
									}), /* @__PURE__ */ jsx("input", {
										type: "email",
										placeholder: "name@example.com",
										required: true,
										style: {
											padding: "0.875rem 1.25rem",
											borderRadius: "0.75rem",
											border: "1px solid hsl(var(--border))",
											fontSize: "0.875rem",
											outline: "none",
											backgroundColor: "hsl(var(--input))",
											color: "hsl(var(--foreground))",
											transition: "border-color 0.3s ease",
											fontFamily: "Roboto, sans-serif",
											width: "100%",
											boxSizing: "border-box"
										}
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "0.5rem"
									},
									children: [/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center"
										},
										children: [/* @__PURE__ */ jsx("label", {
											style: {
												fontSize: "0.65rem",
												fontWeight: 800,
												textTransform: "uppercase",
												letterSpacing: "0.15em",
												color: "hsl(var(--foreground))"
											},
											children: "Password"
										}), /* @__PURE__ */ jsx("a", {
											href: "#",
											style: {
												fontSize: "0.75rem",
												color: "hsl(var(--primary))",
												textDecoration: "none",
												fontWeight: 600
											},
											children: "Forgot password?"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										style: { position: "relative" },
										children: [/* @__PURE__ */ jsx("input", {
											type: showPassword ? "text" : "password",
											placeholder: "••••••••",
											required: true,
											style: {
												padding: "0.875rem 3rem 0.875rem 1.25rem",
												borderRadius: "0.75rem",
												border: "1px solid hsl(var(--border))",
												fontSize: "0.875rem",
												outline: "none",
												backgroundColor: "hsl(var(--input))",
												color: "hsl(var(--foreground))",
												transition: "border-color 0.3s ease",
												fontFamily: "Roboto, sans-serif",
												width: "100%",
												boxSizing: "border-box"
											}
										}), /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => setShowPassword(!showPassword),
											style: {
												position: "absolute",
												right: "1rem",
												top: "50%",
												transform: "translateY(-50%)",
												background: "none",
												border: "none",
												cursor: "pointer",
												color: "hsl(var(--muted-foreground))",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: 0
											},
											children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsx(Eye, { size: 16 })
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("button", {
									type: "submit",
									className: "btn btn-primary",
									style: {
										padding: "1rem 2rem",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "0.75rem",
										marginTop: "0.5rem",
										width: "100%",
										fontSize: "0.8rem"
									},
									children: [/* @__PURE__ */ jsx(LogIn, { size: 18 }), "Sign In to Dashboard"]
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							style: {
								textAlign: "center",
								fontSize: "0.8rem",
								color: "hsl(var(--muted-foreground))"
							},
							children: [
								"Not a partner yet?",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "#",
									style: {
										color: "hsl(var(--foreground))",
										fontWeight: 700,
										textDecoration: "none"
									},
									children: "Contact us →"
								})
							]
						})
					]
				})
			})
		]
	});
};
//#endregion
//#region src/pages/TVMedia.tsx
var TVMedia = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "transparent",
			color: "hsl(var(--foreground))",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "WealthX TV & Media | WealthXcelerate",
				description: "Stream exclusive financial television segments, athlete stories, and motivational leadership content from Ray Lewis and Dennis M. Postema.",
				url: "https://wealthxcelerate.com/tv",
				structuredData: {
					"@context": "https://schema.org",
					"@graph": [{
						"@type": "WebPage",
						"@id": "https://wealthxcelerate.com/tv",
						"url": "https://wealthxcelerate.com/tv",
						"name": "WealthX TV & Media | WealthXcelerate",
						"description": "Exclusive television segments, athlete interviews, leadership streams, and financial insights led by Ray Lewis and Dennis M. Postema."
					}, {
						"@type": "MediaObject",
						"name": "WealthX TV & Motivation Streaming",
						"url": "https://stream.motivationandsuccess.com/",
						"description": "High-octane motivation and financial intelligence content streaming platform."
					}]
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				style: {
					position: "relative",
					paddingTop: "160px",
					paddingBottom: "80px",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					style: {
						position: "relative",
						zIndex: 1
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							marginBottom: "4rem"
						},
						children: [/* @__PURE__ */ jsx(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .1
							},
							style: {
								fontSize: "14px",
								fontWeight: 800,
								textTransform: "uppercase",
								letterSpacing: "0.4em",
								color: "#fff",
								marginBottom: "1.5rem"
							},
							children: "The Media Hub"
						}), /* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							style: {
								fontSize: "clamp(1.5rem, 6.5vw, 6.5rem)",
								fontWeight: 400,
								lineHeight: 1.1,
								letterSpacing: "-0.03em",
								margin: "0"
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									style: { color: "hsl(var(--primary))" },
									children: "WealthX"
								}),
								" ",
								/* @__PURE__ */ jsx("span", {
									style: {
										color: "#fff",
										fontStyle: "normal",
										fontFamily: "\"Casanova Serif Display\", serif"
									},
									children: "TV"
								})
							]
						})]
					}), /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							scale: .98,
							y: 40
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							duration: 1.2,
							delay: .2,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						style: {
							position: "relative",
							width: "100%",
							aspectRatio: "16/9",
							borderRadius: "2rem",
							overflow: "hidden",
							backgroundColor: "#000",
							boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid rgba(255,255,255,0.05)",
							minHeight: "400px"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								style: {
									position: "absolute",
									inset: 0,
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									opacity: 1
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: { overflow: "hidden" },
									children: /* @__PURE__ */ jsx("img", {
										src: "/ray-lewis.png",
										alt: "Ray Lewis",
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "top"
										}
									})
								}), /* @__PURE__ */ jsx("div", {
									style: { overflow: "hidden" },
									children: /* @__PURE__ */ jsx("img", {
										src: "/dennis-postema.png",
										alt: "Dennis M. Postema",
										style: {
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "top"
										}
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", { style: {
								position: "absolute",
								inset: 0,
								background: "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.6) 100%)"
							} }),
							/* @__PURE__ */ jsxs("div", {
								style: {
									position: "relative",
									zIndex: 10,
									textAlign: "center",
									padding: "2rem"
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											width: "80%",
											maxWidth: "240px",
											margin: "0 auto 1.5rem"
										},
										children: /* @__PURE__ */ jsx("img", {
											src: "/logo-dark.png",
											alt: "WealthXcelerate Logo",
											style: {
												width: "100%",
												height: "auto",
												filter: "brightness(0) invert(1)"
											}
										})
									}),
									/* @__PURE__ */ jsx("h2", {
										style: {
											fontSize: "clamp(2rem, 6vw, 5rem)",
											fontWeight: 400,
											color: "#64af03",
											textTransform: "uppercase",
											letterSpacing: "0.15em",
											margin: 0,
											lineHeight: 1,
											textShadow: "0 4px 20px rgba(0,0,0,0.5)"
										},
										children: "Coming Soon"
									}),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "clamp(0.7rem, 2vw, 1.2rem)",
											color: "#fff",
											marginTop: "1rem",
											letterSpacing: "0.4em",
											textTransform: "uppercase",
											textShadow: "0 2px 10px rgba(0,0,0,0.5)"
										},
										children: "Streaming the transformation"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					padding: "80px 0",
					textAlign: "center",
					borderTop: "1px solid rgba(255,255,255,0.05)"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						style: {
							maxWidth: "700px",
							margin: "0 auto"
						},
						children: [
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "14px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.4em",
									color: "#fff",
									marginBottom: "1.5rem"
								},
								children: "Streaming Transformation"
							}),
							/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "72px",
									fontWeight: 400,
									marginBottom: "1.25rem",
									color: "#64af03",
									textTransform: "uppercase",
									lineHeight: 1,
									whiteSpace: "nowrap"
								},
								children: "Watch WealthX TV"
							}),
							/* @__PURE__ */ jsx("p", {
								style: {
									fontSize: "1.1rem",
									color: "hsl(var(--muted-foreground))",
									marginBottom: "2.5rem",
									lineHeight: 1.6
								},
								children: "Exclusive interviews, financial education, athlete stories, faith-driven leadership, and behind-the-scenes access to the movement."
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://stream.motivationandsuccess.com/",
								target: "_blank",
								rel: "noopener noreferrer",
								style: { display: "inline-block" },
								children: /* @__PURE__ */ jsx(HoverGalaxyButton, {
									whileHover: {
										scale: 1.05,
										backgroundColor: "rgba(100, 175, 3, 0.1)",
										color: "hsl(87 97% 45%)"
									},
									whileTap: { scale: .98 },
									className: "btn btn-outline",
									style: {
										padding: "1rem 3rem",
										fontSize: "14px",
										borderRadius: "8px",
										fontWeight: 700,
										color: "hsl(87 97% 45%)",
										border: "1px solid hsl(87 97% 45%)",
										backgroundColor: "transparent",
										textTransform: "uppercase",
										letterSpacing: "0.1em",
										transition: "all 0.2s ease"
									},
									children: "Watch now"
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
};
//#endregion
//#region src/pages/Books.tsx
var BOOKS = [
	{
		id: "cost-of-goodbye",
		title: "The Cost of Goodbye",
		summary: "From a decorated financial consultant who has faced personal tragedy, a simple, powerful guide to paying for final wishes with final expense insurance.",
		fullSummary: [
			"Dennis M. Postema, RFC is a successful entrepreneur, international best-selling author, certified life coach, speaker, registered financial consultant, certified personal trainer and certified health coach. He is the founder of multiple companies you can view at DennisPostema.com.",
			"For over 2 decades, Dennis has taught and coached clients, agents and associates how to find motivation and ascend psychological barriers to achieve success. His dedication to improving lives has led him to work with renowned motivational and self-help industry heavyweights.",
			"Dennis's personal experience with tragedy, life-changing surgeries and health issues has given him a unique perspective on what it means to achieve success and what is really standing in the way of it. He channels that perspective into educational and motivational books and programs in the topics of finance, perseverance, success and business."
		],
		image: "/book1.png",
		accent: "#64af03",
		label: "",
		tag: "#1 Best Seller",
		link: "https://www.amazon.com/Cost-Goodbye-Simple-Expense-Insurance-ebook/dp/B0GWRRP5GS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SLyZksETe5fLZ-MYsFg6iZdffx7gyNAHi37vQ68-CPI.6Tft2ZLqNh0e3E1Xc3vsqvXb0sHWPOxNdcN8S_EpIak&dib_tag=se&qid=1779123142&refinements=p_27%3ADennis+Postema+RFC&s=digital-text&sr=1-1&text=Dennis+Postema+RFC"
	},
	{
		id: "retire-rich",
		title: "Retire Rich",
		summary: "Dennis M. Postema shatters the myths of traditional retirement planning and reveals a radically different path, one used quietly by the wealthy for decades but rarely taught to everyday families.",
		fullSummary: [
			"What if retirement didn't mean running out of money, fearing market crashes, or handing half your life's work to the IRS? What if it meant freedom, control, and a legacy that outlives you?",
			"In Retire Rich, financial strategist Dennis M. Postema, RFC, shatters the myths of traditional retirement planning and reveals a radically different path, one used quietly by the wealthy for decades but rarely taught to everyday families. With a powerful foreword by NFL Hall of Famer Ray Lewis, this book is more than a financial guide. It is a call to transformation.",
			"Blending financial strategy with faith, Retire Rich isn't about getting rich quick. It's about building a system that works as hard for you as you've worked for it, one that brings peace of mind today and purpose for generations to come."
		],
		image: "/book2.png",
		accent: "#64af03",
		label: "",
		tag: "#1 International Best Seller",
		link: "https://www.amazon.com/Retire-Rich-Blueprint-Universal-Featuring-ebook/dp/B0GTW9RQSY/ref=sr_1_2?dib=eyJ2IjoiMSJ9.SLyZksETe5fLZ-MYsFg6iZdffx7gyNAHi37vQ68-CPI.6Tft2ZLqNh0e3E1Xc3vsqvXb0sHWPOxNdcN8S_EpIak&dib_tag=se&qid=1779123518&refinements=p_27%3ADennis+Postema+RFC&s=digital-text&sr=1-2&text=Dennis+Postema+RFC"
	},
	{
		id: "senior-survival-guide",
		title: "The Senior Survival Guide",
		summary: "Turning 65 is supposed to bring peace of mind. But Medicare leaves costly gaps in dental, vision, and hearing care that can quietly drain savings and compromise quality of life.",
		fullSummary: [
			"Turning 65 is supposed to bring peace of mind—but for many seniors, it brings confusion. Most people assume Medicare has them fully covered. The truth is far more unsettling. When it comes to dental, vision, and hearing care—the very foundations of independence, confidence, and connection—Medicare leaves costly gaps that can quietly drain savings and compromise quality of life.",
			"In The Senior Survival Guide to Dental, Vision, and Hearing Insurance, Dennis M. Postema exposes what too many seniors discover too late. Drawing on real client experiences, clear financial analysis, and decades of professional insight, this book reveals how the system really works, why so many plans fall short, and how to make smarter, more confident decisions before a crisis.",
			"Through powerful stories and plain-English explanations, readers learn how dental, vision, and hearing health are deeply connected to overall wellness, cognitive function, emotional well-being, and long-term independence. You'll see how a single overlooked detail can cost thousands—and how the right planning can protect both your health and your legacy.",
			"This is not a sales pitch or a technical insurance manual. It's an empowering guide designed to replace fear and guesswork with clarity and confidence. Whether you're approaching Medicare, already enrolled, or helping a loved one navigate their options, this book equips you with the knowledge to ask the right questions, avoid common traps, and choose coverage that truly fits you."
		],
		image: "/senior-survival-guide.png",
		accent: "#64af03",
		label: "",
		tag: "Healthcare Series",
		link: "https://www.amazon.com/Senior-Survival-Dental-Hearing-Insurance-ebook/dp/B0GL9MJH7C/ref=books_amazonstores_desktop_mfs_aufs_ap_sc_dsk_0?_encoding=UTF8&pd_rd_w=ZhQYc&content-id=amzn1.sym.9c9a049f-252a-49d9-a8c2-e300a1663200&pf_rd_p=9c9a049f-252a-49d9-a8c2-e300a1663200&pf_rd_r=135-4822016-4819519&pd_rd_wg=nfMPV&pd_rd_r=c8dd0d16-bb0b-4d3c-9257-be432cd526cc"
	}
];
var Books = () => {
	const [activeBookId, setActiveBookId] = useState(null);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const activeBook = BOOKS.find((b) => b.id === activeBookId);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen bg-transparent font-sans selection:bg-[#64af03]/30",
		children: [
			/* @__PURE__ */ jsxs(SEO, {
				title: "Educational Tools & Books | WealthXcelerate",
				description: "Best-selling books and financial blueprints by Dennis M. Postema, RFC. Discover proven strategies for retirement, Medicare, and generational legacy.",
				url: "https://wealthxcelerate.com/books",
				structuredData: {
					"@context": "https://schema.org",
					"@graph": [{
						"@type": "CollectionPage",
						"@id": "https://wealthxcelerate.com/books",
						"url": "https://wealthxcelerate.com/books",
						"name": "Educational Tools & Books | WealthXcelerate",
						"description": "Educational blueprints and best-selling books by Dennis M. Postema, RFC, covering financial freedom, retirement, and legacy planning."
					}, ...BOOKS.map((book) => ({
						"@type": "Book",
						"name": book.title,
						"author": {
							"@type": "Person",
							"name": "Dennis M. Postema, RFC",
							"url": "https://dennispostema.com"
						},
						"description": book.summary,
						"image": `https://wealthxcelerate.com${book.image}`,
						"url": book.link
					}))]
				},
				children: [
					/* @__PURE__ */ jsx("link", {
						rel: "preload",
						as: "image",
						href: "/Avoiding-Legacy-Nightmare.png"
					}),
					/* @__PURE__ */ jsx("link", {
						rel: "preload",
						as: "image",
						href: "/senior-survival-guide.png"
					}),
					/* @__PURE__ */ jsx("link", {
						rel: "preload",
						as: "image",
						href: "/LTM.png"
					}),
					/* @__PURE__ */ jsx("link", {
						rel: "preload",
						as: "image",
						href: "/Financial-Blueprint.png"
					})
				]
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("style", { children: `
        .books-page-header {
          padding-top: 15rem; /* Forces header far below navbar */
          padding-bottom: 5rem;
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .books-title-main {
          font-size: clamp(1.5rem, 6.5vw, 6.5rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: hsl(var(--foreground)) !important;
          margin-bottom: 1.5rem;
          white-space: nowrap;
        }
        .books-subtitle {
          font-size: 22px;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .books-card-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 1024px;
          margin: 0 auto;
          padding-bottom: 10rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: relative;
          z-index: 10;
        }
        
        .books-card {
          display: flex !important;
          flex-direction: row !important; /* STRICTLY ENFORCE ROW ON DESKTOP */
          align-items: stretch;
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-radius: 0;
          padding: 2.5rem 0;
          box-shadow: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          gap: 4rem;
          transition: all 0.5s ease;
        }
        .books-card:hover {
          box-shadow: none;
        }
        
        .books-left-col {
          flex-shrink: 0;
          width: 320px;
          background: transparent;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
        }
        .books-book-img {
          width: 160px;
          height: 240px; /* Enforce 2:3 ratio */
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.4));
          transition: transform 0.6s ease;
          z-index: 10;
          position: relative;
          background-color: transparent;
          border-radius: 4px;
          mix-blend-mode: multiply;
        }
        
        .books-right-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          padding: 1rem 0;
        }
        
        .books-card-tag {
          display: inline-block;
          padding: 0.35rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          width: fit-content;
        }
        
        .books-card-title {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: hsl(var(--foreground)) !important;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .books-card-summary {
          font-size: 1.125rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 2.5rem;
          text-wrap: balance;
        }
        
        .books-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.25rem 2.5rem !important; /* Forces thick padding */
          border-radius: 8px !important;
          font-size: 0.9rem !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          color: hsl(var(--background)) !important;
          background-color: hsl(var(--foreground)) !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          width: fit-content !important;
          margin-top: auto;
          text-decoration: none !important;
        }
        .books-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4) !important;
        }

        .books-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.25rem 3rem !important;
          border-radius: 8px !important;
          font-size: 0.9rem !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          color: hsl(var(--foreground)) !important;
          background-color: transparent !important;
          border: 2px solid hsl(var(--foreground)) !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          width: fit-content !important;
          text-decoration: none !important;
        }
        .books-btn-outline:hover {
          background-color: hsl(var(--foreground)) !important;
          color: hsl(var(--background)) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3) !important;
        }

        /* Mobile Overrides */
        @media (max-width: 768px) {
          .books-card {
            flex-direction: column !important;
            text-align: center;
            padding: 1.5rem;
            gap: 2rem;
          }
          .books-right-col {
            text-align: center;
            align-items: center;
          }
          .books-left-col {
            width: 100%;
          }
          .books-page-header {
            padding-top: 10rem;
          }
          .modal-content {
            padding: 2rem !important;
          }
        }

        @keyframes modalBorderGlow {
          0% { border-color: rgba(255,255,255,0.1); }
          50% { border-color: rgba(100, 175, 3, 0.4); }
          100% { border-color: rgba(255,255,255,0.1); }
        }

        .animated-modal-border {
          border: 1px solid rgba(255,255,255,0.1);
          animation: modalBorderGlow 3s infinite ease-in-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 175, 3, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 175, 3, 0.6);
        }
      ` }),
			/* @__PURE__ */ jsx("section", {
				className: "books-page-header",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block mb-6 uppercase tracking-widest",
							style: {
								color: "#ffffff",
								fontSize: "14px",
								fontWeight: 800
							},
							children: "The Signature Series"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "books-title-main",
							children: [
								"Educational ",
								/* @__PURE__ */ jsx("span", {
									style: { color: "#64af03" },
									children: "Blueprints"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "books-subtitle",
							children: "Definitive frameworks for financial transformation and legacy\xA0building. Access the knowledge used to architect generational\xA0wealth."
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "books-card-container",
				children: [BOOKS.map((book, i) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
					particleCount: 12,
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: {
						duration: .7,
						delay: i * .1
					},
					whileHover: {},
					className: "books-card",
					children: [/* @__PURE__ */ jsx("div", {
						className: "books-left-col",
						children: /* @__PURE__ */ jsx("img", {
							src: book.image,
							alt: book.title,
							className: "books-book-img",
							loading: "eager",
							fetchPriority: "high",
							width: "160",
							height: "240",
							style: {
								objectFit: "contain",
								width: "160px",
								height: "240px",
								transform: book.id === "blueprint" ? "scale(1.1)" : "none"
							}
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "books-right-col",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "books-card-tag",
								style: {
									color: book.accent,
									border: `1px solid rgba(100, 175, 3, 0.3)`,
									backgroundColor: `rgba(100, 175, 3, 0.05)`
								},
								children: [book.tag, book.label ? ` • ${book.label}` : ""]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "books-card-title",
								children: book.title
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "books-card-summary",
								children: [/* @__PURE__ */ jsx("p", {
									style: { margin: 0 },
									children: book.summary
								}), book.fullSummary && /* @__PURE__ */ jsxs("button", {
									onClick: () => setActiveBookId(book.id),
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "0.5rem",
										marginTop: "0.75rem",
										fontSize: "0.95rem",
										fontWeight: 700,
										color: book.accent,
										cursor: "pointer",
										border: "none",
										background: "transparent",
										padding: 0,
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										transition: "all 0.3s ease"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.color = "hsl(87, 97%, 45%)";
										e.currentTarget.lastElementChild.style.transform = "translateX(5px)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.color = book.accent;
										e.currentTarget.lastElementChild.style.transform = "translateX(0)";
									},
									children: ["Read Full Summary", /* @__PURE__ */ jsx("span", {
										style: {
											display: "inline-flex",
											transition: "transform 0.3s ease"
										},
										children: /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
									})]
								})]
							}),
							/* @__PURE__ */ jsxs(HoverGalaxyButton, {
								onClick: () => book.link && window.open(book.link, "_blank"),
								className: "btn btn-outline",
								style: {
									padding: "1rem 2.5rem",
									color: "hsl(87 97% 45%)",
									border: "1px solid hsl(87 97% 45%)",
									backgroundColor: "transparent",
									borderRadius: "8px",
									fontWeight: 700,
									fontSize: "14px",
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "0.75rem",
									transition: "all 0.2s ease",
									width: "fit-content"
								},
								whileHover: { color: "hsl(87 97% 45%)" },
								children: ["Secure Your Copy", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
							})
						]
					})]
				}, book.id)), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: .4
					},
					style: {
						textAlign: "center",
						marginTop: "4rem"
					},
					children: [/* @__PURE__ */ jsx("p", {
						style: {
							color: "#71717a",
							marginBottom: "1.5rem",
							fontSize: "1.1rem",
							fontWeight: 300
						},
						children: "Ready to explore further?"
					}), /* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ jsxs(HoverGalaxyButton, {
							onClick: () => window.open("https://www.amazon.com/stores/Dennis-M.-Postema/author/B00BT05QAE?ref=ap_rdr&shoppingPortalEnabled=true", "_blank"),
							className: "btn btn-outline",
							style: {
								padding: "1.25rem 3rem",
								color: "hsl(87 97% 45%)",
								border: "1px solid hsl(87 97% 45%)",
								backgroundColor: "transparent",
								borderRadius: "8px",
								fontWeight: 700,
								fontSize: "14px",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.75rem",
								transition: "all 0.2s ease",
								width: "fit-content"
							},
							whileHover: { color: "hsl(87 97% 45%)" },
							children: ["Browse Complete Library", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: activeBook && activeBook.fullSummary && /* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				style: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: "rgba(0,0,0,0.6)",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					zIndex: 1e3,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "1.5rem"
				},
				onClick: () => setActiveBookId(null),
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .95,
						y: 20
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .95,
						y: 20
					},
					onClick: (e) => e.stopPropagation(),
					className: "modal-content animated-modal-border",
					style: {
						background: "hsl(var(--card))",
						borderRadius: "1.5rem",
						padding: "3rem",
						maxWidth: "700px",
						width: "100%",
						position: "relative",
						boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
						maxHeight: "90vh",
						display: "flex",
						flexDirection: "column",
						overflow: "hidden"
					},
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => setActiveBookId(null),
							style: {
								position: "absolute",
								top: "1.5rem",
								right: "1.5rem",
								background: "rgba(0,0,0,0.05)",
								border: "none",
								borderRadius: "50%",
								padding: "0.5rem",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								transition: "background 0.2s"
							},
							onMouseEnter: (e) => e.currentTarget.style.background = "rgba(0,0,0,0.1)",
							onMouseLeave: (e) => e.currentTarget.style.background = "rgba(0,0,0,0.05)",
							children: /* @__PURE__ */ jsx(X, {
								size: 20,
								color: "hsl(var(--foreground))"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								gap: "1.5rem",
								marginBottom: "2.5rem"
							},
							children: [/* @__PURE__ */ jsx("img", {
								src: activeBook.image,
								alt: activeBook.title,
								style: {
									width: "120px",
									borderRadius: "0.75rem",
									boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
								}
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "2rem",
									fontWeight: 900,
									color: "hsl(var(--foreground))",
									margin: "0 0 0.75rem 0",
									lineHeight: 1.1
								},
								children: activeBook.title
							}), /* @__PURE__ */ jsx("span", {
								style: {
									color: activeBook.accent,
									fontSize: "0.8rem",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									background: "rgba(100, 175, 3, 0.1)",
									padding: "0.35rem 1rem",
									borderRadius: "99px"
								},
								children: activeBook.tag
							})] })]
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								flex: 1,
								overflowY: "auto",
								minHeight: 0,
								paddingRight: "1rem",
								touchAction: "pan-y",
								WebkitOverflowScrolling: "touch",
								pointerEvents: "auto"
							},
							className: "custom-scrollbar",
							onWheel: (e) => e.stopPropagation(),
							children: activeBook.fullSummary.map((para, idx) => /* @__PURE__ */ jsx("p", {
								style: {
									color: "hsl(var(--muted-foreground))",
									fontSize: "1.05rem",
									lineHeight: 1.7,
									marginBottom: "1.25rem"
								},
								children: para
							}, idx))
						})
					]
				})
			}) })
		]
	});
};
//#endregion
//#region src/pages/University.tsx
var University = () => {
	const sections = [
		{
			title: "Section 1: Emotional and Psychological\xA0Attitudes",
			modules: "Modules 1-3",
			icon: /* @__PURE__ */ jsx(Brain, { className: "w-8 h-8" }),
			focus: "Overcoming self-deception, leveraging personal strengths, and achieving Couples Consensus through healthy communication.",
			details: [
				"Honesty is the only\xA0policy",
				"Total responsibility",
				"Internal barriers to\xA0wealth"
			]
		},
		{
			title: "Section 2: The Budget",
			modules: "Modules 4-7",
			icon: /* @__PURE__ */ jsx(Layout, { className: "w-8 h-8" }),
			focus: "A blueprint for freedom. Differentiating between primary, secondary, and tertiary needs while identifying financial waste.",
			details: [
				"Paying Yourself First",
				"Resilient financial base",
				"Foolproof automation"
			]
		},
		{
			title: "Section 3: Saving and Investing",
			modules: "Modules 8-12",
			icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8" }),
			focus: "Accumulation of wealth and the foundation of financial\xA0resilience.",
			details: [
				"6-12 month emergency\xA0fund",
				"Retirement accounts (Roth/Trad)",
				"Five spokes of a holistic\xA0plan"
			]
		},
		{
			title: "Section 4: Mastering Debt",
			modules: "Modules 13-16",
			icon: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8" }),
			focus: "Challenging the idea that all debt is bad. Distinguishing between 'Good Debt' and 'Bad\xA0Debt'.",
			details: [
				"Tactical debt payoff",
				"FICO score mastery",
				"Mortgages & Home\xA0Equity"
			]
		},
		{
			title: "Section 5: Insurance",
			modules: "Modules 17-19",
			icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-8 h-8" }),
			focus: "The 'Roof' of your financial mansion — protection and legacy\xA0tools.",
			details: [
				"Disability insurance",
				"Long-term care planning",
				"Be your own bank"
			]
		}
	];
	const features = [
		{
			title: "Ray’s Sideline Signals",
			desc: "Direct coaching moments from Ray Lewis that draw parallels between the discipline of the locker room and the\xA0boardroom.",
			icon: /* @__PURE__ */ jsx(Users, { className: "text-primary" })
		},
		{
			title: "10-Minute Drills",
			desc: "High-impact, actionable exercises included in every module to turn theoretical insight into immediate practice.",
			icon: /* @__PURE__ */ jsx(Clock, { className: "text-primary" })
		},
		{
			title: "Holistic Approach",
			desc: "An integrated system that coordinates spending, saving, investing, insuring, and future planning.",
			icon: /* @__PURE__ */ jsx(Target, { className: "text-primary" })
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		style: {
			backgroundColor: "hsl(var(--background))",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "WealthXcelerate University | 19-Module Financial Blueprint",
				description: "Complete 19-module financial training program co-founded by Ray Lewis and Dennis M. Postema, RFC. Master budgeting, debt, investments, and legacy.",
				url: "https://wealthxcelerate.com/university",
				structuredData: {
					"@context": "https://schema.org",
					"@graph": [{
						"@type": "EducationalOccupationalProgram",
						"@id": "https://wealthxcelerate.com/university",
						"url": "https://wealthxcelerate.com/university",
						"name": "WealthXcelerate University",
						"description": "A comprehensive 19-module financial training curriculum across 5 core sections: Mindset, Budgeting, Investing, Debt, and Insurance.",
						"provider": {
							"@type": "Organization",
							"name": "WealthXcelerate",
							"url": "https://wealthxcelerate.com"
						},
						"numberOfLessons": 19
					}, {
						"@type": "FAQPage",
						"mainEntity": [{
							"@type": "Question",
							"name": "What is WealthXcelerate University?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "WealthXcelerate University is an integrated 19-module financial training program co-founded by Ray Lewis and Dennis M. Postema, RFC. It teaches practical budgeting, debt elimination, investing, insurance, and generational legacy."
							}
						}, {
							"@type": "Question",
							"name": "What topics are covered in the 19 modules?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "The program covers 5 core sections: 1. Psychological Attitudes & Couples Consensus, 2. Budgeting & Paying Yourself First, 3. Saving & Investing (Roth/Trad/5 Spokes), 4. Mastering Debt & FICO Scores, and 5. Insurance & Legacy Protection."
							}
						}]
					}]
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "clamp(100px, 15vh, 160px) 0 0",
						position: "relative",
						overflow: "hidden",
						backgroundColor: "hsl(var(--background))"
					},
					children: /* @__PURE__ */ jsxs("div", {
						className: "container",
						style: {
							position: "relative",
							zIndex: 10
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								gap: "1.5rem"
							},
							children: [
								/* @__PURE__ */ jsx(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { duration: .8 },
									children: /* @__PURE__ */ jsx("span", {
										style: {
											fontSize: "14px",
											fontWeight: 800,
											textTransform: "uppercase",
											letterSpacing: "0.1em",
											color: "#fff"
										},
										children: "The Ultimate Financial Movement"
									})
								}),
								/* @__PURE__ */ jsxs(motion.h1, {
									initial: {
										opacity: 0,
										y: 30
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .8,
										delay: .2
									},
									className: "wealthxcelerate-title",
									style: {
										fontSize: "clamp(1.5rem, 6.5vw, 6.5rem)",
										fontWeight: 400,
										lineHeight: .9,
										textTransform: "uppercase",
										color: "hsl(var(--foreground))"
									},
									children: [
										"Wealth",
										/* @__PURE__ */ jsx("span", {
											style: { color: "#64af03" },
											children: "X"
										}),
										"celerate"
									]
								}),
								/* @__PURE__ */ jsxs(motion.p, {
									initial: {
										opacity: 0,
										y: 30
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .8,
										delay: .4
									},
									style: {
										fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
										maxWidth: "800px",
										fontWeight: 300,
										color: "hsl(var(--muted-foreground))",
										lineHeight: 1.5,
										padding: "0 1rem"
									},
									children: [
										"Financing Your Life for ",
										/* @__PURE__ */ jsx("span", {
											style: {
												fontWeight: 700,
												color: "#64af03"
											},
											children: "Infinite Financial Potential"
										}),
										". A faith-based blueprint developed by Ray Lewis and Dennis\xA0M.\xA0Postema."
									]
								})
							]
						}), /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: .95
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: 1.2,
								delay: .6
							},
							style: {
								marginTop: "4rem",
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gap: "2rem",
								maxWidth: "1200px",
								margin: "4rem auto 0"
							},
							className: "mobile-stack founders-grid",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "founder-card",
								style: {
									position: "relative",
									borderRadius: "2rem",
									overflow: "hidden",
									backgroundColor: "#f0f0f0",
									border: "1px solid rgba(0,0,0,0.05)",
									aspectRatio: "1 / 1.2"
								},
								children: [/* @__PURE__ */ jsx("img", {
									src: "/ray-lewis.png",
									alt: "Ray Lewis",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover",
										objectPosition: "top center",
										filter: "grayscale(0.2)"
									}
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										padding: "clamp(1.5rem, 4vw, 2.5rem)",
										background: "linear-gradient(to top, #000000, transparent)",
										color: "white"
									},
									children: [/* @__PURE__ */ jsx("h3", {
										style: {
											color: "white",
											margin: 0,
											fontSize: "50px",
											fontWeight: 400,
											lineHeight: 1,
											letterSpacing: "-0.05em",
											textTransform: "uppercase",
											whiteSpace: "nowrap"
										},
										children: "Ray Lewis"
									}), /* @__PURE__ */ jsx("p", {
										style: {
											color: "#64af03",
											margin: "0.5rem 0 0 0",
											fontSize: "22px",
											fontWeight: 600
										},
										children: "NFL Legend & Lead Coach"
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "founder-card",
								style: {
									position: "relative",
									borderRadius: "2rem",
									overflow: "hidden",
									backgroundColor: "#e8e8e8",
									border: "1px solid rgba(0,0,0,0.05)",
									aspectRatio: "1 / 1.2"
								},
								children: [/* @__PURE__ */ jsx("img", {
									src: "/dennis-postema.png",
									alt: "Dennis M. Postema",
									style: {
										width: "100%",
										height: "100%",
										objectFit: "cover",
										objectPosition: "top center",
										filter: "grayscale(0.2)"
									}
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										padding: "clamp(1.5rem, 4vw, 2.5rem)",
										background: "linear-gradient(to top, #000000, transparent)",
										color: "white"
									},
									children: [/* @__PURE__ */ jsx("h3", {
										style: {
											color: "white",
											margin: 0,
											fontSize: "50px",
											fontWeight: 400,
											lineHeight: 1,
											letterSpacing: "-0.05em",
											textTransform: "uppercase",
											whiteSpace: "nowrap"
										},
										children: "Dennis M. Postema"
									}), /* @__PURE__ */ jsx("p", {
										style: {
											color: "#64af03",
											margin: "0.5rem 0 0 0",
											fontSize: "22px",
											fontWeight: 600
										},
										children: "Financial Expert & Founder"
									})]
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsxs("section", {
					style: {
						padding: "120px 0 0",
						backgroundColor: "#000",
						position: "relative",
						overflow: "hidden",
						borderTop: "1px solid rgba(255,255,255,0.05)",
						borderBottom: "1px solid rgba(255,255,255,0.05)"
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "25vw",
							fontWeight: 900,
							color: "rgba(100, 175, 3, 0.03)",
							whiteSpace: "nowrap",
							pointerEvents: "none",
							zIndex: 0,
							letterSpacing: "-0.05em"
						},
						children: "TRIAD"
					}), /* @__PURE__ */ jsxs("div", {
						className: "container",
						style: {
							position: "relative",
							zIndex: 1
						},
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								textAlign: "center",
								marginBottom: "8rem"
							},
							children: [/* @__PURE__ */ jsx(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								style: {
									fontSize: "0.85rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.5em",
									color: "#fff",
									marginBottom: "2rem"
								},
								children: "The Philosophy"
							}), /* @__PURE__ */ jsx(motion.h2, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { duration: .8 },
								style: {
									color: "#64af03",
									fontSize: "clamp(2.5rem, 8vw, 72px)",
									fontWeight: 400,
									textTransform: "uppercase",
									margin: 0,
									lineHeight: 1,
									letterSpacing: "-0.05em"
								},
								children: "The Unbreakable Formula"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "1fr 1.2fr",
								gap: "6rem",
								alignItems: "center"
							},
							className: "mobile-stack",
							children: [/* @__PURE__ */ jsx("div", {
								className: "triad-container",
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "1rem"
								},
								children: [
									"Faith",
									"Family",
									"Finance"
								].map((item, idx) => /* @__PURE__ */ jsx(motion.div, {
									className: "triad-item",
									initial: {
										opacity: 0,
										x: -50
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: { once: true },
									transition: {
										duration: .8,
										delay: idx * .2
									},
									style: {
										display: "flex",
										alignItems: "center",
										gap: "2rem",
										padding: "2rem",
										background: "rgba(255,255,255,0.02)",
										borderRadius: "1.5rem",
										border: "1px solid rgba(255,255,255,0.05)",
										position: "relative",
										overflow: "hidden"
									},
									children: /* @__PURE__ */ jsx("span", {
										className: "triad-text",
										style: {
											fontSize: "clamp(1rem, 4vw, 2.5rem)",
											fontWeight: 400,
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											color: "#fff",
											fontFamily: "\"Casanova Serif Display\", serif",
											paddingLeft: "3rem"
										},
										children: item
									})
								}, item))
							}), /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									scale: .95
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: { once: true },
								transition: { duration: 1 },
								className: "philosophy-section-container",
								style: {
									background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
									padding: "clamp(2rem, 5vw, 4.5rem)",
									borderRadius: "3rem",
									border: "1px solid rgba(255,255,255,0.08)",
									backdropFilter: "blur(20px)",
									position: "relative"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											position: "absolute",
											top: "-4rem",
											left: "-1rem",
											fontSize: "12rem",
											color: "#64af03",
											fontFamily: "serif",
											fontWeight: 900,
											opacity: .1,
											lineHeight: 1,
											pointerEvents: "none",
											zIndex: 0,
											userSelect: "none"
										},
										children: "“"
									}),
									/* @__PURE__ */ jsxs("p", {
										style: {
											fontSize: "1.2rem",
											lineHeight: 1.6,
											color: "#fff",
											fontWeight: 300,
											marginBottom: "2.5rem",
											position: "relative",
											zIndex: 1
										},
										children: [
											"\"WealthXcelerate is designed to redefine financial education through faith-based leadership, integrity, and empowerment. This course bridges the gap between financial knowledge and consistent action overcoming what we call ",
											/* @__PURE__ */ jsx("span", {
												style: {
													color: "#64af03",
													fontWeight: 600
												},
												children: "financial\xA0dissonance"
											}),
											".\""
										]
									}),
									/* @__PURE__ */ jsx("div", { style: {
										height: "1px",
										width: "60px",
										background: "rgba(100, 175, 3, 0.3)",
										marginBottom: "2.5rem",
										position: "relative",
										zIndex: 1
									} }),
									/* @__PURE__ */ jsx("p", {
										style: {
											fontSize: "14px",
											color: "rgba(255,255,255,0.6)",
											lineHeight: 1.8,
											fontWeight: 300,
											margin: 0,
											position: "relative",
											zIndex: 1
										},
										children: "Our goal is to help you achieve financial, emotional, and spiritual freedom through disciplined habits and a coordinated system."
									})
								]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "120px 0 0",
						backgroundColor: "hsl(var(--background))"
					},
					children: /* @__PURE__ */ jsxs("div", {
						className: "container",
						children: [/* @__PURE__ */ jsxs("div", {
							style: {
								textAlign: "center",
								marginBottom: "5rem"
							},
							children: [/* @__PURE__ */ jsx("h2", {
								className: "roadmap-title",
								style: {
									fontSize: "72px",
									fontWeight: 400,
									textTransform: "uppercase",
									marginBottom: "1rem"
								},
								children: "The Roadmap"
							}), /* @__PURE__ */ jsx("p", {
								className: "roadmap-subtitle",
								style: {
									fontSize: "22px",
									color: "hsl(var(--muted-foreground))"
								},
								children: "19 Modules. 5 Core Sections. One Transformation."
							})]
						}), /* @__PURE__ */ jsx("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "1.5rem"
							},
							children: sections.map((section, index) => /* @__PURE__ */ jsxs(HoverGalaxyCard, {
								particleCount: 30,
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								whileHover: {},
								style: {
									background: "rgba(255,255,255,0.03)",
									borderRadius: "2rem",
									padding: "3rem",
									border: "1px solid rgba(255,255,255,0.08)",
									display: "grid",
									gridTemplateColumns: "80px 1fr 1.5fr",
									gap: "2.5rem",
									alignItems: "center"
								},
								className: "mobile-stack curriculum-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "curriculum-icon-box",
										style: {
											width: "80px",
											height: "80px",
											borderRadius: "1.5rem",
											backgroundColor: "rgba(100, 175, 3, 0.05)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											color: "#64af03",
											flexShrink: 0
										},
										children: section.icon
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											textAlign: "center"
										},
										children: [
											/* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "12px",
													fontWeight: 800,
													color: "#64af03",
													textTransform: "uppercase",
													letterSpacing: "0.1em"
												},
												children: section.modules
											}),
											/* @__PURE__ */ jsx("h3", {
												style: {
													fontSize: "22px",
													margin: "0.5rem 0 1rem",
													color: "hsl(var(--foreground))"
												},
												children: section.title
											}),
											/* @__PURE__ */ jsx("p", {
												style: {
													color: "hsl(var(--muted-foreground))",
													lineHeight: 1.6,
													fontSize: "12px"
												},
												children: section.focus
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										style: {
											display: "grid",
											gridTemplateColumns: "repeat(3, 1fr)",
											gap: "0.75rem"
										},
										children: section.details.map((detail, dIdx) => /* @__PURE__ */ jsx("div", {
											style: {
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												gap: "0.75rem",
												padding: "0.65rem 0.4rem",
												background: "rgba(255,255,255,0.05)",
												borderRadius: "1rem",
												color: "hsl(var(--foreground))",
												minHeight: "3.5rem",
												border: "1px solid rgba(255,255,255,0.05)"
											},
											children: /* @__PURE__ */ jsx("span", {
												style: {
													fontSize: "12px",
													fontWeight: 600,
													textAlign: "center",
													lineHeight: "1.2"
												},
												children: detail
											})
										}, dIdx))
									})
								]
							}, index))
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					style: {
						padding: "120px 0 0",
						borderTop: "1px solid rgba(0,0,0,0.05)"
					},
					children: /* @__PURE__ */ jsx("div", {
						className: "container",
						children: /* @__PURE__ */ jsx("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "3rem"
							},
							className: "mobile-stack",
							children: features.map((feature, idx) => /* @__PURE__ */ jsxs("div", {
								style: { textAlign: "center" },
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											width: "70px",
											height: "70px",
											borderRadius: "50%",
											backgroundColor: "rgba(100, 175, 3, 0.05)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											margin: "0 auto 1.5rem"
										},
										children: React.cloneElement(feature.icon, { size: 30 })
									}),
									/* @__PURE__ */ jsx("h3", {
										style: {
											fontSize: "1.5rem",
											marginBottom: "1rem",
											color: "hsl(var(--foreground))"
										},
										children: feature.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "feature-desc",
										style: {
											color: "hsl(var(--muted-foreground))",
											lineHeight: 1.6,
											fontSize: "14px"
										},
										children: feature.desc
									})
								]
							}, idx))
						})
					})
				}),
				/* @__PURE__ */ jsx(CTASection, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 768px) {
          .founders-grid {
            gap: 1rem !important;
            margin-top: 2rem !important;
          }
          .founder-card {
            /* Handled by aspectRatio in style prop */
          }
          .curriculum-card {
            padding: 2rem !important;
            gap: 1.5rem !important;
            align-items: center !important;
            text-align: center !important;
          }
          .curriculum-icon-box {
            width: 60px !important;
            height: 60px !important;
          }
          .formula-item span {
            font-size: 1.5rem !important;
          }
          .wealthxcelerate-title {
            font-size: clamp(1.5rem, 6.5vw, 6.5rem) !important;
          }
          .roadmap-title {
            white-space: normal !important;
            word-break: keep-all;
            font-size: clamp(2rem, 8vw, 3.5rem) !important;
          }
          .triad-container {
            flex-direction: row !important;
            gap: 0 !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .triad-item {
            padding: 0.5rem 1rem !important;
            background: transparent !important;
            border: none !important;
            border-left: 1px solid rgba(255,255,255,0.15) !important;
            border-radius: 0 !important;
            flex: unset !important;
          }
          .triad-item:first-child {
            border-left: none !important;
          }
          .triad-text {
            padding-left: 0 !important;
            letter-spacing: 0.05em !important;
            font-size: 1.3rem !important;
            white-space: nowrap !important;
          }
          .roadmap-subtitle, .feature-desc {
            text-wrap: balance;
          }
          .philosophy-section-container {
            padding: 2.5rem 1.5rem !important;
          }
          .philosophy-section-container span:first-child {
            display: none !important;
          }
          .philosophy-section-container p:first-of-type {
            font-size: 1.15rem !important;
            line-height: 1.5 !important;
          }
        }
      ` })
		]
	});
};
//#endregion
//#region src/pages/Contact.tsx
var Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		if (!document.getElementById("lc-form-embed-script")) {
			const script = document.createElement("script");
			script.id = "lc-form-embed-script";
			script.src = "https://link.msgsndr.com/js/form_embed.js";
			script.async = true;
			document.body.appendChild(script);
		}
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "transparent",
			color: "hsl(var(--foreground))",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Contact WealthXcelerate | Consultations & Media Inquiries",
				description: "Connect with Ray Lewis, Dennis M. Postema, and the WealthXcelerate team. Located at 2014 Baltimore St, Defiance OH or call 419-782-2500.",
				url: "https://wealthxcelerate.com/contact",
				structuredData: {
					"@context": "https://schema.org",
					"@graph": [{
						"@type": "ContactPage",
						"@id": "https://wealthxcelerate.com/contact",
						"url": "https://wealthxcelerate.com/contact",
						"name": "Contact WealthXcelerate",
						"description": "Connect with the WealthXcelerate team for executive consultations, speaking requests, or media inquiries."
					}, {
						"@type": "LocalBusiness",
						"name": "WealthXcelerate",
						"image": "https://wealthxcelerate.com/logo-dark.png",
						"telephone": "419-782-2500",
						"email": "media@wealthxcelerate.com",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "2014 Baltimore Street",
							"addressLocality": "Defiance",
							"addressRegion": "OH",
							"postalCode": "43512",
							"addressCountry": "US"
						},
						"url": "https://wealthxcelerate.com"
					}]
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				className: "contact-hero",
				style: {
					paddingTop: "160px",
					paddingBottom: "80px",
					position: "relative",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: {
						position: "relative",
						zIndex: 1
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							maxWidth: "800px",
							margin: "0 auto"
						},
						children: [
							/* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .8 },
								children: /* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "14px",
										fontWeight: 800,
										textTransform: "uppercase",
										letterSpacing: "0.2em",
										color: "#fff",
										backgroundColor: "rgba(255, 255, 255, 0.05)",
										padding: "0.5rem 1rem",
										borderRadius: "4px",
										display: "inline-block",
										marginBottom: "1.5rem"
									},
									children: "Reach Out"
								})
							}),
							/* @__PURE__ */ jsxs(motion.h1, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1,
									delay: .1,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "contact-title",
								style: {
									fontSize: "clamp(1.5rem, 6.5vw, 6.5rem)",
									fontWeight: 400,
									lineHeight: 1.1,
									letterSpacing: "-0.03em",
									margin: "0 0 1.5rem 0",
									color: "hsl(var(--foreground))"
								},
								children: ["Start Your Financial ", /* @__PURE__ */ jsx("span", {
									style: { color: "#64af03" },
									children: "Transformation."
								})]
							}),
							/* @__PURE__ */ jsx(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .2
								},
								className: "contact-hero-desc",
								style: {
									fontSize: "22px",
									color: "hsl(var(--muted-foreground))",
									lineHeight: 1.6,
									fontWeight: 300
								},
								children: "Whether you're looking for speaking engagements, media inquiries, or to begin building your legacy blueprint, our team is ready."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingBottom: "120px",
					position: "relative",
					zIndex: 1
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mobile-stack contact-container",
						style: {
							display: "grid",
							gridTemplateColumns: "minmax(280px, 0.8fr) minmax(520px, 1.2fr)",
							gap: "4rem",
							alignItems: "start"
						},
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							className: "contact-info-section",
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "3rem"
							},
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								style: {
									fontSize: "22px",
									fontWeight: 800,
									marginBottom: "1rem",
									color: "hsl(var(--foreground))"
								},
								children: "Get in Touch"
							}), /* @__PURE__ */ jsx("p", {
								className: "contact-getintouch-desc",
								style: {
									color: "hsl(var(--muted-foreground))",
									lineHeight: 1.6,
									marginBottom: "2rem",
									fontSize: "14px"
								},
								children: "The WealthXcelerate blueprint isn't for everyone. It's for those ready to take absolute control of their legacy. Contact us to schedule an executive consultation."
							})] }), /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "2rem"
								},
								children: [
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											gap: "1.5rem",
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												width: "48px",
												height: "48px",
												borderRadius: "50%",
												background: "rgba(100, 175, 3, 0.1)",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: "#64af03",
												flexShrink: 0
											},
											children: /* @__PURE__ */ jsx(MapPin, { size: 24 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											style: {
												fontSize: "22px",
												fontWeight: 800,
												marginBottom: "0.25rem",
												color: "hsl(var(--foreground))"
											},
											children: "Headquarters"
										}), /* @__PURE__ */ jsxs("p", {
											style: {
												color: "hsl(var(--muted-foreground))",
												lineHeight: 1.5,
												fontSize: "14px"
											},
											children: [
												"WealthXcelerate",
												/* @__PURE__ */ jsx("br", {}),
												"2014 Baltimore Street",
												/* @__PURE__ */ jsx("br", {}),
												"Defiance, OH 43512"
											]
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											gap: "1.5rem",
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												width: "48px",
												height: "48px",
												borderRadius: "50%",
												background: "rgba(100, 175, 3, 0.1)",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: "#64af03",
												flexShrink: 0
											},
											children: /* @__PURE__ */ jsx(Phone, { size: 24 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											style: {
												fontSize: "22px",
												fontWeight: 800,
												marginBottom: "0.25rem",
												color: "hsl(var(--foreground))"
											},
											children: "Direct Line"
										}), /* @__PURE__ */ jsx("p", {
											style: {
												color: "hsl(var(--muted-foreground))",
												lineHeight: 1.5,
												fontSize: "14px"
											},
											children: "419-782-2500 24/7"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											gap: "1.5rem",
											alignItems: "flex-start"
										},
										children: [/* @__PURE__ */ jsx("div", {
											style: {
												width: "48px",
												height: "48px",
												borderRadius: "50%",
												background: "rgba(100, 175, 3, 0.1)",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: "#64af03",
												flexShrink: 0
											},
											children: /* @__PURE__ */ jsx(Mail, { size: 24 })
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											style: {
												fontSize: "22px",
												fontWeight: 800,
												marginBottom: "0.25rem",
												color: "hsl(var(--foreground))"
											},
											children: "Email"
										}), /* @__PURE__ */ jsx("p", {
											style: {
												color: "hsl(var(--muted-foreground))",
												lineHeight: 1.5,
												fontSize: "14px"
											},
											children: "media@wealthxcelerate.com"
										})] })]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "contact-logo-panel",
										style: {
											marginTop: "1rem",
											minHeight: "220px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center"
										},
										children: /* @__PURE__ */ jsx("img", {
											src: "/logo-white.png",
											alt: "WealthXcelerate",
											style: {
												width: "100%",
												maxWidth: "320px",
												height: "auto",
												display: "block",
												filter: "drop-shadow(0 18px 34px rgba(0, 0, 0, 0.35))"
											}
										})
									})
								]
							})]
						}), /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								x: 30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { duration: .8 },
							style: {
								borderRadius: "1.5rem",
								overflow: "hidden",
								background: "rgba(255,255,255,0.02)",
								border: "1px solid rgba(100, 175, 3, 0.35)",
								padding: "0.75rem",
								boxShadow: "0 0 40px rgba(100, 175, 3, 0.05)"
							},
							children: /* @__PURE__ */ jsx("iframe", {
								src: "https://api.leadconnectorhq.com/widget/form/U3qschksecbcYg4a6RvV",
								style: {
									width: "100%",
									height: "860px",
									border: "none",
									borderRadius: "8px",
									display: "block"
								},
								id: "inline-U3qschksecbcYg4a6RvV",
								"data-layout": "{'id':'INLINE'}",
								"data-trigger-type": "alwaysShow",
								"data-trigger-value": "",
								"data-activation-type": "alwaysActivated",
								"data-activation-value": "",
								"data-deactivation-type": "neverDeactivate",
								"data-deactivation-value": "",
								"data-form-name": "New Leads Opt-in",
								"data-height": "860",
								"data-layout-iframe-id": "inline-U3qschksecbcYg4a6RvV",
								"data-form-id": "U3qschksecbcYg4a6RvV",
								title: "New Leads Opt-in"
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 768px) {
          .contact-hero {
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }
          .contact-container {
            gap: 2.5rem !important;
            grid-template-columns: 1fr !important;
          }
          .contact-title {
            font-size: 2.5rem !important;
          }
          .contact-info-section {
            gap: 2rem !important;
          }
          .contact-logo-panel {
            min-height: 160px !important;
            padding: 1.5rem !important;
          }
          .contact-hero-desc, .contact-getintouch-desc {
            text-wrap: balance;
          }
        }
      ` })
		]
	});
};
//#endregion
//#region src/pages/Privacy.tsx
var Privacy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "transparent",
			color: "hsl(var(--foreground))",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Privacy Policy | WealthXcelerate",
				description: "WealthXcelerate privacy policy detailing user privacy rights, data protection, and information security standards.",
				url: "https://wealthxcelerate.com/privacy",
				structuredData: {
					"@context": "https://schema.org",
					"@type": "WebPage",
					"@id": "https://wealthxcelerate.com/privacy",
					"url": "https://wealthxcelerate.com/privacy",
					"name": "Privacy Policy | WealthXcelerate",
					"description": "WealthXcelerate privacy policy detailing user privacy rights, data protection, and information security standards."
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingTop: "160px",
					paddingBottom: "80px",
					position: "relative",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: {
						position: "relative",
						zIndex: 1
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							maxWidth: "800px",
							margin: "0 auto"
						},
						children: [/* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .8 },
							children: /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.8rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.2em",
									color: "#64af03",
									backgroundColor: "rgba(100, 175, 3, 0.1)",
									padding: "0.5rem 1rem",
									borderRadius: "4px",
									display: "inline-block",
									marginBottom: "1.5rem"
								},
								children: "Legal"
							})
						}), /* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							style: {
								fontSize: "clamp(3rem, 5vw, 4.5rem)",
								fontWeight: 900,
								lineHeight: 1.1,
								letterSpacing: "-0.03em",
								margin: "0 0 1.5rem 0",
								color: "hsl(var(--foreground))",
								textTransform: "uppercase"
							},
							children: ["Privacy ", /* @__PURE__ */ jsx("span", {
								style: {
									fontFamily: "\"Casanova Serif Display\", serif",
									fontStyle: "normal",
									fontWeight: 400,
									textTransform: "none",
									color: "#64af03"
								},
								children: "Policy"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingBottom: "120px",
					position: "relative",
					zIndex: 1
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: { maxWidth: "800px" },
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .2
						},
						className: "privacy-content",
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "2.5rem",
							fontSize: "1.1rem",
							lineHeight: 1.8,
							color: "hsl(var(--muted-foreground))",
							fontWeight: 300
						},
						children: [
							/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "This Privacy Policy governs the manner in which the website collects, uses, maintains and discloses information collected from users (each, a 'User') of the website ('Site'). This privacy policy applies to the Site and all products and services offered by WealthXcelerate." }) }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Personal Identification Information"
							}), /* @__PURE__ */ jsx("p", { children: "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Non-Personal Identification Information"
							}), /* @__PURE__ */ jsx("p", { children: "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Web Browser Cookies"
							}), /* @__PURE__ */ jsx("p", { children: "Our Site may use 'cookies' to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly." })] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "How We Use Collected Information"
								}),
								/* @__PURE__ */ jsx("p", { children: "WealthXcelerate may collect and use Users personal information for the following purposes:" }),
								/* @__PURE__ */ jsxs("ul", {
									style: {
										paddingLeft: "1.5rem",
										marginTop: "1rem",
										display: "flex",
										flexDirection: "column",
										gap: "1rem"
									},
									children: [
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "To improve customer service:"
										}), " Information you provide helps us respond to your customer service requests and support needs more efficiently."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "To personalize user experience:"
										}), " We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "To send periodic emails:"
										}), " We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site."] })
									]
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "How we Protect your Information"
							}), /* @__PURE__ */ jsx("p", { children: "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Sharing your Personal Information"
							}), /* @__PURE__ */ jsx("p", { children: "We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Third Party Websites"
							}), /* @__PURE__ */ jsx("p", { children: "Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Changes to this Privacy Policy"
							}), /* @__PURE__ */ jsx("p", { children: "WealthXcelerate has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Your Acceptance of these Terms"
							}), /* @__PURE__ */ jsx("p", { children: "By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes." })] })
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
};
//#endregion
//#region src/pages/Terms.tsx
var Terms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "transparent",
			color: "hsl(var(--foreground))",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Terms & Conditions | WealthXcelerate",
				description: "WealthXcelerate Terms & Conditions outlining user terms, platform services, and legal rights.",
				url: "https://wealthxcelerate.com/terms",
				structuredData: {
					"@context": "https://schema.org",
					"@type": "WebPage",
					"@id": "https://wealthxcelerate.com/terms",
					"url": "https://wealthxcelerate.com/terms",
					"name": "Terms & Conditions | WealthXcelerate",
					"description": "WealthXcelerate Terms of Service and Conditions of Use."
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingTop: "160px",
					paddingBottom: "80px",
					position: "relative",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: {
						position: "relative",
						zIndex: 1
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							maxWidth: "800px",
							margin: "0 auto"
						},
						children: [/* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .8 },
							children: /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.8rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.2em",
									color: "#64af03",
									backgroundColor: "rgba(100, 175, 3, 0.1)",
									padding: "0.5rem 1rem",
									borderRadius: "4px",
									display: "inline-block",
									marginBottom: "1.5rem"
								},
								children: "Legal"
							})
						}), /* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							style: {
								fontSize: "clamp(3rem, 5vw, 4.5rem)",
								fontWeight: 900,
								lineHeight: 1.1,
								letterSpacing: "-0.03em",
								margin: "0 0 1.5rem 0",
								color: "hsl(var(--foreground))",
								textTransform: "uppercase"
							},
							children: ["Terms & ", /* @__PURE__ */ jsx("span", {
								style: {
									fontFamily: "\"Casanova Serif Display\", serif",
									fontStyle: "normal",
									fontWeight: 400,
									textTransform: "none",
									color: "#64af03"
								},
								children: "Conditions"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingBottom: "120px",
					position: "relative",
					zIndex: 1
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: { maxWidth: "800px" },
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .2
						},
						className: "privacy-content",
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "2.5rem",
							fontSize: "1.1rem",
							lineHeight: 1.8,
							color: "hsl(var(--muted-foreground))",
							fontWeight: 300
						},
						children: [
							/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: "Please read these terms and conditions carefully before using Our Service." }) }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "Interpretation and Definitions"
								}),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.2rem",
										fontWeight: 700,
										color: "hsl(var(--foreground))",
										marginBottom: "0.5rem",
										marginTop: "1.5rem"
									},
									children: "Interpretation"
								}),
								/* @__PURE__ */ jsx("p", { children: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear singular or plural." }),
								/* @__PURE__ */ jsx("h3", {
									style: {
										fontSize: "1.2rem",
										fontWeight: 700,
										color: "hsl(var(--foreground))",
										marginBottom: "0.5rem",
										marginTop: "1.5rem"
									},
									children: "Definitions"
								}),
								/* @__PURE__ */ jsx("p", { children: "For the purposes of these Terms and Conditions:" }),
								/* @__PURE__ */ jsxs("ul", {
									style: {
										paddingLeft: "1.5rem",
										marginTop: "1rem",
										display: "flex",
										flexDirection: "column",
										gap: "1rem"
									},
									children: [
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Affiliate"
										}), " means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Country"
										}), " refers to: Ohio, United States."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Company"
										}), " (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to WealthXcelerate."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Device"
										}), " means any device that can access the Service such as a computer, a cellphone or a digital tablet."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Promotions"
										}), " refer to contests, sweepstakes or other promotions offered through the Service."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Service"
										}), " refers to the Website. WealthXcelerate.com."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Terms and Conditions"
										}), " (also referred as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Third-party Social Media Service"
										}), " means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "Website"
										}), " refers to WealthXcelerate, accessible from www.wealthxcelerate.com."] }),
										/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
											style: { color: "hsl(var(--foreground))" },
											children: "You"
										}), " means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."] })
									]
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "Acknowledgment"
								}),
								/* @__PURE__ */ jsx("p", { children: "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service." }),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service."
								}),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, you may not access the Service."
								}),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service."
								}),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service."
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "Promotions"
								}),
								/* @__PURE__ */ jsx("p", { children: "Any Promotions made available through the Service may be governed by rules that are separate from these Terms." }),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "If You participate in any Promotions, please review the applicable rules as well as our Privacy policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will apply."
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Intellectual Property"
							}), /* @__PURE__ */ jsx("p", { children: "The Service and its original content (excluding Content provided by You or other users), features, and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company." })] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "Links to Other Websites"
								}),
								/* @__PURE__ */ jsx("p", { children: "Our Service may contain links to third-party websites or services that are not owned or controlled by the Company." }),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "The Company has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit."
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Termination"
							}), /* @__PURE__ */ jsx("p", { children: "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Limitation of Liability"
							}), /* @__PURE__ */ jsx("p", { children: "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law." })] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "\"AS IS\" and \"AS AVAILABLE\" Disclaimer"
								}),
								/* @__PURE__ */ jsx("p", { children: "The Service is provided to You \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its behalf and on behalf of its Affiliates and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, concerning the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards or be error-free or that any errors or defects can or will be corrected." }),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "Without limiting the foregoing, neither the Company nor any of the company's providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components."
								}),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations outlined in this section shall be applied to the greatest extent enforceable under applicable law"
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Governing Law"
							}), /* @__PURE__ */ jsx("p", { children: "The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Disputes Resolution"
							}), /* @__PURE__ */ jsx("p", { children: "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "For European Union (EU) Users"
							}), /* @__PURE__ */ jsx("p", { children: "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "United States Legal Compliance"
							}), /* @__PURE__ */ jsx("p", { children: "You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a \"terrorist supporting\" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Severability and Waiver"
							}), /* @__PURE__ */ jsxs("ul", {
								style: {
									paddingLeft: "1.5rem",
									marginTop: "1rem",
									display: "flex",
									flexDirection: "column",
									gap: "1rem"
								},
								children: [/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
									style: { color: "hsl(var(--foreground))" },
									children: "Severability:"
								}), " If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."] }), /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
									style: { color: "hsl(var(--foreground))" },
									children: "Wavier:"
								}), " Except as provided herein, the failure to exercise a right or to require the performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach."] })]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Translation Interpretation"
							}), /* @__PURE__ */ jsx("p", { children: "These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute." })] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "Changes to These Terms and Conditions"
								}),
								/* @__PURE__ */ jsx("p", { children: "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service." }),
								/* @__PURE__ */ jsxs("p", {
									style: {
										marginTop: "2rem",
										fontWeight: 500
									},
									children: ["If you have any questions about these Terms and Conditions, You can contact us: ", /* @__PURE__ */ jsx("a", {
										href: "mailto:support@wealthxcelerate.com",
										style: {
											color: "#64af03",
											textDecoration: "none"
										},
										children: "support@wealthxcelerate.com"
									})]
								})
							] })
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
};
//#endregion
//#region src/pages/Disclaimer.tsx
var Disclaimer = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			background: "transparent",
			color: "hsl(var(--foreground))",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ jsx(SEO, {
				title: "Disclaimer | WealthXcelerate",
				description: "WealthXcelerate legal, financial, and educational disclosures and regulatory disclaimers.",
				url: "https://wealthxcelerate.com/disclaimer",
				structuredData: {
					"@context": "https://schema.org",
					"@type": "WebPage",
					"@id": "https://wealthxcelerate.com/disclaimer",
					"url": "https://wealthxcelerate.com/disclaimer",
					"name": "Disclaimer | WealthXcelerate",
					"description": "WealthXcelerate legal, regulatory, and educational disclaimers."
				}
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingTop: "160px",
					paddingBottom: "80px",
					position: "relative",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: {
						position: "relative",
						zIndex: 1
					},
					children: /* @__PURE__ */ jsxs("div", {
						style: {
							textAlign: "center",
							maxWidth: "800px",
							margin: "0 auto"
						},
						children: [/* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .8 },
							children: /* @__PURE__ */ jsx("span", {
								style: {
									fontSize: "0.8rem",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.2em",
									color: "#64af03",
									backgroundColor: "rgba(100, 175, 3, 0.1)",
									padding: "0.5rem 1rem",
									borderRadius: "4px",
									display: "inline-block",
									marginBottom: "1.5rem"
								},
								children: "Legal"
							})
						}), /* @__PURE__ */ jsxs(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							style: {
								fontSize: "clamp(3rem, 5vw, 4.5rem)",
								fontWeight: 900,
								lineHeight: 1.1,
								letterSpacing: "-0.03em",
								margin: "0 0 1.5rem 0",
								color: "hsl(var(--foreground))",
								textTransform: "uppercase"
							},
							children: ["Website ", /* @__PURE__ */ jsx("span", {
								style: {
									fontFamily: "\"Casanova Serif Display\", serif",
									fontStyle: "normal",
									fontWeight: 400,
									textTransform: "none",
									color: "#64af03"
								},
								children: "Disclaimer"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				style: {
					paddingBottom: "120px",
					position: "relative",
					zIndex: 1
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					style: { maxWidth: "800px" },
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .2
						},
						className: "privacy-content",
						style: {
							display: "flex",
							flexDirection: "column",
							gap: "2.5rem",
							fontSize: "1.1rem",
							lineHeight: 1.8,
							color: "hsl(var(--muted-foreground))",
							fontWeight: 300
						},
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "General Disclaimer"
							}), /* @__PURE__ */ jsx("p", { children: "The information provided on WealthXcelerate.com (the “Site”) is for informational and educational purposes only. All content is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site." })] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h2", {
									style: {
										fontSize: "1.8rem",
										fontWeight: 800,
										color: "hsl(var(--foreground))",
										marginBottom: "1rem"
									},
									children: "No Guarantees of Results"
								}),
								/* @__PURE__ */ jsx("p", { children: "Any statements regarding success, income, personal growth, or other outcomes are examples only and are not guarantees of results. Individual results may vary significantly based on factors including, but not limited to, effort, experience, background, and individual circumstances." }),
								/* @__PURE__ */ jsx("p", {
									style: { marginTop: "1rem" },
									children: "You acknowledge that we have not made any guarantees about the results you may achieve by using the information, products, or services provided on this Site."
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Not Professional Advice"
							}), /* @__PURE__ */ jsx("p", { children: "The content on this Site does not constitute professional, financial, legal, or business advice. You should consult with a qualified professional before making any decisions based on the information provided." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Limitation of Liability"
							}), /* @__PURE__ */ jsx("p", { children: "Under no circumstance shall WealthXcelerate.com or its owners be liable for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided. Your use of the Site and your reliance on any information is solely at your own risk." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "External Links Disclaimer"
							}), /* @__PURE__ */ jsx("p", { children: "The Site may contain links to third-party websites. We do not monitor or guarantee the accuracy or reliability of any information on these external sites." })] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								style: {
									fontSize: "1.8rem",
									fontWeight: 800,
									color: "hsl(var(--foreground))",
									marginBottom: "1rem"
								},
								children: "Testimonials Disclaimer"
							}), /* @__PURE__ */ jsx("p", { children: "Testimonials and examples on the Site are individual experiences and do not guarantee that you will achieve the same or similar results." })] })
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
};
//#endregion
//#region src/AppRoutes.tsx
var AppRoutes = () => {
	return /* @__PURE__ */ jsxs(Routes, { children: [
		/* @__PURE__ */ jsx(Route, {
			path: "/",
			element: /* @__PURE__ */ jsx(Home, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/about",
			element: /* @__PURE__ */ jsx(About, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/university",
			element: /* @__PURE__ */ jsx(University, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/tv",
			element: /* @__PURE__ */ jsx(TVMedia, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/books",
			element: /* @__PURE__ */ jsx(Books, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/login",
			element: /* @__PURE__ */ jsx(Login, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/contact",
			element: /* @__PURE__ */ jsx(Contact, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/privacy",
			element: /* @__PURE__ */ jsx(Privacy, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/terms",
			element: /* @__PURE__ */ jsx(Terms, {})
		}),
		/* @__PURE__ */ jsx(Route, {
			path: "/disclaimer",
			element: /* @__PURE__ */ jsx(Disclaimer, {})
		})
	] });
};
//#endregion
//#region src/entry-server.tsx
function render(url, helmetContext = {}) {
	return {
		html: ReactDOMServer.renderToString(/* @__PURE__ */ jsx(HelmetProvider, {
			context: helmetContext,
			children: /* @__PURE__ */ jsx(StaticRouter, {
				location: url,
				children: /* @__PURE__ */ jsx(AppRoutes, {})
			})
		})),
		helmet: helmetContext.helmet
	};
}
//#endregion
export { render };
