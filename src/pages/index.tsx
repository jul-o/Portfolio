import About from 'components/About';
import Contact from 'components/Contact';
import Links from 'components/Contact/Links';
import DarkModeButton from 'components/DarkModeButton';
import Experiences from 'components/Experiences';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import UpButton from 'components/UpButton';
import { motion, TargetAndTransition } from 'framer-motion';

const Page = () => {
	const backgroundAnimation: TargetAndTransition = {
		scale: ['0%, 0%', '80%, 80%', '100%, 100%'],
		opacity: ['0', '1', '0.8'],
		transition: {
			ease: 'easeInOut',
			duration: 2,
			delay: 2,
			times: [0, 0.8, 1],
		},
	};
	return (
		<>
			<div id="root">
				<motion.div
					animate={backgroundAnimation}
					initial={{ opacity: 0 }}
					id="background"
				/>

				<Navbar />
				<Home className="section" />
				<About className="section" />
				<Experiences className="section" />
				<Contact className="section" />
			</div>
			<Links />
			<DarkModeButton />
			<UpButton />
		</>
	);
};

export default Page;
