import React, { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
  structuredData?: Record<string, any>;
  children?: ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title = 'WealthXcelerate',
  description = 'A complete financial blueprint for wealth, protection, and legacy. Led by Ray Lewis & Dennis M. Postema.',
  type = 'website',
  url = 'https://wealthxcelerate.com',
  image = 'https://wealthxcelerate.com/logo-dark.png',
  structuredData,
  children,
}) => {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {children}
    </Helmet>
  );
};

export default SEO;
