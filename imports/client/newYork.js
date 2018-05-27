import React from 'react';

export default class NewYorkPizza extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isHidden: true,
		};
	}

	showPizzaDetails(x) {
		x.preventDefault();
		const { isHidden } = this.state;
		this.setState({
			isHidden: !isHidden,
		});
	}

	render() {
		return (
			<div id="the-new-York">
				<img src='./images/newYork.jpg' />
				<p id="pizza-name">The New York Style 5 Cheese and Pepperoni</p>
				<button onClick={this.showPizzaDetails.bind(this)}>
					Show Details
				</button>
				{!this.state.isHidden && <PizzaDetails />}
			</div>
		)
	}
}

const PizzaDetails = () => (
	<div id="pizza-details">
		Cras aliquet urna ut sapien tincidunt!
	</div>
)

