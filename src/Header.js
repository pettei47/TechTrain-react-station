// DO NOT DELETE
import React from 'react'

const Header = (props) => {
	console.log(props.cssClass)
	return (
		<div className={props.cssClass}>
			<header>
				<h1>DogApp</h1>
			</header>
		</div>
	)
}

export { Header }
