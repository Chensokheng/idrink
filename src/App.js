import React, { useEffect, useRef, useState } from "react";

import Board from "./components/Board";
import Drink from "./components/Drink";

export default function App() {
	const [isDrink, setDrink] = useState(false);
	const audioRef = useRef();
	const reset = () => {
		setDrink(false);
	};

	const handleDrink = () => {
		setDrink(true);
		audioRef.current.play();
	};

	useEffect(() => {
		audioRef.current.volume = 0.3;
	}, []);

	return (
		<div className=" bg-slate-800 min-h-screen w-full flex justify-center items-center">
			<div className="w-full">
				{isDrink ? (
					<Drink reset={reset} />
				) : (
					<div>
						<Board handleDrink={handleDrink} />
					</div>
				)}
			</div>
			<audio src="/sound.mp3" ref={audioRef} />
		</div>
	);
}
