import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PageSEO = ({ 
  title, 
  description, 
  keywords,
  canonical = "https://portfoliooo-wdqc.vercel.app/",
  ogImage = "/og-image.jpg",
  ogType = "website"
}) => {
  const fullTitle = title.includes('Sheikh Abdullah Ahmed') ? title : `${title} - Sheikh Abdullah Ahmed | MERN Stack Developer`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default PageSEO;
