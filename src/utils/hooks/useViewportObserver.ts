import { type } from 'os';
import { useEffect } from 'react';

/**
 *
 * @param setIsInViewport updater for the boolean that tells if the element is in the viewport
 * @param rootRef reference to the element that is being observed
 */
const useViewportObserver = (
	setIsInViewport: React.Dispatch<React.SetStateAction<boolean>>,
	rootRef: React.RefObject<Element>,
	options?: { root?: Element; rootMargin?: string; treshold?: number }
) => {
	const { root, rootMargin, treshold } = options || {};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInViewport(entry.isIntersecting);
				if (entry.isIntersecting) {
					// Only trigger the observer once
					// observer.disconnect();
				}
			},
			{
				root: root || null,
				rootMargin: rootMargin || '-40%',
				threshold: treshold ? treshold : 0,
			}
		);

		if (rootRef.current !== null) {
			observer.observe(rootRef.current);
		}
	}, []);
};

export default useViewportObserver;
