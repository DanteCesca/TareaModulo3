import React from 'react'

const Button = (prop) => {
    const btnText = prop.title
  return (
    <button className="btn btn-outline-success" type="submit">{btnText}</button>
  )
}

export default Button