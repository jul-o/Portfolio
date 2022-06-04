import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Blog from './blog'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [pageNumber, setPageNumber] = useState(0)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(pageNumber)
    window.location.href = `/blog/article/${pageNumber}`
  }
  return (
    <div>
      <p>Hell Next Wolrd!</p>
      <a href="/blog">Go to blog</a>
      {/* Label and text input for "Page number" */}
      <form>
        <label htmlFor="page-number">Article number</label>
        <input type="number" id="page-number" value={pageNumber} onChange={(e: React.FormEvent<HTMLInputElement>) => { setPageNumber(parseInt(e.currentTarget.value)) }} />
        {/* Submit button */}
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}



export default Home
