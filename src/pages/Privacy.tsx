import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wealthxcelerate.com/privacy",
    "url": "https://wealthxcelerate.com/privacy",
    "name": "Privacy Policy | WealthXcelerate",
    "description": "WealthXcelerate privacy policy detailing user privacy rights, data protection, and information security standards."
  };

  return (
    <div style={{ background: 'transparent', color: 'hsl(var(--foreground))', minHeight: '100vh' }}>
      <SEO 
        title="Privacy Policy | WealthXcelerate" 
        description="WealthXcelerate privacy policy detailing user privacy rights, data protection, and information security standards." 
        url="https://wealthxcelerate.com/privacy"
        structuredData={structuredData}
      />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: '#64af03',
                backgroundColor: 'rgba(100, 175, 3, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}>
                Legal
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                fontWeight: 900, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em',
                margin: '0 0 1.5rem 0',
                color: 'hsl(var(--foreground))',
                textTransform: 'uppercase'
              }}
            >
              Privacy <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none', color: '#64af03' }}>Policy</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="privacy-content"
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'hsl(var(--muted-foreground))', fontWeight: 300 }}
          >
            <div>
              <p>This Privacy Policy governs the manner in which the website collects, uses, maintains and discloses information collected from users (each, a 'User') of the website ('Site'). This privacy policy applies to the Site and all products and services offered by WealthXcelerate.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Personal Identification Information</h2>
              <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Non-Personal Identification Information</h2>
              <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Web Browser Cookies</h2>
              <p>Our Site may use 'cookies' to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>How We Use Collected Information</h2>
              <p>WealthXcelerate may collect and use Users personal information for the following purposes:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <strong style={{ color: 'hsl(var(--foreground))' }}>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.
                </li>
                <li>
                  <strong style={{ color: 'hsl(var(--foreground))' }}>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
                </li>
                <li>
                  <strong style={{ color: 'hsl(var(--foreground))' }}>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.
                </li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>How we Protect your Information</h2>
              <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Sharing your Personal Information</h2>
              <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Third Party Websites</h2>
              <p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Changes to this Privacy Policy</h2>
              <p>WealthXcelerate has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Your Acceptance of these Terms</h2>
              <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
            </div>
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
