// Shared Framer Motion variants. Ease: Apple-style deceleration curve.
export const ease = [0.22, 1, 0.36, 1];

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const scaleInCard = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

// Scroll-triggered stagger: run once when 15% of the group is visible.
export const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.15 } };

export const hoverLift = { y: -4, transition: { duration: 0.2, ease: 'easeOut' } };
