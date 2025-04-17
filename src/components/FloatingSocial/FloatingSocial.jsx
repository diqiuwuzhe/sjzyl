import React, { useState } from 'react';
import './FloatingSocial.css';

const FloatingSocial = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className="floating-social">
      <div className="social-btn-container">
        <button 
          className="social-btn" 
          onMouseEnter={() => setShowQRCode(true)}
          onMouseLeave={() => setShowQRCode(false)}
        >
          <img src="/images/video-account.svg" alt="视频号" className="social-icon" />
          {showQRCode && (
            <div className="qr-code-popup">
              <img src="/images/video-account-qr.png" alt="视频号二维码" className="qr-code" />
            </div>
          )}
        </button>
      </div>
      
      <div className="social-btn-container">
        <a 
          href="https://www.douyin.com/user/MS4wLjABAAAAO4mNL7ZBNhO4Uut74IBegsDGgDQieEIZ3J5NWyb2kPnRitwWfCE6XGPjYJNcC4hv?from_tab_name=main" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn"
        >
          <img src="/images/douyin.svg" alt="抖音" className="social-icon" />
        </a>
      </div>

      <div className="social-btn-container">
        <a 
          href="https://www.xiaohongshu.com/user/profile/66176b9e0000000003030a3e?xsec_token=YBuUuv4Jmtk0rIbmY82uagu49EkKnR4PbzwO8gjMSt79A=&xsec_source=app_share&xhsshare=CopyLink&appuid=66176b9e0000000003030a3e&apptime=1744687652&share_id=8add1b0277e04d89bce765a97ee4f802" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn"
        >
          <img src="/images/xiaohongshu.svg" alt="小红书" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;