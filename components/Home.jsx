import React, { Component, PropTypes }  from 'react';
import fetch                            from 'cjs-fetch';
import classNames                       from 'classnames';

import config                           from '../config.json';
import Tabs                             from './Simpletabs.jsx';
import StoryList                        from './StoryList.jsx';

var url;
if (process.env.NODE_ENV === 'production') {
	url = config.production.url;
} else {
	url = config.development.url;
}

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

  }

  fetchData(json) {
      this.setState({data: json})
  }

  componentDidMount() {

    fetch(url)
      .then(function(response) {
        return response.json()
      })
      .then(this.fetchData.bind(this))
      .catch(function(ex) {
        console.error('json parsing failed', ex)
      })

  }

  render() {
    return (
      <div id="home">

        <Tabs>
          <Tabs.Panel title='Recent'>
            <StoryList
                stories={this.state.data.stories}
            />
          </Tabs.Panel>
          <Tabs.Panel title='Viewed'>
            <StoryList
                stories={this.state.data.popular.shared}
            />
          </Tabs.Panel>
          <Tabs.Panel title='Shared'>
            <StoryList
                stories={this.state.data.popular.viewed}
            />
          </Tabs.Panel>
        </Tabs>

      </div>
    );
  }
};

export default Home;
