import DEFAULT_BREAKPOINTS from './breakpoints';
import DEFAULT_PALETTES from './palettes';
import DEFAULT_SPACE_UNITS from './spacing';
import DEFAULT_TYPOGRAPHY_SCALE from './typography';
import DEFAULT_ZINDEX from './zIndex';

export const DEFAULT_REMBASE = 16;

const DEFAULT_THEME = {
  remBase: DEFAULT_REMBASE,
  zIndex: DEFAULT_ZINDEX,
  palettes: DEFAULT_PALETTES,
  typographyScale: DEFAULT_TYPOGRAPHY_SCALE,
  breakpoints: DEFAULT_BREAKPOINTS,
  spaceUnits: DEFAULT_SPACE_UNITS,
};

export default DEFAULT_THEME;
