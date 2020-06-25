import React from 'react';
import './App.css';

// state
// the state holds the information that we're getting from the API

// useEffect
// the useEffect basically runs the fetch call when our component mounts

function Item(match) {


	return (
		<div>
			<h1>Item Detail Page {match.match.params.id}</h1>
		</div>
	);
}

export default Item;