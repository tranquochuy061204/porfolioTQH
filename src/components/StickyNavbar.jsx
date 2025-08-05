import React from 'react';
import Marquee from 'react-fast-marquee';
import { navItems } from '../constants';
import { useState, useEffect, useRef } from 'react';

const StickyNavbar = ({ className }) => {
  const [activeSection, setActiveSection] = useState('');
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const containerPadding = 15;

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.id === activeSection);
    const activeEl = itemRefs.current[activeIndex];

    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setHighlightStyle({ left: offsetLeft + containerPadding, width: offsetWidth });
    }
  }, [activeSection]);

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 relative">
        {/* Thanh highlight di chuyển */}
        <span
          className="absolute top-[10px] h-[25px] bg-black rounded-md transition-all duration-300 z-0"
          style={{
            left: highlightStyle.left,
            width: highlightStyle.width,
          }}
        ></span>

        {/* Menu Items */}
        <ul className="relative flex gap-6 text-sm font-semibold uppercase tracking-wider z-10">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`px-3 py-1 rounded-md transition-all duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Marquee */}
      <Marquee className="bg-black">
        <div className="text-white text-2xl font-bold w-full">
          <h1>Welcome to my Portfolio !</h1>
        </div>
      </Marquee>
    </nav>
  );
};

export default StickyNavbar;
