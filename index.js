import React, { Component, PropTypes }      from 'react';
import ReactDOM, { render }                 from 'react-dom';
import classNames                           from 'classnames';
import { Router, Route, Link, IndexRoute }  from 'react-router';

import Header     from './components/Header.jsx';
import Home       from './components/Home.jsx';

require('./scss/main.scss');


class App extends Component {
	currentPath() { return this.props.location.pathname.replace(/^\//, '') }

	renderHeader() {
		return <Header path={this.currentPath()} />
	}
	render() {
		return (
			<div className="app">
				{ this.renderHeader() }
        <section id="main-content">
          { this.props.children }
        </section>
			</div>
		);
	}
};

render((
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
), document.getElementById('render-target'))
