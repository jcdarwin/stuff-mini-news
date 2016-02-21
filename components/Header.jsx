import React, { Component, PropTypes }  from 'react';
import ReactDOM, { render }             from 'react-dom';
import { Link }                         from 'react-router';
import classNames                       from 'classnames';

import FlipMove from 'react-flip-move';

class Header extends Component {
	render() {
		return (
			<header id="header">
				<Link to="/" id="logo">
					<h2>Stuff News Sorter</h2>
				</Link>
			</header>
		);
	}
};

export default Header;
