import React, { useEffect, useState } from "react";
import { IoMdBeer } from "react-icons/io";
import generateBoard from "../utils/generateBoard";
import Navbar from "./Navbar";

export default function Board({ handleDrink }) {
	const [board, setBoard] = useState([]);
	const [boardStyle, setBoardStyle] = useState("");

	const handleSelect = (index, value) => {
		if (value === 0) {
			const updateBoard = [...board];
			updateBoard[index] = -1;
			setBoard(updateBoard);
		} else if (value === 1) {
			handleDrink();
		}
	};
	const changeBoard = (value) => {
		updateBoardStyle(value);
		setBoard(generateBoard(value));
	};
	useEffect(() => {
		const boardOption = window.localStorage.getItem("boardOption");
		updateBoardStyle(boardOption);
		setBoard(generateBoard(boardOption || 16));
	}, []);

	const updateBoardStyle = (boardOption) => {
		if (boardOption === "9") {
			setBoardStyle("grid-cols-3");
		} else if (boardOption === "16") {
			setBoardStyle("grid-cols-4");
		} else {
			setBoardStyle("grid-cols-4");
		}
	};

	return (
		<>
			<Navbar changeBoard={changeBoard} />
			<div className={`p-5 grid ${boardStyle} gap-2 sm:h-screen`}>
				{board.map((value, index) => {
					return (
						<div
							className="w-full h-36 flex justify-center items-center"
							key={index}
							onClick={() => handleSelect(index, value)}
						>
							{value >= 0 && <IoMdBeer className="text-6xl text-yellow-500" />}
						</div>
					);
				})}
			</div>
		</>
	);
}
