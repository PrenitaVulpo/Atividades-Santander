const compareStats = (statProfiles) => {
	const listItem = document.querySelector('.attribute-selector');
	const statToCompare = listItem.value;
	const resultSpan = document.querySelector('.result');

	if (listItem.value) {
		let champion = null;
		let initialValue = 0;

		if (statToCompare === 'hp') {
			resultSpan.textContent = 'Draw!';
		} else {
			Object.entries(statProfiles).forEach((entry) => {
				const [key, value] = entry;
				console.log(key, value);
			});
		}
	}
};

export default compareStats;
