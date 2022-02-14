import React from 'react';
import style from './recipe.module.css';

function Recipe({ title, calories, image, ingredients }) {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ul>
				<h4>Ingredients:</h4>
				{ingredients.map((ingr) => (
					<li>{ingr.text} </li>
				))}
			</ul>
			<h4>Calories: {Math.round(calories)}</h4>
			<img className={style.image} src={image} alt='' />
		</div>
	);
}

export default Recipe;
