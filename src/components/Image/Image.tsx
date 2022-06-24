import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Props {
	src: StaticImageData;
	className?: string;
	width?: number;
	height?: number;
	blur?: boolean;
}

const ImageWithSpinner = ({
	src,
	className,
	width,
	height,
	blur = false,
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
			/>
		</>
	);
};

export default ImageWithSpinner;
