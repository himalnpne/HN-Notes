import React, { useEffect } from 'react';
import './AdComponent.css';

const AdComponent = ({ adSlot, adFormat = "auto", adStyle = { display: 'block' }, isResponsive = true }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="ad-container">
      <ins className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-3586880073929440"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={isResponsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdComponent;