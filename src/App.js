import React, { useState, useEffect } from 'react';
import GifList from './components/GifsList';
import { Link, Route } from 'wouter';

function App() {
	const [gifs, setGifs] = useState([]);

	return (
		<div className="App">
			<section className='app-content'>
				<h2>Giphy Finder</h2>
				<Link to='/gif/rick'>Gifs de Rick</Link><br />
				<Link to='/gif/morty'>Gifs de Morty</Link>
				<Route component={GifList} path="/gif/:keyword"/>
			</section>
		</div>
	);
}

export default App;
