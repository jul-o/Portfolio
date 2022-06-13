import React, { useState } from 'react';
import Contact from 'components/elements/Contact';
import Experiences from 'components/elements/Experiences';
import Home from 'components/elements/Home';
import Navbar from 'components/elements/Navbar';

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
