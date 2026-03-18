import React from 'react';
import { useOnScreen } from '../../hooks';

const RevealSection = ({ children, className = "", delay = 0, animation = "fade-up" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  const getAnimationClass = () => {
    switch(animation) {
      case "zoom-in": return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "slide-left": return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "slide-right": return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      default: return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealSection;