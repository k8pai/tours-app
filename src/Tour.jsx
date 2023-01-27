import React, { useState } from 'react'

const Tour = (props) => {
	const { id, image, info, price, name, removeTour } = props
    const [readMore, setReadMore] = useState(true);

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				{/* make modifications here */}
                {readMore? 
                    <p>
                        {info.substring(0,200)}
                        <button onClick={() => setReadMore(false)}>read more</button>
                    </p> :
                    <p>
                        {info}
                        <button onClick={() => setReadMore(true)}>read less</button>
                    </p>
                }
				<button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
			</footer>
		</article>
	)
}

export default Tour
