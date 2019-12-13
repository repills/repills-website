import React from 'react'
import Icon from './Icon'

const IconType = ({
  ...rest
}) => (
  <Icon
    {...rest}
    viewBoxSize={100}
  />
)

export default IconType;
