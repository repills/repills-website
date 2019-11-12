import { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { BREAKPOINTS_QUERY_NAMES } from '../constants';

export const SPACING_TYPES = {
  PADDING: 'padding',
  MARGIN: 'margin',
}

export const SPACING_DIRECTIONS = {
  TOP: '-top',
  BOTTOM: '-bottom',
  LEFT: '-left',
  RIGHT: '-right',
}

function getSpacingStyle(
    theme,
    type,
    values,
    variant,
  ) {
  const spacingProperty = `${type}${variant || ''}`;

  return css`
    ${spacingProperty}: ${values.map((value) => theme.spaceUnits.mobile[value]).join(' ')};

    ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
      ${spacingProperty}: ${values.map((value) => theme.spaceUnits.desktop[value]).join(' ')};
    `}
  `;
}

function normalizeValues(values) {
  const normalizedValues = values.constructor === Array ? values : [values];
  return normalizedValues;
}

export function getPadding(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.PADDING, normalizeValues(values));
}

export function getPaddingTop(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.PADDING, normalizeValues(values), SPACING_DIRECTIONS.TOP);
}

export function getPaddingBottom(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.PADDING, normalizeValues(values), SPACING_DIRECTIONS.BOTTOM);
}

export function getPaddingLeft(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.PADDING, normalizeValues(values), SPACING_DIRECTIONS.LEFT);
}

export function getPaddingRight(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.PADDING, normalizeValues(values), SPACING_DIRECTIONS.RIGHT);
}

export function getMargin(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.MARGIN, normalizeValues(values));
}

export function getMarginTop(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.MARGIN, normalizeValues(values), SPACING_DIRECTIONS.TOP);
}

export function getMarginBottom(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.MARGIN, normalizeValues(values), SPACING_DIRECTIONS.BOTTOM);
}

export function getMarginLeft(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.MARGIN, normalizeValues(values), SPACING_DIRECTIONS.LEFT);
}

export function getMarginRight(theme, values) {
  return getSpacingStyle(theme, SPACING_TYPES.MARGIN, normalizeValues(values), SPACING_DIRECTIONS.RIGHT);
}

export default {
  padding: getPadding,
  paddingTop: getPaddingTop,
  paddingBottom: getPaddingBottom,
  paddingLeft: getPaddingLeft,
  paddingRight: getPaddingRight,
  margin: getMargin,
  marginTop: getMarginTop,
  marginBottom: getMarginBottom,
  marginLeft: getMarginLeft,
  marginRight: getMarginRight,
};
