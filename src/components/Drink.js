import React, { useEffect, useState } from "react";
import { IoMdBeer } from "react-icons/io";
import { FiRotateCcw } from "react-icons/fi";

export default function Drink({ reset }) {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);

	return (
		<div>
			<div className="p-5 w-full grid place-content-center">
				<FiRotateCcw className="text-4xl text-white" onClick={reset} />
			</div>
			<div
				className="w-full grid place-content-center"
				style={{
					height: "90vh",
				}}
			>
				<IoMdBeer
					className="text-6xl text-yellow-500 transform duration-1000 transition-all"
					style={{
						transform: `scale(${animate ? 5 : 1})`,
					}}
				/>
			</div>
		</div>
	);
}
