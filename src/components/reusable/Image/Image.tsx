import NextImage, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Image.module.scss';
import { ScaleLoader } from 'react-spinners';
import { useTheme } from 'next-themes';
import palette from 'styles/palette';

type PlaceHolder = 'empty' | 'blur';

interface Props {
	src: string | StaticImageData;
	placeholder?: PlaceHolder;
	[x: string]: any;
}

const Image = (props: Props) => {
	const { theme } = useTheme();
	const placeholder: PlaceHolder = props.placeholder || 'blur';

	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className={styles.root}>
			<span className={styles.spinner}>
				<ScaleLoader
					color={palette[theme === 'light' ? 'light' : 'dark']['light-grey']}
				/>
			</span>
			{/* blur placeholder if it works on the user's browser, else spinner */}
			<NextImage {...props} placeholder={placeholder} />
		</div>
	);
};

export default Image;
