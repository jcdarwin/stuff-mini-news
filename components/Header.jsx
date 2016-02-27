import React, { Component, PropTypes }  from 'react';
import ReactDOM, { render }             from 'react-dom';
import { Link }                         from 'react-router';
import classNames                       from 'classnames';
import FlipMove                         from 'react-flip-move';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <h1>Stuff Mini News</h1>
                <h2>The latest headlines, delivered quickly</h2>
            </header>
        );
    }
};

export default Header;
