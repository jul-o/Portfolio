import React, { useEffect, useState } from 'react';
import Contact from 'components/Contact';
import Experiences from 'components/Experiences';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import UpButton from 'components/UpButton';

const Page = () => {
	return (
		<>
			<Navbar />
			<div id="root">
				<Home />
				<Experiences />
				<Contact />
			</div>
			<UpButton />
		</>
	);
};

export default Page;
