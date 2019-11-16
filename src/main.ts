import * as dict from 'dictionary-en-us';

import other from './more/other';

const l = console.log;
const dank = () => l('dank');
const demo = () => l(`
	dict
	${dict}
	other
	${other}
`);

export {
	l,
	dank,
	demo
}