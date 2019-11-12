import { TYPOGRAPHY_NAMES } from './constants'

export const PRIMARY_FONT_FAMILY = "'Poppins', sans-serif"

const typographyConfig = {
  [TYPOGRAPHY_NAMES.MEGA]: {
    weight: 700,
    family: PRIMARY_FONT_FAMILY,
    variants: {
      mobile: {
        fontSize: '1.7rem',
        lineHeight: '1.3'
      },
      desktop: {
        fontSize: '3.2rem',
        lineHeight: '1.3'
      }
    }
  },
  [TYPOGRAPHY_NAMES.H1]: {
    weight: 700,
    family: PRIMARY_FONT_FAMILY,
    variants: {
      mobile: {
        fontSize: '1.5rem',
        lineHeight: '1.4'
      },
      desktop: {
        fontSize: '2rem',
        lineHeight: '1.4'
      }
    }
  },
  [TYPOGRAPHY_NAMES.H2]: {
    weight: 700,
    family: PRIMARY_FONT_FAMILY,
    variants: {
      mobile: {
        fontSize: '1.2rem',
        lineHeight: '1.4'
      },
      desktop: {
        fontSize: '1.6rem',
        lineHeight: '1.4'
      }
    }
  },
  [TYPOGRAPHY_NAMES.TITLE]: {
    weight: 400,
    family: PRIMARY_FONT_FAMILY,
    variants: {
      mobile: {
        fontSize: '1.3rem',
        lineHeight: '1.4'
      },
      desktop: {
        fontSize: '1.5rem',
        lineHeight: '1.4'
      }
    }
  },
  [TYPOGRAPHY_NAMES.BODY]: {
    weight: 400,
    family: PRIMARY_FONT_FAMILY,
    variants: {
      mobile: {
        fontSize: '1rem',
        lineHeight: '1.75'
      },
      desktop: {
        fontSize: '1.1rem',
        lineHeight: '1.75'
      }
    }
  },
  [TYPOGRAPHY_NAMES.SMALL]: {
    weight: 400,
    family: PRIMARY_FONT_FAMILY,
    variants: {
      mobile: {
        fontSize: '0.9rem',
        lineHeight: '1.75'
      },
      desktop: {
        fontSize: '0.9rem',
        lineHeight: '1.75'
      }
    }
  }
}

export default typographyConfig
