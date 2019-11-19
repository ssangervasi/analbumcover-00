import enUS from 'dictionary-en-us';
import nspell from 'nspell';

let dict = null

const initNSpell = async () => {}
const initDict = async () => {
	if (dict) { return dict }
	let res: any = await new Promise(
		resolve => enUS(
			(err, result) => {
				console.log(result)
				resolve(result)
			})
		)
	dict = res.dic
	return dict
}

export {
	initNSpell
}