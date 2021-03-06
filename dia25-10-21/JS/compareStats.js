const compareStats = (statProfiles) => {
	const listItem = document.querySelector('.attribute-selector');
	const statToCompare = listItem.value;
	const resultSpan = document.querySelector('.result');
	let champion = null;
	let initialValue = 0;

	if (listItem.value) {
		if (statToCompare === 'hp') {
			resultSpan.textContent = 'Draw!';
		} else {
			Object.entries(statProfiles).forEach((entry) => {
				const [key, value] = entry;

				if (value[statToCompare] > initialValue) {
					champion = key;
					initialValue = value[statToCompare];
				}
			});
		}
	} else {
		resultSpan.textContent = 'please select a valid stat';
	}

	resultSpan.textContent = `The champion is: ${champion}`;
};

export default compareStats;
