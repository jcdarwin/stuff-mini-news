import React, { Component, PropTypes }  from 'react';
import moment                           from 'moment';
import classNames                       from 'classnames';


class StoryListItem extends Component {
  render() {
    const storyListClass = `storylist__item card ${this.props.view}`;

    return (
      <li id={this.props.id} className={storyListClass}>
        <h3><a className="card__link" href={this.props.url}>{this.props.title}</a></h3>
        <h5>{moment(this.props.datetime_iso8601).format('hh:mm a MMM Do, YYYY')}</h5>
        <h5>{this.props.datetime_iso8601}</h5>
        <h5>{this.props.datetime_unix}</h5>
      </li>
    );
  }
};

export default StoryListItem;
