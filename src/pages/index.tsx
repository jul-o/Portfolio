import React, { useState } from 'react';
import Contact from 'components/Contact';
import Experiences from 'components/Experiences';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Head from 'next/head';

const Page = () => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Navbar />
			<div id="root">
				<Home />
				<Experiences />
				<Contact />
			</div>
		</>
	);
};

export default Page;
