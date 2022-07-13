const generateBoard = (value) => {
	const result = [];
	const drinkingIndex = Math.floor(Math.random() * value);
	for (let i = 0; i < value; i++) {
		if (i === drinkingIndex) {
			result.push(1);
		} else {
			result.push(0);
		}
	}
	return result;
};

export default generateBoard;
