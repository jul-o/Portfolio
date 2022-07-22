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
			<a href="/files/resume.pdf" className={styles.link} target="_blank">
				<span>
					<HiOutlineDocument />
				</span>
			</a>
			<a
				href="https://github.com/jul-o"
				className={styles.link}
				target="_blank">
				<span>
					<AiOutlineGithub />
				</span>
			</a>
			<a
				href="https://www.linkedin.com/in/jules-sang-bb632913b"
				className={styles.link}
				target="_blank">
				<span>
					<FaLinkedin />
				</span>
			</a>
		</div>
	);
};

export default Links;
