import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Item from "./ItemDetail";

// import a specific part of module with {}
// rename variable so you don't have to type as much
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
		<div className="App">
			<Nav />

			{/* Switch only matches one route instead of possibly displaying home page (/) + other route (/about, etc.) */}
			<Switch>
				<Route path="/" exact component={Home} />  {/* "exact" means only matches exact route */}
				<Route path="/about" component={About} />
				<Route path="/shop" exact component={Shop} />
				<Route path="/shop/:id" component={Item} />
			</Switch>

		</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);

export default App;
