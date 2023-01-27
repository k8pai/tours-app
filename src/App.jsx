import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);

	function removeTour(tourId) {
		setTours(values => values.filter(data => data.id !== tourId));
	}

	async function fetchTours() {
		// write code to fetch tours here
		setLoading(true)
		let response = await fetch(url);
		let data = await response.json();
		setTours(data);
		setLoading(false)
	}

	useEffect(() => {
		fetchTours()
	}, [])

	if(loading){
		return <main><Loading /></main>
	}

	return (
		<main>
			{/* send tours here */}
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	)
}

export default App;
