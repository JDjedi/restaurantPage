import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import NewYork from "./newYork";
import Cheese from "./cheese";
import TheWorks from "./theWorks";
import Carousel from "./carousel";

export default class App extends React.Component {


	render() {
		return (
			<div className=".col-12" id="container-main">
				<h1 id="header">JD's Pizza</h1>
				<div>
					<Carousel className=".col-12"/>
				</div>
				<div className=".col-12" id="menu">
					<div className=".col-3">
						<NewYork />
					</div>
					<div className=".col-3">
						<Cheese />
					</div>
					<div className=".col-3">
						<TheWorks />
					</div>
				</div>
			</div>
		);
	}
}
