export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  lightGreen: '#CBF6B7',
  mediumGreen: '#95EA96',
  textGreen: '#0F8359',
  heavyOrange: '#FF8500',
  mediumOrange: '#fe6d2c',
  darkOrange: '#FE562C',
  lightOrange: '#FF7B40',
  softOrange: '#FF9B1F',
  orange: '#FF8F04',
  bubbleGreen: '#A6D881',
  seaGreen: '#02C77F',
  red: '#EF3349',
  textGray: '#272727',
  gray:'#B1B1B1',
  lightGray:'#D3D3D3',
};

const breakpoints = {
  laptopBP: '1440px',
  mobileBP: '480px',
};

export const BREAKPOINTS = {
  laptop: `(max-width: ${breakpoints.laptopBP})`,
  mobile: `(max-width: ${breakpoints.mobileBP})`,
};
