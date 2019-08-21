import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const CLASS_NAMES = {
  white: {
    buttonClassName:
      'border-2 bg-white text-breadman-black border-breadman-red rounded-full px-4 py-2 serif font-medium',
  },
  red: {
    buttonClassName:
      'border-2 bg-breadman-red text-breadman-black border-white rounded-full px-4 py-2 serif font-medium',
  },
  black: {
    buttonClassName:
      'border-2 bg-breadman-black-light text-breadman-red border-white rounded-full px-4 py-2 serif font-medium',
  },
}

export default function KnowMore({ variant, to }) {
  const { buttonClassName } = CLASS_NAMES[variant]
  return (
    <Link className={buttonClassName} to={to}>
      Saber más
    </Link>
  )
}

KnowMore.propTypes = {
  variant: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
