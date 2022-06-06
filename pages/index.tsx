import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Experiences from '../components/Experiences'
import Home from '../components/Home'
import Navbar from '../components/Navbar';
// import { Navbar } from 'react-bulma-components'

const Page = () => {
  return (
    <div className="dark">
      <Navbar />
      {/* <Home /> */}
      <Experiences />
    </div>
  )
}

export default Page;