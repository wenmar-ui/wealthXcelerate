import { useEffect } from 'react';

const WIDGET_ID = '6a4fcd84b90c051587e16205';
const WIDGET_SCRIPT_SRC = 'https://widgets.leadconnectorhq.com/loader.js';
const WIDGET_RESOURCES_URL = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js';
const DATA_SOURCE = 'WEB_USER';

const LeadConnectorChatWidget: React.FC = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SCRIPT_SRC}"][data-widget-id="${WIDGET_ID}"]`
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'leadconnector-chat-widget';
    script.src = WIDGET_SCRIPT_SRC;
    script.async = true;
    script.setAttribute('data-resources-url', WIDGET_RESOURCES_URL);
    script.setAttribute('data-widget-id', WIDGET_ID);
    script.setAttribute('data-source', DATA_SOURCE);
    document.body.appendChild(script);
  }, []);

  return null;
};

export default LeadConnectorChatWidget;
