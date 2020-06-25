import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom";

// state
// the state holds the information that we're getting from the API

// useEffect
// the useEffect basically runs the fetch call when our component mounts

function Shop() {

	useEffect(() => {
		fetchItem();
	}, []); // "[]" means this is only gonna run when the component mounts

	const [items, setItems] = useState([]);

	const fetchItem = async () => {
		const data = await fetch("http://dummy.restapiexample.com/api/v1/employees");

		const items = await data.json();
		console.log(items.data);
		setItems(items.data);
	}

	return (
		<div>
			<h1>Shop Page</h1>
			{items.map(item => (
				<div key={item.id}>
					<h2 >{item.employee_name}</h2>

					Link to <Link to={`/shop/${item.id}`}>{item.employee_name}</Link>
				</div>
			))}
		</div>
	);
}

export default Shop;
