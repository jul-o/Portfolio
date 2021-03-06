/**
 *
 * @param classes classes to be added to the className
 * @returns string containing the classes separated by spaces
 */
const classNames = (...classes) => {
	const filteredClasses = classes.filter((v) => {
		return v !== undefined && v !== null && v !== '';
	});

	return filteredClasses.reduce((acc, v) => acc + ` ${v}`, '');
};

export default classNames;
