import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Props {
	src: StaticImageData | string;
	className?: string;
	width?: number;
	height?: number;
	blur?: boolean;
	alt?: string;
}

const ImageWithSpinner = ({
	src,
	className,
	width,
	height,
	blur = true,
	alt = '',
}: Props) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<Image
				src={src}
				width={width}
				height={height}
				className={className}
				onLoadingComplete={() => setIsLoaded(true)}
				placeholder={blur ? 'blur' : 'empty'}
				alt={alt}
			/>
		</>
	);
};

export default ImageWithSpinner;
