import React, {useState, useEffect} from 'react';
import './App.css';


// state
// the state holds the information that we're getting from the API

// useEffect
// the useEffect basically runs the fetch call when our component mounts

function Item() {
	useEffect(() => {
		fetchItem();
	}, []); // "[]" means this is only gonna run when the component mounts

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const data = await fetch("http://dummy.restapiexample.com/api/v1/employees");


	}

	return (
		<div>
			<h1>Item Detail Page</h1>

		</div>
	);
}

export default Item;
