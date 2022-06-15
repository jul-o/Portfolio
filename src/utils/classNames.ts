const classNames = (...classes) => {
	return classes.reduce((acc, v) => acc + ` ${v}`, '');
};

export default classNames;
