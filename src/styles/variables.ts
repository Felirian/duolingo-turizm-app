export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  lightGreen: '#CBF6B7',
  mediumGreen: '#95EA96',
  textGreen: '#0F8359',
};

const breakpoints = {
  laptopBP: '1440px',
  mobileBP: '480px',
};

export const BREAKPOINTS = {
  laptop: `(max-width: ${breakpoints.laptopBP})`,
  mobile: `(max-width: ${breakpoints.mobileBP})`,
};
