export const colors = {
  primary: '#072B73', // deep blue
  secondary: '#CE6C00', // orange
  tertiary: '#194073', // dull blue
  quaternary: '#5E728C', // soft blue
  quinary: '#9BABBF', // light grayish blue
  senary: '#fff', // white
  septenary: '#000', // black
};

export const font = {
  color: {
    primary: colors.primary, // deep blue
    secondary: colors.secondary, // orange
    tertiary: colors.quaternary, // soft blue
    quaternary: colors.quinary, // light grayish blue
    quinary: colors.senary, // white
    senary: colors.septenary, // black
    septenary: colors.tertiary, // dull blue
  },
  family: {
    primary: "'Lato Regular', sans-serif",
    secondary: "'Kalam Regular', cursive",
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

export const boxShadow = {
  primary:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
};

const variables = { boxShadow, colors, font, link, screen, transition };
export default variables;
