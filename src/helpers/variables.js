export const colors = {
  primary: '#343A40',
  secondary: '#FBFAF2',
  tertiary: '#000',
};

export const font = {
  color: {
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,
  },
  family: {
    primary: "'Lato Regular', sans-serif",
  },
  size: {
    small: '15px',
    normal: '18px',
    large: '21px',
  },
};

export const screen = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1170px',
};

export const link = {
  primary: colors.primary,
};

export const transition = {
  fast: '0.15s',
  normal: '0.25s',
  slow: '0.4s',
};

const variables = { colors, font, link, screen, transition };
export default variables;
