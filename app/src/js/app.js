import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style/index.scss';

import A from './components/A';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>HI WORLD</h1>
				<A />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
