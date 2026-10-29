import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import HoverGalaxyButton from './HoverGalaxyButton';
import { supabase } from '../utils/supabaseClient';

interface MagazineIssue {
  id: string;
  issue_number: number;
  title: string;
  image_url: string;
}

const DEFAULT_ISSUES: MagazineIssue[] = [
  {
    id: 'default-4',
    issue_number: 4,
    title: 'Predictable Income. Powerful Freedom.',
    image_url: '/WealthXCelerate- Issue 4.png'
  },
  {
    id: 'default-3',
    issue_number: 3,
    title: 'Intel For The High Net-Worth',
    image_url: '/magazine-cover.webp'
  },
  {
    id: 'default-2',
    issue_number: 2,
    title: 'Excellence: A Lifestyle, not an Achievement',
    image_url: '/WealthX - January Issue.png'
  },
  {
    id: 'default-1',
    issue_number: 1,
    title: 'Elevate Your Business.',
    image_url: '3.jpg'
  }
];

const DESCRIPTION = 'Exclusive interviews and deep-dive strategies used by Ray Lewis and Dennis M. Postema to architect multi-generational wealth.';
const TOPICS = ['Market Insights', 'Legacy Strategies', 'Tax Optimization', 'Asset Protection'];

const MagazineSection: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const [issues, setIssues] = useState<MagazineIssue[]>(DEFAULT_ISSUES);
  const [activeIssueId, setActiveIssueId] = useState<string>('default-4');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const { data, error } = await supabase
          .from('magazine_issues')
          .select('*')
          .order('issue_number', { ascending: false });
        
        if (error) {
          console.error('Error fetching magazine issues:', error.message);
          return;
        }

        if (data && data.length > 0) {
          const fetched: MagazineIssue[] = data.map((item: any) => ({
            id: 'default-' + item.issue_number,
            issue_number: item.issue_number,
            title: item.title,
            image_url: item.image_url
          }));
          setIssues(fetched);
          setActiveIssueId(fetched[0].id);
        }
      } catch (err: any) {
        console.error('Failed to fetch magazine issues:', err.message || err);
      }
    };

    fetchIssues();
  }, []);

  const latestIssueNumber = Math.max(...issues.map(i => i.issue_number), 0);
  const previousReleaseNumber = latestIssueNumber - 1;
  const exploreIssues = issues.slice(0, 4);

  const getImageUrl = (issue: MagazineIssue) => {
    if (issue.image_url) {
      if (issue.image_url.startsWith('http') || issue.image_url.startsWith('/')) {
        return issue.image_url;
      }
      // If it is just a filename, resolve it using Supabase Storage public URL
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
      return `${supabaseUrl}/storage/v1/object/public/magazines/${issue.image_url}`;
    }
    
    return '/magazine-cover.webp';
  };

  const getIssueLabel = (issue: MagazineIssue) => {
    const startYear = 2026;
    const startMonth = 1; // February (0-indexed: February = 1)
    const issueDate = new Date(startYear, startMonth + (issue.issue_number - 1), 1);
    return issueDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubscribed(true);
  };

  const currentIdx = issues.findIndex((issue) => issue.id === activeIssueId);

  const handlePrevIssue = () => {
    if (issues.length === 0) return;
    const prevIdx = (currentIdx - 1 + issues.length) % issues.length;
    setActiveIssueId(issues[prevIdx].id);
  };

  const handleNextIssue = () => {
    if (issues.length === 0) return;
    const nextIdx = (currentIdx + 1) % issues.length;
    setActiveIssueId(issues[nextIdx].id);
  };

  const activeIssue = issues.find((issue) => issue.id === activeIssueId) || issues[0] || DEFAULT_ISSUES[0];
  console.log('ACTIVE_ISSUE:', activeIssue.id, activeIssue.title, activeIssue.image_url);
  console.log('ISSUES_LIST:', issues.map(x => `${x.id}:${x.title}`));

  const renderTitle = (title: string) => {
    const parts = title.split(' The ');
    if (parts.length === 2) {
      return (
        <>
          <span style={{ whiteSpace: 'nowrap' }}>{parts[0]} The</span><br />
          <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap' }}>{parts[1]}</span>
        </>
      );
    }
    const words = title.split(' ');
    if (words.length > 2) {
      const mid = Math.ceil(words.length / 2);
      const firstPart = words.slice(0, mid).join(' ');
      const secondPart = words.slice(mid).join(' ');
      return (
        <>
          <span style={{ whiteSpace: 'nowrap' }}>{firstPart}</span><br />
          <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap' }}>{secondPart}</span>
        </>
      );
    }
    return <span style={{ whiteSpace: 'nowrap' }}>{title}</span>;
  };

  if (isMobile) {
    return (
      <section className="mobile-magazine-redesign" style={{ padding: '60px 20px', background: 'hsl(var(--background))' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
          
          <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'hsl(var(--muted-foreground))', marginBottom: '1.25rem' }}>
            The Monthly Blueprint
          </p>

          {/* Active Image (Above) */}
          <div style={{ maxWidth: '280px', margin: '0 auto 1rem', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIssue.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'radial-gradient(circle, rgba(100, 175, 3, 0.15) 0%, transparent 70%)',
                  filter: 'blur(15px)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }} />
                <img 
                  src={getImageUrl(activeIssue)} 
                  alt={activeIssue.title} 
                  style={{ 
                    width: '100%', 
                    borderRadius: '0.75rem', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    position: 'relative',
                    zIndex: 1
                  }} 
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '1.25rem', 
            margin: '0 auto 2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '0.4rem 1rem',
            borderRadius: '99px'
          }}>
            <button 
              onClick={handlePrevIssue}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              color: 'hsl(var(--muted-foreground))',
              letterSpacing: '0.1em',
              minWidth: '40px',
              textAlign: 'center'
            }}>
              {currentIdx + 1} / {issues.length}
            </span>

            <button 
              onClick={handleNextIssue}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Details (Middle) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIssue.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64af03', marginBottom: '0.5rem' }}>
                {getIssueLabel(activeIssue)}
                {activeIssue.issue_number === latestIssueNumber && ' • LATEST RELEASE'}
                {activeIssue.issue_number === previousReleaseNumber && ' • PREVIOUS RELEASE'}
              </p>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.15, textTransform: 'uppercase', marginBottom: '1.25rem', color: '#64af03' }}>
                {renderTitle(activeIssue.title)}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, marginBottom: '2rem' }}>
                {DESCRIPTION}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Subscription form */}
          <div style={{ marginBottom: '3rem' }}>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} style={{ position: 'relative', width: '100%' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '1rem 3.5rem 1rem 1.25rem', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.15)', 
                    background: 'rgba(255,255,255,0.03)', 
                    color: 'hsl(var(--foreground))', 
                    fontSize: '0.95rem', 
                    outline: 'none' 
                  }}
                />
                <button 
                  type="submit"
                  style={{ 
                    position: 'absolute', 
                    right: '6px', 
                    top: '6px', 
                    bottom: '6px', 
                    width: '36px', 
                    height: '36px',
                    background: '#64af03', 
                    color: '#000', 
                    border: 'none', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer' 
                  }}
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div style={{ color: '#64af03', fontWeight: 700, padding: '1rem', backgroundColor: 'rgba(100, 175, 3, 0.05)', border: '1px solid rgba(100, 175, 3, 0.2)', borderRadius: '8px' }}>
                Successfully subscribed!
              </div>
            )}
          </div>

          {/* Previous/All Issues Selector (Bottom) */}
          <div style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
            paddingTop: '2rem' 
          }}>
            <h3 style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'hsl(var(--muted-foreground))', 
              marginBottom: '1.25rem' 
            }}>
              Explore Issues
            </h3>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.25rem', 
              flexWrap: 'wrap' 
            }}>
              {exploreIssues.map((issue) => {
                const isActive = issue.id === activeIssueId;
                return (
                  <div 
                    key={issue.id}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIssueId(issue.id);
                      }
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      width: '75px',
                    }}
                  >
                    <motion.div
                      animate={isActive ? {
                        boxShadow: [
                          '0 0 8px rgba(100, 175, 3, 0.4), 0 4px 8px rgba(0,0,0,0.3)',
                          '0 0 16px rgba(100, 175, 3, 0.7), 0 4px 8px rgba(0,0,0,0.3)',
                          '0 0 8px rgba(100, 175, 3, 0.4), 0 4px 8px rgba(0,0,0,0.3)'
                        ]
                      } : {}}
                      transition={isActive ? {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      } : {}}
                      style={{
                        position: 'relative',
                        borderRadius: '0.35rem',
                        overflow: 'hidden',
                        aspectRatio: '3/4',
                        width: '100%',
                        border: isActive 
                          ? '2px solid #64af03' 
                          : '1px solid rgba(255,255,255,0.08)',
                        marginBottom: '0.4rem',
                        backgroundColor: 'hsl(var(--card))'
                      }}
                    >
                      <img 
                        src={getImageUrl(issue)} 
                        alt={issue.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: isActive ? 1.0 : 0.65,
                          transition: 'opacity 0.3s ease'
                        }}
                      />
                      {isActive && (
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: '#64af03',
                          color: '#000',
                          fontSize: '0.55rem',
                          fontWeight: 900,
                          textAlign: 'center',
                          padding: '1px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          zIndex: 2
                        }}>
                          ACTIVE
                        </div>
                      )}
                    </motion.div>
                    <span style={{ 
                      fontSize: '0.6rem', 
                      fontWeight: isActive ? 800 : 500, 
                      color: isActive ? '#64af03' : 'hsl(var(--muted-foreground))',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em'
                    }}>
                      {getIssueLabel(issue).split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    );
  }

  // Desktop Render
  return (
    <section className="desktop-magazine-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'hsl(var(--background))', 
      padding: '120px 0',
      borderBottomLeftRadius: '120px',
      borderBottomRightRadius: '120px',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
        
        {/* UPPER PORTION: Featured Issue Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center', marginBottom: '5rem' }}>
          
          {/* Featured Image Column (Left) */}
          <div style={{ 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIssue.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ position: 'relative', width: '100%', maxWidth: '380px' }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Glowing Background Glow behind the image */}
                <div style={{
                  position: 'absolute',
                  inset: '-15px',
                  background: 'radial-gradient(circle, rgba(100, 175, 3, 0.2) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }} />
                
                <img 
                  src={getImageUrl(activeIssue)} 
                  alt={activeIssue.title} 
                  style={{ 
                    width: '100%', 
                    borderRadius: '1rem', 
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(100, 175, 3, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'block',
                    position: 'relative',
                    zIndex: 1
                  }} 
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              marginTop: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0.5rem 1.25rem',
              borderRadius: '99px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              zIndex: 5
            }}>
              <button 
                onClick={handlePrevIssue}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  outline: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#64af03'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                title="Newer Issue"
              >
                <ChevronLeft size={24} />
              </button>
              
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                color: 'hsl(var(--muted-foreground))',
                letterSpacing: '0.1em',
                minWidth: '50px',
                textAlign: 'center'
              }}>
                {currentIdx + 1} / {issues.length}
              </span>

              <button 
                onClick={handleNextIssue}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  outline: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#64af03'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                title="Older Issue"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Featured Content Column (Right) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIssue.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ 
                  fontSize: '13px', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.35em', 
                  color: '#fff', 
                  marginBottom: '1rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '4px', 
                  display: 'inline-block',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {getIssueLabel(activeIssue)}
                  {activeIssue.issue_number === latestIssueNumber && ' • LATEST RELEASE'}
                  {activeIssue.issue_number === previousReleaseNumber && ' • PREVIOUS RELEASE'}
                </p>
                <h2 style={{ 
                  fontSize: '3rem', 
                  fontWeight: 800, 
                  lineHeight: 1.15, 
                  textTransform: 'uppercase', 
                  color: '#64af03', 
                  marginBottom: '1.5rem' 
                }}>
                  {renderTitle(activeIssue.title)}
                </h2>
                <p style={{ 
                  fontSize: '18px', 
                  color: 'hsl(var(--muted-foreground))', 
                  lineHeight: 1.7, 
                  marginBottom: '2rem', 
                  maxWidth: '520px' 
                }}>
                  {DESCRIPTION}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
                  {TOPICS.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle size={16} color="#64af03" style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: 600, color: 'hsl(var(--foreground))', fontSize: '0.85rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', maxWidth: '450px' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ 
                    flex: 1, 
                    padding: '1rem 1.5rem', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.15)', 
                    background: 'rgba(255,255,255,0.03)', 
                    color: 'hsl(var(--foreground))', 
                    outline: 'none', 
                    fontSize: '0.95rem',
                    transition: 'all 0.2s',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#64af03'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
                />
                <HoverGalaxyButton 
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(100, 175, 3, 0.1)', color: 'hsl(87 97% 45%)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-outline"
                  style={{ 
                    padding: '1rem 2rem', 
                    color: 'hsl(87 97% 45%)', 
                    border: '1px solid hsl(87 97% 45%)',
                    backgroundColor: 'transparent',
                    borderRadius: '8px', 
                    fontWeight: 700, 
                    fontSize: '13px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Join Free
                </HoverGalaxyButton>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  color: '#64af03', 
                  fontWeight: 700, 
                  padding: '1.25rem', 
                  backgroundColor: 'rgba(100, 175, 3, 0.05)', 
                  border: '1px solid rgba(100, 175, 3, 0.2)', 
                  borderRadius: '8px', 
                  textAlign: 'center',
                  maxWidth: '450px'
                }}
              >
                Welcome to the WealthX Blueprint!
              </motion.div>
            )}
          </div>
        </div>

        {/* LOWER PORTION: Previous Issues Carousel/Grid */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
          paddingTop: '3rem',
          marginTop: '2rem'
        }}>
          <h3 style={{ 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '0.25em', 
            color: 'hsl(var(--muted-foreground))', 
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Explore Issues
          </h3>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2.5rem', 
            flexWrap: 'wrap' 
          }}>
            {exploreIssues.map((issue) => {
              const isActive = issue.id === activeIssueId;
              return (
                <div 
                  key={issue.id}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIssueId(issue.id);
                    }
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    width: '120px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.05 }}
                    animate={isActive ? {
                      boxShadow: [
                        '0 0 15px rgba(100, 175, 3, 0.4), 0 10px 20px rgba(0,0,0,0.3)',
                        '0 0 25px rgba(100, 175, 3, 0.8), 0 10px 20px rgba(0,0,0,0.3)',
                        '0 0 15px rgba(100, 175, 3, 0.4), 0 10px 20px rgba(0,0,0,0.3)'
                      ]
                    } : {}}
                    transition={isActive ? {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    } : {}}
                    style={{
                      position: 'relative',
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                      aspectRatio: '3/4',
                      width: '100%',
                      border: isActive 
                        ? '2px solid #64af03' 
                        : '1px solid rgba(255,255,255,0.1)',
                      marginBottom: '0.75rem',
                      backgroundColor: 'hsl(var(--card))'
                    }}
                  >
                    <img 
                      src={getImageUrl(issue)} 
                      alt={issue.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isActive ? 1.0 : 0.65,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: '#64af03',
                        color: '#000',
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        textAlign: 'center',
                        padding: '2px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        ACTIVE
                      </div>
                    )}
                  </motion.div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: isActive ? 800 : 500, 
                    color: isActive ? '#64af03' : 'hsl(var(--muted-foreground))',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s ease'
                  }}>
                    {getIssueLabel(issue)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MagazineSection;
