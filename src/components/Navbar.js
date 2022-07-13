import React, { useState } from "react";

export default function Navbar({ changeBoard }) {
	const [boardOptionValue, setBoardOptionValue] = useState(
		window.localStorage.getItem("boardOption") || "16"
	);
	const boardOptions = [
		{
			value: "9",
			text: "3x3",
		},
		{
			value: "16",
			text: "4x4",
		},
	];
	const handleChangeBoard = (value) => {
		changeBoard(value);
		setBoardOptionValue(value);
		window.localStorage.setItem("boardOption", value.toString());
	};

	return (
		<div className="text-white w-full flex justify-between p-5 gap-3">
			{boardOptions.map(({ value, text }, index) => {
				const currentOption = boardOptionValue === value;

				return (
					<button
						key={index}
						disabled={currentOption}
						className="bg-blue-500 w-full py-2 rounded-md disabled:bg-blue-900"
						onClick={() => handleChangeBoard(value)}
					>
						{text}
					</button>
				);
			})}
		</div>
	);
}
