import React from 'react';

class TopicsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }
  render() {
    return (
      <div className="topics search">
        <form className="topics search">
          <input
            className="topics search"
            placeholder="Search a Topic"
            value={this.state.searchTerm}
          />
          <button type="button" >Search</button>
        </form>
      </div>
    );
  }
}

export default TopicsSearch;
