import React from 'react'

function Title({ text, classes }) {
  return (
    <h1 className={!classes ? 'title text-center' : classes }>{!text ? "Title": text}</h1>
  )
}

export default Title