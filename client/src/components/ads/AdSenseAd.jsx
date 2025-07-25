import React, { useEffect } from 'react';

const AdSenseAd = ({ 
  slot = '', 
  format = 'auto', 
  responsive = true,
  style = { display: 'block' },
  className = '',
  layout = '',
  layoutKey = ''
}) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  // Don't render ad in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`bg-gray-200 p-4 text-center ${className}`} style={style}>
        <p className="text-gray-600">Ad Space</p>
        <p className="text-sm text-gray-500">(Ads will appear in production)</p>
      </div>
    );
  }

  return (
    <div className={`${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7995733986339557"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
        data-ad-layout={layout || undefined}
        data-ad-layout-key={layoutKey || undefined}
      />
    </div>
  );
};

export default AdSenseAd;
