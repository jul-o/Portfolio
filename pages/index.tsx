import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
// import { Navbar } from 'react-bulma-components'

const Page = () => {
	return (
		<div>
			<Navbar />
			<div id="root">
				<Home />
				<Experiences />
				<Contact />
			</div>
		</div>
	);
};

export default Page;
