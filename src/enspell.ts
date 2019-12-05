import { enUS } from 'dictionary-en-us'
import { nspell } from 'nspell'


const initNSpell = async () => {
	return nspell
}

let dict = null
const initDict = async () => {
	if (dict) { return dict }
	let res: any = await new Promise(
		resolve => enUS(
			(err, result) => {
				console.log(result)
				resolve(result)
			})
	)
	// The dict is memoized, but eslint doesn't recognize the check at the top of this fn.
	/* eslint-disable require-atomic-updates */
	dict = res.dic
	return dict
}

export {
	initNSpell,
	initDict
}