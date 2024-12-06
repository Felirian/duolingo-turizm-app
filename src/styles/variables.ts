export const COLORS = {
  font: {
    dark: "#0A0A0A",
    light: "#F9F9F9",
    blue: "#4A58F6",
    darkBlue: "#00008B",
    orange: "#FF6056",
  },
  background: "#FFFFFF",
  orange: "#FF6056",
  blue: "#4A58F6",
  black: "#000000",
  dark: "#0A0A0A",
  white: "#FFFFFF",
  darkBlue: "#2D21A9",
};

const breakpoints = {
  laptopBP: "1440px",
  mobileBP: "480px",
};

export const BREAKPOINTS = {
  laptop: `(max-width: ${breakpoints.laptopBP})`,
  mobile: `(max-width: ${breakpoints.mobileBP})`,
};
