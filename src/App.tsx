import { useState, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import LeadConnectorChatWidget from './components/LeadConnectorChatWidget';
import AppRoutes from './AppRoutes';

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <LeadConnectorChatWidget />

      <Router>
        <SmoothScroll>
          <AppRoutes />
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}

export default App;
