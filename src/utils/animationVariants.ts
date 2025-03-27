const animationVariants = [
  {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  {
    initial: { opacity: 0, x: -100, rotate: -10 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    exit: { opacity: 0, x: 100, rotate: 10 },
    transition: { duration: 0.6, ease: 'backOut' },
  },
  {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
]

export default animationVariants
