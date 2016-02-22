import React, { Component, PropTypes }  from 'react';
import Dropdown                         from 'react-dropdown';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.selectFilter = this.selectFilter.bind(this)

  }

  selectFilter(selected) {
    this.setState({
      preset: null,
      filterPreset: selected,
      filterValue:  selected.value
    });
  }

  renderFilter() {
    return (
      <div className="col col-2 input-area">
        <div className="input">
          <Dropdown
            name="filter"
            options={[
              { value: 'stories',  label: 'All stories' },
              { value: 'viewed',   label: 'Most viewed' },
              { value: 'shared',   label: 'Most shared' },
            ]}
            value={this.props.filterPreset}
            onChange={this.selectFilter}
          />
          <div className="dropdown-spacer" style={{height: 40}} />
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="settings card">
        <h2>Settings</h2>
        { this.renderFilter() }
      </div>
    )
  }

}
