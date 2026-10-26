import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MotionDirector() {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const media = gsap.matchMedia();
    media.add('(min-width: 761px)', () => {
      gsap.fromTo('.hero-mark img',
        { scale: 0.82, opacity: 0.68 },
        { scale: 1, opacity: 1, ease: 'none', scrollTrigger: {
          trigger: '.hero', start: 'top bottom', end: 'center center', scrub: 1,
        } });
      gsap.to('.hero-mark img', { scale: 0.9, opacity: 0.25, ease: 'none', scrollTrigger: {
        trigger: '.hero', start: 'center center', end: 'bottom top', scrub: 1,
      } });

      gsap.fromTo('.path-item',
        { y: (index) => 10 + index * 6, scale: 0.995 },
        { y: 0, scale: 1, ease: 'none', stagger: 0.08, scrollTrigger: {
          trigger: '.path-grid', start: 'top 85%', end: 'bottom 48%', scrub: 1,
        } });
    });

    return () => media.revert();
  }, []);

  return null;
}
