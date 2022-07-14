import NextImage, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Image.module.scss';
import { ScaleLoader } from 'react-spinners';
import { useTheme } from 'next-themes';
import palette from 'styles/palette';

interface Props {
	src: string | StaticImageData;
	[x: string]: any;
}

const Image = (props: Props) => {
	const [loaded, setLoaded] = useState(false);
	const { theme } = useTheme();

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
			<NextImage
				{...props}
				style={{
					opacity: loaded ? 1 : 0,
				}}
				onLoadingComplete={() => {
					setLoaded(true);
				}}
			/>
		</div>
	);
};

export default Image;
