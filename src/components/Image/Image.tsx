import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Props {
	src: StaticImageData;
	className?: string;
	width?: number;
	height?: number;
}

const ImageWithSpinner = ({
	src,
	className,
	width = 256,
	height = 256,
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
				placeholder="blur"
			/>
		</>
	);
};

export default ImageWithSpinner;
