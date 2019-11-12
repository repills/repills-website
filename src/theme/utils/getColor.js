import get from 'lodash.get'

export default function getColorPalette (
  theme,
  colorPath
) {
  const color = get(theme.palettes, colorPath)

  if (!color) {
    throw new Error(`The color path ${colorPath} doesn't exist`)
  }

  return color
}
