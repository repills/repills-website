import React from 'react'
import { ThemeConsumer } from 'styled-components'
import { getColor } from '../../theme/utils';

const LOGO_VARIANTS = ['full', 'minimal']

function getVariant(variant) {
  return LOGO_VARIANTS.includes(variant) ? variant : LOGO_VARIANTS[0];
}

const Logo = ({
  color,
  secondaryColor,
  size,
  variant
}) => {
  const _fileName = getVariant(variant);
  const { path, secondaryPath, viewBox } = require(`./assets/${_fileName}`);

  return (
    <ThemeConsumer>
      {
        theme => (
          <div style={{ display: 'block', lineHeight: 0 }} >
            <svg
              style={{ width: size || '100%' }}
              viewBox={viewBox}
            >
              <path
                d={path}
                fill={color ? getColor(theme, color) : 'currentColor'}
              />
              {
                secondaryPath &&
                <path
                  d={secondaryPath}
                  fill={secondaryColor ? getColor(theme, secondaryColor) : 'currentColor'}
                />
              }
            </svg>
          </div>
        )
      }
    </ThemeConsumer>
  );
};

export default Logo;
