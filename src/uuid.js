import uuid from "uuid";


/**
	Generates a UUID string with a custom separator instead of the normal '-'.

	@param {string} [sep="-"] - the UUID segment separator.
*/
export default function uuid(sep) {
	if (sep) {
		return uuid()..replace(/-/g, sep);
	} else {
		return uuid();
	}
}
