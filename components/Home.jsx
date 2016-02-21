import React, { Component, PropTypes }  from 'react';
import fetch                            from 'cjs-fetch';
import moment                           from 'moment';
import classNames                       from 'classnames';

import StoryList                        from './StoryList.jsx';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        stories: []
      }
    }

    this.fetchData = this.fetchData.bind(this)

  }

  fetchData(json) {
      this.setState({data: json})
  }

  componentDidMount() {

    fetch('http://localhost:9000/')
      .then(function(response) {
        console.log('json fetched')
        return response.json()
      })
      .then(this.fetchData)
      .catch(function(ex) {
        console.error('json parsing failed', ex)
      })

  }

	render() {
		return (
			<div id="home">

				<section>
					<p>Welcome to the Stuff News Sorter</p>
				</section>

				<StoryList stories={this.state.data.stories} />

			</div>
		);
	}
};

export default Home;
