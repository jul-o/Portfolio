import About from 'components/About';
import Contact from 'components/Contact';
import DarkModeButton from 'components/DarkModeButton';
import Experiences from 'components/Experiences';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import UpButton from 'components/UpButton';

const Page = () => {
	return (
		<>
			<div id="background" />
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
