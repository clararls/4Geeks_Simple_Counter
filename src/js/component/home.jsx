import React, { useState, useEffect } from "react";

//create your first component
const SecondsCounter = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="container d-flex justify-content-center">
			<div className="icon">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">0</div>
			<div className="five">0</div>
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">{seconds}</div>
		</div>
	);
};

export default SecondsCounter;
