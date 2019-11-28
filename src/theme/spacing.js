import { SPACING_NAMES } from './constants';

/*
const biggestMobile = '5rem';
const biggerMobile = '3.25rem';
const bigMobile = '2.5rem';
const mediumMobile = '1.5rem';
const smallMobile = '1rem';
const smallerMobile = '0.5rem';
const smallestMobile = '0.25rem';
*/

const biggestMobile = '3rem';
const biggerMobile = '2rem';
const bigMobile = '1.5rem';
const mediumMobile = '1rem';
const smallMobile = '0.8rem';
const smallerMobile = '0.4rem';
const smallestMobile = '0.2rem';

const biggestDesktop = '6rem';
const biggerDesktop = '4rem';
const bigDesktop = '3rem';
const mediumDesktop = '2rem';
const smallDesktop = '1.25rem';
const smallerDesktop = '0.75rem';
const smallestDesktop = '0.25rem';

const SPACING_MOBILE = {
  [SPACING_NAMES.ZERO]: 0,
  [SPACING_NAMES.AUTO]: 'auto',
  [SPACING_NAMES.BIGGEST]: biggestMobile,
  [SPACING_NAMES.BIGGER]: biggerMobile,
  [SPACING_NAMES.BIG]: bigMobile,
  [SPACING_NAMES.MEDIUM]: mediumMobile,
  [SPACING_NAMES.SMALL]: smallMobile,
  [SPACING_NAMES.SMALLER]: smallerMobile,
  [SPACING_NAMES.SMALLEST]: smallestMobile,
  [SPACING_NAMES.NEGATIVE_BIGGEST]: `-${biggestMobile}`,
  [SPACING_NAMES.NEGATIVE_BIGGER]: `-${biggerMobile}`,
  [SPACING_NAMES.NEGATIVE_BIG]: `-${bigMobile}`,
  [SPACING_NAMES.NEGATIVE_MEDIUM]: `-${mediumMobile}`,
  [SPACING_NAMES.NEGATIVE_SMALL]: `-${smallMobile}`,
  [SPACING_NAMES.NEGATIVE_SMALLER]: `-${smallerMobile}`,
  [SPACING_NAMES.NEGATIVE_SMALLEST]: `-${smallestMobile}`,
};

const SPACING_DESKTOP = {
  [SPACING_NAMES.ZERO]: 0,
  [SPACING_NAMES.AUTO]: 'auto',
  [SPACING_NAMES.BIGGEST]: biggestDesktop,
  [SPACING_NAMES.BIGGER]: biggerDesktop,
  [SPACING_NAMES.BIG]: bigDesktop,
  [SPACING_NAMES.MEDIUM]: mediumDesktop,
  [SPACING_NAMES.SMALL]: smallDesktop,
  [SPACING_NAMES.SMALLER]: smallerDesktop,
  [SPACING_NAMES.SMALLEST]: smallestDesktop,
  [SPACING_NAMES.NEGATIVE_BIGGEST]: `-${biggestDesktop}`,
  [SPACING_NAMES.NEGATIVE_BIGGER]: `-${biggerDesktop}`,
  [SPACING_NAMES.NEGATIVE_BIG]: `-${bigDesktop}`,
  [SPACING_NAMES.NEGATIVE_MEDIUM]: `-${mediumDesktop}`,
  [SPACING_NAMES.NEGATIVE_SMALL]: `-${smallDesktop}`,
  [SPACING_NAMES.NEGATIVE_SMALLER]: `-${smallerDesktop}`,
  [SPACING_NAMES.NEGATIVE_SMALLEST]: `-${smallestDesktop}`,
};

const spacing = {
  mobile: SPACING_MOBILE,
  desktop: SPACING_DESKTOP,
};

export default spacing;
