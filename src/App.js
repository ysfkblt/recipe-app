import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
	const APP_ID = '5e158d7c';
	const APP_KEY = '5015b6c1e1952e2042095330e6e87b07';

	const [rcps, setrcps] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		gtrcps();
	}, [query]);

	const gtrcps = async () => {
		const rspns = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await rspns.json();
		setrcps(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	function getSearch(e) {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	}

	return (
		<div className='App'>
			<form onSubmit={getSearch} className='search-form'>
				<input
					className='search-bar'
					type='text'
					value={search}
					onChange={updateSearch}
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='recipes'>
				{rcps.map((rcp) => (
					<Recipe
						key={rcp.recipe.label}
						title={rcp.recipe.label}
						calories={rcp.recipe.calories}
						image={rcp.recipe.image}
						ingredients={rcp.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
