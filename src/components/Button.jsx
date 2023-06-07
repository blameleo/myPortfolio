import React from 'react'

export default function Button({name,style}) {
  return (
    <button className={style}>{name}</button>
  )
}
