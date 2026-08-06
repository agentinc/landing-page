import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right
        ) {
          glowRef.current.style.opacity = '0';
          return;
        }
      }

      glowRef.current.style.opacity = '1';
      glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-300"
      style={{ transform: 'translate(-200px, -200px)' }}
    >
      <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}
