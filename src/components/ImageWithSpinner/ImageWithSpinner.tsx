import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { BounceLoader } from 'react-spinners';

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
			{/* TODO: homemade spinner */}
			{!isLoaded && <BounceLoader color="#e07a00" />}
			<Image
				src={src}
				width={width}
				height={height}
				className={className}
				onLoadingComplete={() => setIsLoaded(true)}
				placeholder="empty"
			/>
		</>
	);
};

export default ImageWithSpinner;
