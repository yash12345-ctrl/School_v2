import { useState, useEffect, useRef } from 'react';

/**
 * SplashScreen — full-screen video intro.
 *  • Phone (≤768px):  plays /splash.mp4
 *  • Desktop (>768px): plays /Boy_opening_letter_on_bicycle_202606251319.mp4
 * Shows a subtle loading pulse while video buffers, then plays and fades out.
 */
export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile] = useState(() => window.innerWidth <= 768);
  const hasEnded = useRef(false);

  const videoSrc = isMobile
    ? '/splash.mp4'
    : '/Boy_opening_letter_on_bicycle_202606251319.mp4';

  // Fade out then unmount
  const handleVideoEnd = () => {
    if (hasEnded.current) return; // prevent double-fire
    hasEnded.current = true;
    setFadeOut(true);
    setTimeout(() => onComplete(), 800);
  };

  // Video has enough data to start — show it and play
  const handleLoadedData = () => {
    setVideoReady(true);
    videoRef.current?.play().catch(() => {
      // Autoplay blocked — skip splash
      handleVideoEnd();
    });
  };

  // Allow tap/click to skip
  const handleSkip = () => {
    if (videoRef.current) videoRef.current.pause();
    handleVideoEnd();
  };

  // Fallback: if video completely fails to fire any event after 10s, skip
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoReady && !hasEnded.current) {
        handleVideoEnd();
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [videoReady]);

  return (
    <div
      className={`splash-overlay ${fadeOut ? 'splash-fadeout' : ''}`}
      onClick={handleSkip}
    >
      {/* Loading pulse — visible until video starts */}
      {!videoReady && (
        <div className="splash-loader">
          <div className="splash-loader-dot" />
        </div>
      )}

      <video
        ref={videoRef}
        className={`splash-video ${videoReady ? 'splash-video-ready' : ''}`}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        onLoadedData={handleLoadedData}
        onEnded={handleVideoEnd}
      />
      <button className="splash-skip" onClick={(e) => { e.stopPropagation(); handleSkip(); }}>
        Skip ›
      </button>
    </div>
  );
}
