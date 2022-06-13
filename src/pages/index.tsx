import React, { useState } from 'react';
import Contact from 'components/sections/Contact';
import Experiences from 'components/sections/Experiences';
import Home from 'components/sections/Home';
import Navbar from 'components/Navbar';

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
