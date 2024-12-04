export const COLORS = {
  orange: "#DB3919",
  blue: "#1F4664",
  black: "#131313",
  darkDarkGrey: "#373737",
  darkGrey: "#444444",
  grey: "#868686",
  white: "#FFFFFF",
};

const breakpoints = {
  laptopBP: "1440px",
  mobileBP: "480px",
};

export const BREAKPOINTS = {
  laptop: `(max-width: ${breakpoints.laptopBP})`,
  mobile: `(max-width: ${breakpoints.mobileBP})`,
};

export const NAV_LINKS = [
  {
    name: "О нас",
    href: "#about",
  },
  {
    name: "Преимущества",
    href: "#benefits",
  },
  {
    name: "Предложения",
    href: "#offer",
  },
  {
    name: "Программа лояльности",
    href: "#loyalty",
  },
  {
    name: "Партнеры",
    href: "#partners",
  },
  {
    name: "Контакты",
    href: "#contacts",
  },
];

export const SOCIAL_LINKS = [
  { icon: "TgLogo", href: "" },
  { icon: "VkLogo", href: "" },
  { icon: "InstLogo", href: "" },
];