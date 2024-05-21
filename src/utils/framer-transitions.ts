export const bottomToTop = (delay: number = 0) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.085 * delay,
      duration: 0.35,
    },
  }),
});
