import React, { Component, PropTypes }  from 'react';
import classNames                       from 'classnames';
import FlipMove                         from 'react-flip-move';

import Toggle                           from './Toggle.jsx';
import StoryListItem                    from './StoryListItem.jsx';


const sortAsc   = (a, b) => a.datetime_iso8601 > b.datetime_iso8601;
const sortDesc  = (a, b) => a.datetime_iso8601 < b.datetime_iso8601;

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      order: 'asc',
      sortingMethod: 'chronological',
      stories: props.stories
    };

    this.toggleSort   = this.toggleSort.bind(this);
  }

  toggleSort() {
    this.setState({
      order: (this.state.order === 'asc' ? 'desc' : 'asc'),
      sortingMethod: 'chronological',
      stories: this.state.stories.sort(
        this.state.order === 'asc' ? sortDesc : sortAsc
      )
    });
  }

  componentDidMount() {
    this.toggleSort();
  }

  renderStories() {
    return this.state.stories.map( (story, i) => {
      return (
        <StoryListItem
          key={story.id}
          view={this.state.view}
          style={{ zIndex: i }}
          {...story}
        />
      );
    });
  }

  render() {
      return (
          <div className={this.state.view}>
              <header>
                  <Toggle
                    clickHandler={this.toggleSort}
                    text={this.state.order === 'asc' ? 'Earliest' : 'Latest'}
                    icon={this.state.order === 'asc' ? 'angle-up' : 'angle-down'}
                    active={this.state.sortingMethod === 'chronological'}
                  />
              </header>
              <ul className="storylist">
                  <FlipMove staggerDurationBy="30" duration={500}>
                      { this.renderStories() }
                  </FlipMove>
              </ul>
          </div>
      );
  }
};

export default StoryList;
