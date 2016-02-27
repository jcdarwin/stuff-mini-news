import React, { Component, PropTypes }  from 'react';
import moment                           from 'moment';
import classNames                       from 'classnames';

import Toggle                           from './Toggle.jsx';

class StoryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      opened: false,
      stories: props.stories,
      maxHeight: 0
    };
  }

  toggleOpen() {
    // Determine the appropriate thumbnail image
    var pos,
        posVariant
    pos = this.props.images.findIndex(function(image){
        posVariant = image.variants.findIndex(function(variant){
            return variant.layout == 'Standard Image' && variant.width == "620"
        })
        return posVariant !== -1
    })

    var thumbnail = (pos === -1) ? '': this.props.images[pos].variants[posVariant].src;

    this.setState({
      opened: (this.state.opened ? false : true),
      maxHeight: (this.state.opened ? 0 : '300px'),
      opacity: (this.state.opened ? 0 : 1),
      thumbnail: (this.state.opened ? '' : thumbnail),
    });
  }

  renderToggle() {
    return (
        <div className="card__intro">
            <Toggle
                text={this.state.opened === false ? 'Close' : 'Open'}
                clickHandler={this.toggleOpen.bind(this)}
                icon={this.state.opened === false ? 'angle-up' : 'angle-down'}
                active={true}
                size={'small'}
            />
            <div
                className="card__intro-text"
                style={{
                    maxHeight: this.state.maxHeight,
                    opacity: this.state.opacity,
                }}
            >
                <img className="card__intro-image" src={this.state.thumbnail}></img>
                {this.props.intro}
                <p className="card__intro-more"><a href={this.props.urlHtml}>More</a></p>
            </div>
        </div>
    )
  }

  render() {
    const storyListClass = `storylist__item card ${this.props.view}`;

    return (
      <li id={this.props.id} className={storyListClass}>
        <h3><a className="card__link" href={this.props.urlHtml}>{this.props.title}</a></h3>
        <h5>{moment(this.props.datetime_iso8601).format('hh:mm a MMM Do, YYYY')}</h5>
        {this.props.intro ? this.renderToggle() : ''}
      </li>
    );
  }
};

export default StoryListItem;
