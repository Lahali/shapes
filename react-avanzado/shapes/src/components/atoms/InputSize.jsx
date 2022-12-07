import React from 'react'
import PropTypes from 'prop-types'
import dimensions from '../styles/dimensions'

export default function InputSize({
  inputWidth = dimensions.xxxl,
  handleSize,
  // valueSize,
}) {
  return (
    <input
      style={{ width: inputWidth }}
      type="number"
      // value={valueSize}
      onChange={handleSize}
    />
  )
}

InputSize.propTypes = {
  inputWidth: PropTypes.string,
  handleSize: PropTypes.func,
  // valueSize: PropTypes.number,
}
