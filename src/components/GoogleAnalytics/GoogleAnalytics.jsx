import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
    return (
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7QJBGC239N"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-7QJBGC239N');
          `}
        </script>
      </Helmet>
    );
  };

  export default GoogleAnalytics
  
  
  