import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
	// take out tours from props
    const { tours, removeTour } = props;
	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{/* map over tours and display UI */}
				{/* read instructions how UI should look */}
                {tours.map((data, ind) => (
                    <Tour 
						key={data.id}
						removeTour={removeTour}
						{...data}
                    />
                ))}
			</div>
		</section>
	)
}

export default Tours
