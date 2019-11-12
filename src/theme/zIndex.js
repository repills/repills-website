import { ZINDEX } from './constants';

const zIndex = {
  [ZINDEX.overthetop]: 99999,
  [ZINDEX.modal]: 7000,
  [ZINDEX.navbar]: 6000,
  [ZINDEX.sidebar]: 5000,
  [ZINDEX.popover]: 4000,
  [ZINDEX.overlay]: 3000,
  [ZINDEX.inpage]: 1000,
  [ZINDEX.standard]: 1,
  [ZINDEX.below]: -1,
  [ZINDEX.bottomless]: -99999
};

export default zIndex;
