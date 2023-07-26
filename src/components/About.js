import React from 'react'
import { Separator } from './Separator'

export const About = ({ title, children, color, modal }) => {
  const my = modal ? "my-1" : "my-5";
  const align = modal ? "start" : "center"
  return (
    <div className={`container ${my}`}>
      <h2 className={`text-center ${my}`}>{title}</h2>
      <Separator color={color} />
      <div className={`d-flex flex-column align-items-${align} justify-content-center container `} >{children}</div>
    </div>
  )
}
