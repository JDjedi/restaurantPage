import React from "react";

export default class CheesePizza extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true
		};
	}

	showPizzaDetails(x) {
		x.preventDefault();
		const { isHidden } = this.state;
		this.setState({
			isHidden: !isHidden
		});
	}

	render() {
		return (
			<div id="the-plain-jane-pizza">
				<img src="./images/work.jpg" />
				<p id="pizza-name">The Plain Jane Cheese</p>
				<button id="pizza-details" onClick={this.showPizzaDetails.bind(this)}>
					Show Details
				</button>
				{!this.state.isHidden && <PizzaDetails />}
			</div>
		);
	}
}

const PizzaDetails = () => (
	<div id="pizza-details">Cras aliquet urna ut sapien tincidunt!</div>
);
