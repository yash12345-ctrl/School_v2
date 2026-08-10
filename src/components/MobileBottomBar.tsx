import React from 'react';

const navTabs = [
  { label: 'Home', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'About', href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Events', href: '/event', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Media', href: '/media', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Contact', href: '/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

export default function MobileBottomBar() {
  const currentPath = window.location.pathname;

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#') || path.startsWith('http')) return;
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="mobile-bottom-bar-wrapper">
      <nav className="mobile-bottom-bar">
        {navTabs.map((tab) => {
          const isActive = currentPath === tab.href || (tab.href !== '/' && currentPath.startsWith(tab.href));
          return (
            <a
              key={tab.label}
              href={tab.href}
              onClick={(e) => handleNavigation(e, tab.href)}
              className={`mobile-tab-item ${isActive ? 'active' : ''}`}
            >
              <svg className="mobile-tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2.2 : 1.7} d={tab.icon} />
              </svg>
              <span className="mobile-tab-label">{tab.label}</span>
              {isActive && <div className="mobile-active-dot" />}
            </a>
          );
        })}
      </nav>

      <style>{`
        .mobile-bottom-bar-wrapper {
          display: none;
        }

        @media (max-width: 767px) {
          .mobile-bottom-bar-wrapper {
            display: block;
            position: fixed;
            bottom: 12px;
            left: 12px;
            right: 12px;
            z-index: 999;
          }

          .mobile-bottom-bar {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: rgba(10, 14, 26, 0.88);
            backdrop-filter: blur(28px) saturate(180%);
            -webkit-backdrop-filter: blur(28px) saturate(180%);
            border: 1px solid rgba(201, 168, 76, 0.35);
            border-radius: 9999px;
            padding: 6px 10px;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 15px rgba(201, 168, 76, 0.15);
          }

          .mobile-tab-item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            padding: 6px 12px;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: all 0.25s ease;
            border-radius: 20px;
          }

          .mobile-tab-item.active {
            color: #e8c96e;
          }

          .mobile-tab-icon {
            width: 20px;
            height: 20px;
            transition: transform 0.2s ease;
          }

          .mobile-tab-item.active .mobile-tab-icon {
            transform: translateY(-1px) scale(1.08);
          }

          .mobile-tab-label {
            font-family: 'Inter', -apple-system, sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.03em;
          }

          .mobile-active-dot {
            position: absolute;
            bottom: 2px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #c9a84c;
            box-shadow: 0 0 6px rgba(201, 168, 76, 0.8);
          }
        }
      `}</style>
    </div>
  );
}
