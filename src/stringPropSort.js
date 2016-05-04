

export default function stringPropSort(prop) {
	return function(a, b) {
		const aProp = a[prop];
		const bProp = b[prop];

		if (aProp > bProp) { return 1; }

		return aProp == bProp ?0 :-1;
	}
}
