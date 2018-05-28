import React from "react";

export default class WorkPizza extends React.Component {
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
			<div id="the-works">
				<img src="./images/cheese.jpg" onClick={this.showPizzaDetails.bind(this)}/>
				<p id="detail-info">Click for more info</p>
				<div id="pizza-details">
					{!this.state.isHidden && <PizzaDetails />}
				</div>
			</div>
		);
	}
}

const PizzaDetails = () => (
	<div className="dd-wrapper">
	  <div className="dd-header">
	    <div id="dd-header-title">The Works</div>
	  </div>
	  <ul className="dd-list">
	    <li className="dd-list-item">Cras aliquet urna ut sapien tincidunt!</li>
	    <li className="dd-list-item">Urna ut sapien tincidunt!</li>
	    <li className="dd-list-item">Aliquet urna ut sapien tincidunt!</li>
	  </ul>
	</div>
);

