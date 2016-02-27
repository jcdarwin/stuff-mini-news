import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';

const Toggle = ({clickHandler, text, icon, active, size}) => {
    const buttonClass = classNames({
        'button-toggle': true,
        'no-icon': !icon,
        active,
        'button-toggle__icon--small': size=='small',
        'button-toggle__icon--large': size=='large',
    });
    const iconClass = `button-toggle__icon button-toggle__icon--${icon}`;

    return (
        <button className={buttonClass} onClick={clickHandler} title={text}>
            <i className={iconClass} />
        </button>
    );
};

export default Toggle;
