import React, { Component, PropTypes }  from 'react';
import fetch                            from 'cjs-fetch';
import moment                           from 'moment';
import classNames                       from 'classnames';

import Settings                         from './Settings.jsx';
import StoryList                        from './StoryList.jsx';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        stories: [],
        popular: {
          shared: [],
          viewed: []
        }
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

{/*
				<Settings
						filterPreset={'stories'}
				/>
*/}

				<StoryList
						stories={this.state.data.stories}
						shared={this.state.data.popular.shared}
						viewed={this.state.data.popular.viewed}
				/>

			</div>
		);
	}
};

export default Home;
