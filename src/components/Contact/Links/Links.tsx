import { HiOutlineDocument } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import classNames from 'utils/classNames';
import styles from './Links.module.scss';

interface Props {
	className?: string;
}

const Links = ({ className }: Props) => {
	return (
		<div className={classNames(className, styles.root)}>
			<a href="/files/resume.pdf" target="_blank">
				<button>
					<HiOutlineDocument />
				</button>
			</a>
			<button>
				<AiOutlineGithub />
			</button>
			<button>
				<FaLinkedin />
			</button>
		</div>
	);
};

export default Links;
