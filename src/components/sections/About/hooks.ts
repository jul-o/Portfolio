import React from 'react';
import { useState } from 'react';
import useViewportObserver from 'utils/hooks/useViewportObserver';

const useLogic: Function = (): {
	paragliding: boolean;
	climbing: boolean;
	windsurfing: boolean;
	openParagliding: Function;
	openClimbing: Function;
	openWindsurfing: Function;
	closeModal: Function;
	rootRef: React.RefObject<HTMLDivElement>;
	isInViewport: boolean;
} => {
	const [paragliding, setParagliding] = useState(false);
	const [climbing, setClimbing] = useState(false);
	const [windsurfing, setWindsurfing] = useState(false);

	const openParagliding = () => {
		setClimbing(false);
		setWindsurfing(false);
		setParagliding(true);
	};

	const openClimbing = () => {
		setParagliding(false);
		setWindsurfing(false);
		setClimbing(true);
	};

	const openWindsurfing = () => {
		setParagliding(false);
		setClimbing(false);
		setWindsurfing(true);
	};

	const closeModal = () => {
		setParagliding(false);
		setClimbing(false);
		setWindsurfing(false);
	};

	const rootRef = React.createRef<HTMLDivElement>();
	const [isInViewport, setIsInViewport] = useState(false);
	useViewportObserver(setIsInViewport, rootRef);

	return {
		paragliding,
		climbing,
		windsurfing,
		openParagliding,
		openClimbing,
		openWindsurfing,
		closeModal,
		rootRef,
		isInViewport,
	};
};

export default useLogic;
