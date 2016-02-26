import React, { Component, PropTypes }  from 'react';
import fetch                            from 'cjs-fetch';
import moment                           from 'moment';
import classNames                       from 'classnames';
import Tabs                             from 'react-simpletabs';

import '../node_modules/react-simpletabs/dist/react-simpletabs.min.css';

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

  }

  fetchData(json) {
      this.setState({data: json})
  }

  componentDidMount() {

    fetch('http://localhost:9000/?limit=10')
      .then(function(response) {
        console.log('json fetched')
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
