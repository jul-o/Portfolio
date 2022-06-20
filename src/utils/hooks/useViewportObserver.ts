import { useEffect } from 'react';

/**
 *
 * @param setIsInViewport updater for the boolean that tells if the element is in the viewport
 * @param rootRef reference to the element that is being observed
 */
const useViewportObserver = (
	setIsInViewport: React.Dispatch<React.SetStateAction<boolean>>,
	rootRef: React.RefObject<Element>
) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInViewport(entry.isIntersecting);
				if (entry.isIntersecting) {
					observer.disconnect();
				}
			},
			{
				root: null,
				rootMargin: '20%',
				threshold: 0.8,
			}
		);

		observer.observe(rootRef.current);
	}, []);
};

export default useViewportObserver;