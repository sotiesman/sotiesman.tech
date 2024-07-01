'use client'

import { useEffect } from 'react'

const Hello = () => {
  useEffect(() => {
    console.log(`Sup Bro. Is there something interesting here? Look at the sky!`)
  }, [])

  return null
}

export default Hello
