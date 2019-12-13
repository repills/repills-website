import React from 'react'

export { default as ICON_PATHS } from './paths'

export const ICON_DIRECTIONS = {
  TOP: 0,
  RIGHT: 90,
  BOTTOM: 180,
  LEFT: -90,
}

export const DEFAULT_COLOR = 'currentColor'
export const DEFAULT_SIZE = 24
export const DEFAULT_VIEWBOXSIZE = 24

export const Icon = ({
  path,
  color,
  size,
  direction,
  viewBoxSize,
}) => {
  const viewbox = viewBoxSize || DEFAULT_VIEWBOXSIZE
  return (
    <svg
      width={size || DEFAULT_SIZE}
      height={size || DEFAULT_SIZE}
      viewBox={`0 0 ${viewbox} ${viewbox}`}
    >
      <g transform={`rotate(${direction || ICON_DIRECTIONS.TOP}, ${viewbox / 2}, ${viewbox / 2})`}>
        <path
          fill={color || DEFAULT_COLOR}
          d={path}
        />
      </g>
    </svg>
  )
}

export default Icon;
