import React, { useEffect, useState } from 'react';
import Contact from 'components/Contact';
import Experiences from 'components/Experiences';
import About from 'components/About';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import UpButton from 'components/UpButton';
import DarkModeButton from 'components/DarkModeButton';

const Page = () => {
	return (
		<>
			<div id="background">
				<div id="background-1" />
			</div>

			<Navbar />
			<div id="root">
				<Home />
				<About />
				<Experiences />
				<Contact />
			</div>
			<DarkModeButton />
			<UpButton />
		</>
	);
};

export default Page;
