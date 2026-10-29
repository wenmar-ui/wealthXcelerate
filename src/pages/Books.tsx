import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import HoverGalaxyCard from '../components/HoverGalaxyCard';
import HoverGalaxyButton from '../components/HoverGalaxyButton';

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const BOOKS = [
  {
    id: 'cost-of-goodbye',
    title: 'The Cost of Goodbye',
    summary: 'From a decorated financial consultant who has faced personal tragedy, a simple, powerful guide to paying for final wishes with final expense insurance.',
    fullSummary: [
      'Dennis M. Postema, RFC is a successful entrepreneur, international best-selling author, certified life coach, speaker, registered financial consultant, certified personal trainer and certified health coach. He is the founder of multiple companies you can view at DennisPostema.com.',
      'For over 2 decades, Dennis has taught and coached clients, agents and associates how to find motivation and ascend psychological barriers to achieve success. His dedication to improving lives has led him to work with renowned motivational and self-help industry heavyweights.',
      'Dennis\'s personal experience with tragedy, life-changing surgeries and health issues has given him a unique perspective on what it means to achieve success and what is really standing in the way of it. He channels that perspective into educational and motivational books and programs in the topics of finance, perseverance, success and business.'
    ],
    image: '/book1.png',
    accent: '#64af03',
    label: '',
    tag: '#1 Best Seller',
    link: 'https://www.amazon.com/Cost-Goodbye-Simple-Expense-Insurance-ebook/dp/B0GWRRP5GS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SLyZksETe5fLZ-MYsFg6iZdffx7gyNAHi37vQ68-CPI.6Tft2ZLqNh0e3E1Xc3vsqvXb0sHWPOxNdcN8S_EpIak&dib_tag=se&qid=1779123142&refinements=p_27%3ADennis+Postema+RFC&s=digital-text&sr=1-1&text=Dennis+Postema+RFC',
  },
  {
    id: 'retire-rich',
    title: 'Retire Rich',
    summary: 'Dennis M. Postema shatters the myths of traditional retirement planning and reveals a radically different path, one used quietly by the wealthy for decades but rarely taught to everyday families.',
    fullSummary: [
      'What if retirement didn\'t mean running out of money, fearing market crashes, or handing half your life\'s work to the IRS? What if it meant freedom, control, and a legacy that outlives you?',
      'In Retire Rich, financial strategist Dennis M. Postema, RFC, shatters the myths of traditional retirement planning and reveals a radically different path, one used quietly by the wealthy for decades but rarely taught to everyday families. With a powerful foreword by NFL Hall of Famer Ray Lewis, this book is more than a financial guide. It is a call to transformation.',
      'Blending financial strategy with faith, Retire Rich isn\'t about getting rich quick. It\'s about building a system that works as hard for you as you\'ve worked for it, one that brings peace of mind today and purpose for generations to come.'
    ],
    image: '/book2.png',
    accent: '#64af03',
    label: '',
    tag: '#1 International Best Seller',
    link: 'https://www.amazon.com/Retire-Rich-Blueprint-Universal-Featuring-ebook/dp/B0GTW9RQSY/ref=sr_1_2?dib=eyJ2IjoiMSJ9.SLyZksETe5fLZ-MYsFg6iZdffx7gyNAHi37vQ68-CPI.6Tft2ZLqNh0e3E1Xc3vsqvXb0sHWPOxNdcN8S_EpIak&dib_tag=se&qid=1779123518&refinements=p_27%3ADennis+Postema+RFC&s=digital-text&sr=1-2&text=Dennis+Postema+RFC',
  },
  {
    id: 'senior-survival-guide',
    title: 'The Senior Survival Guide',
    summary: 'Turning 65 is supposed to bring peace of mind. But Medicare leaves costly gaps in dental, vision, and hearing care that can quietly drain savings and compromise quality of life.',
    fullSummary: [
      'Turning 65 is supposed to bring peace of mind—but for many seniors, it brings confusion. Most people assume Medicare has them fully covered. The truth is far more unsettling. When it comes to dental, vision, and hearing care—the very foundations of independence, confidence, and connection—Medicare leaves costly gaps that can quietly drain savings and compromise quality of life.',
      'In The Senior Survival Guide to Dental, Vision, and Hearing Insurance, Dennis M. Postema exposes what too many seniors discover too late. Drawing on real client experiences, clear financial analysis, and decades of professional insight, this book reveals how the system really works, why so many plans fall short, and how to make smarter, more confident decisions before a crisis.',
      'Through powerful stories and plain-English explanations, readers learn how dental, vision, and hearing health are deeply connected to overall wellness, cognitive function, emotional well-being, and long-term independence. You\'ll see how a single overlooked detail can cost thousands—and how the right planning can protect both your health and your legacy.',
      'This is not a sales pitch or a technical insurance manual. It\'s an empowering guide designed to replace fear and guesswork with clarity and confidence. Whether you\'re approaching Medicare, already enrolled, or helping a loved one navigate their options, this book equips you with the knowledge to ask the right questions, avoid common traps, and choose coverage that truly fits you.'
    ],
    image: '/senior-survival-guide.png',
    accent: '#64af03',
    label: '',
    tag: 'Healthcare Series',
    link: 'https://www.amazon.com/Senior-Survival-Dental-Hearing-Insurance-ebook/dp/B0GL9MJH7C/ref=books_amazonstores_desktop_mfs_aufs_ap_sc_dsk_0?_encoding=UTF8&pd_rd_w=ZhQYc&content-id=amzn1.sym.9c9a049f-252a-49d9-a8c2-e300a1663200&pf_rd_p=9c9a049f-252a-49d9-a8c2-e300a1663200&pf_rd_r=135-4822016-4819519&pd_rd_wg=nfMPV&pd_rd_r=c8dd0d16-bb0b-4d3c-9257-be432cd526cc',
  },
];

const Books: React.FC = () => {
  const [activeBookId, setActiveBookId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const activeBook = BOOKS.find(b => b.id === activeBookId);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://wealthxcelerate.com/books",
        "url": "https://wealthxcelerate.com/books",
        "name": "Educational Tools & Books | WealthXcelerate",
        "description": "Educational blueprints and best-selling books by Dennis M. Postema, RFC, covering financial freedom, retirement, and legacy planning."
      },
      ...BOOKS.map(book => ({
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
      }))
    ]
  };

  return (
    <div className="relative min-h-screen bg-transparent font-sans selection:bg-[#64af03]/30">
      <SEO
        title="Educational Tools & Books | WealthXcelerate"
        description="Best-selling books and financial blueprints by Dennis M. Postema, RFC. Discover proven strategies for retirement, Medicare, and generational legacy."
        url="https://wealthxcelerate.com/books"
        structuredData={structuredData}
      >
        <link rel="preload" as="image" href="/Avoiding-Legacy-Nightmare.png" />
        <link rel="preload" as="image" href="/senior-survival-guide.png" />
        <link rel="preload" as="image" href="/LTM.png" />
        <link rel="preload" as="image" href="/Financial-Blueprint.png" />
      </SEO>
      <Navbar />

      {/* ── GUARANTEED STYLES TO BYPASS TAILWIND COMPILER ISSUES ── */}
      <style>{`
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
      `}</style>

      {/* ── HEADER ── */}
      <section className="books-page-header">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <span 
            className="inline-block mb-6 uppercase tracking-widest"
            style={{ color: '#ffffff', fontSize: '14px', fontWeight: 800 }}
          >
            The Signature Series
          </span>
          <h1 className="books-title-main">
            Educational <span style={{ color: '#64af03' }}>Blueprints</span>.
          </h1>
          <p className="books-subtitle">
            Definitive frameworks for financial transformation and legacy building. Access the knowledge used to architect generational wealth.
          </p>
        </motion.div>
      </section>

      {/* ── BOOK LIST ── */}
      <div className="books-card-container">
        {BOOKS.map((book, i) => (
          <HoverGalaxyCard 
            key={book.id}
            particleCount={12}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{}}
            className="books-card"
          >
            <div className="books-left-col">
              <img 
                src={book.image} 
                alt={book.title} 
                className="books-book-img"
                loading="eager"
                fetchPriority="high"
                width="160"
                height="240"
                style={{
                  objectFit: 'contain',
                  width: '160px',
                  height: '240px',
                  transform: book.id === 'blueprint' ? 'scale(1.1)' : 'none'
                }}
              />
            </div>

            <div className="books-right-col">
              <span 
                className="books-card-tag"
                style={{ color: book.accent, border: `1px solid rgba(100, 175, 3, 0.3)`, backgroundColor: `rgba(100, 175, 3, 0.05)` }}
              >
                {book.tag}{book.label ? ` • ${book.label}` : ''}
              </span>
              
              <h2 className="books-card-title">
                {book.title}
              </h2>
              
              <div className="books-card-summary">
                <p style={{ margin: 0 }}>{book.summary}</p>
                {book.fullSummary && (
                  <button 
                    onClick={() => setActiveBookId(book.id)}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '0.75rem', 
                      fontSize: '0.95rem', 
                      fontWeight: 700, 
                      color: book.accent, 
                      cursor: 'pointer', 
                      border: 'none', 
                      background: 'transparent', 
                      padding: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'hsl(87, 97%, 45%)';
                      (e.currentTarget.lastElementChild as HTMLElement).style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = book.accent;
                      (e.currentTarget.lastElementChild as HTMLElement).style.transform = 'translateX(0)';
                    }}
                  >
                    Read Full Summary 
                    <span style={{ display: 'inline-flex', transition: 'transform 0.3s ease' }}>
                      <ArrowRight size={14} />
                    </span>
                  </button>
                )}
              </div>

              <HoverGalaxyButton 
                onClick={() => book.link && window.open(book.link, '_blank')}
                className="btn btn-outline"
                style={{ 
                  padding: '1rem 2.5rem', 
                  color: 'hsl(87 97% 45%)', 
                  border: '1px solid hsl(87 97% 45%)',
                  backgroundColor: 'transparent',
                  borderRadius: '8px', 
                  fontWeight: 700, 
                  fontSize: '14px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.2s ease',
                  width: 'fit-content'
                }}
                whileHover={{ color: 'hsl(87 97% 45%)' }}
              >
                Secure Your Copy
                <ArrowRight size={18} />
              </HoverGalaxyButton>
            </div>
          </HoverGalaxyCard>
        ))}

        {/* ── BROWSE ALL BOOKS CTA ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <p style={{ color: '#71717a', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 300 }}>
            Ready to explore further?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <HoverGalaxyButton 
              onClick={() => window.open("https://www.amazon.com/stores/Dennis-M.-Postema/author/B00BT05QAE?ref=ap_rdr&shoppingPortalEnabled=true", '_blank')}
              className="btn btn-outline"
              style={{ 
                padding: '1.25rem 3rem', 
                color: 'hsl(87 97% 45%)', 
                border: '1px solid hsl(87 97% 45%)',
                backgroundColor: 'transparent',
                borderRadius: '8px', 
                fontWeight: 700, 
                fontSize: '14px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                transition: 'all 0.2s ease',
                width: 'fit-content'
              }}
              whileHover={{ color: 'hsl(87 97% 45%)' }}
            >
              Browse Complete Library
              <ArrowRight size={18} />
            </HoverGalaxyButton>
          </div>
        </motion.div>
      </div>

      <Footer />

      {/* ── FULL SUMMARY MODAL ── */}
      <AnimatePresence>
        {activeBook && activeBook.fullSummary && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              background: 'rgba(0,0,0,0.6)', 
              backdropFilter: 'blur(10px)', 
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 1000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '1.5rem' 
            }}
            onClick={() => setActiveBookId(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-content animated-modal-border"
              style={{ 
                background: 'hsl(var(--card))', 
                borderRadius: '1.5rem', 
                padding: '3rem', 
                maxWidth: '700px', 
                width: '100%', 
                position: 'relative', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => setActiveBookId(null)}
                style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem', 
                  background: 'rgba(0,0,0,0.05)', 
                  border: 'none', 
                  borderRadius: '50%', 
                  padding: '0.5rem', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
              >
                <X size={20} color="hsl(var(--foreground))" />
              </button>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <img src={activeBook.image} alt={activeBook.title} style={{ width: '120px', borderRadius: '0.75rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'hsl(var(--foreground))', margin: '0 0 0.75rem 0', lineHeight: 1.1 }}>{activeBook.title}</h3>
                  <span style={{ color: activeBook.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(100, 175, 3, 0.1)', padding: '0.35rem 1rem', borderRadius: '99px' }}>{activeBook.tag}</span>
                </div>
              </div>
              
              <div 
                style={{ 
                  flex: 1, 
                  overflowY: 'auto', 
                  minHeight: 0,
                  paddingRight: '1rem',
                  touchAction: 'pan-y',
                  WebkitOverflowScrolling: 'touch',
                  pointerEvents: 'auto'
                }} 
                className="custom-scrollbar"
                onWheel={(e) => e.stopPropagation()}
              >
                {activeBook.fullSummary.map((para, idx) => (
                  <p key={idx} style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Books;
