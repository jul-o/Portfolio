import NextImage, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Image.module.scss';
import { ScaleLoader } from 'react-spinners';
import { useTheme } from 'next-themes';
import palette from 'styles/palette';
import classNames from 'utils/classNames';

type PlaceHolder = 'empty' | 'blur';

interface Props {
	src: string | StaticImageData;
	placeholder?: PlaceHolder;
	displaySpinner?: boolean;
	rootClassName?: string
	[x: string]: any;
}

const Image = ({
	src,
	placeholder = 'blur',
	displaySpinner = true,
	rootClassName = null,
	...additionalProps
}: Props) => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className={classNames(styles.root, rootClassName)}>
			{displaySpinner && (
				<span className={styles.spinner}>
					<ScaleLoader
						color={palette[theme === 'light' ? 'light' : 'dark']['light-grey']}
					/>
				</span>
			)}
			{/* blur placeholder if it works on the user's browser, else spinner */}
			<NextImage src={src} {...additionalProps} placeholder={placeholder} />
		</div>
	);
};

export default Image;
