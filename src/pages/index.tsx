import React, { useState } from 'react';
import Contact from 'components/Contact';
import Experiences from 'components/Experiences';
import Home from 'components/Home';
import Navbar from 'components/Navbar';

const Page = () => {
	return (
		<>
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
