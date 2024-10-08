import React from 'react'

function Title({ text, classes }) {
  return (
    <h1 className={!classes ? 'title ' : classes}>{!text ? "Title" : text}</h1>
  )
}

export default Title