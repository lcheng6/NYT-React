import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Search from './Children/Search';
import Found from './Children/Found';
import Saved from './Children/Saved';

var helpers = require('./utils/helpers');

class Main extends Component {

  constructor (props) {
    super(props);

    this.state = {
      found: [],
      saved: [],
    };

  }

  //nytSearch to search the NYT database for the article.
  nytSearch(searchCriteria) {
    helpers.searchNYT("Surf", "2000", "2001")
      .then(function(data) {
        console.log(data);
        this.setState({"found":data});
      }.bind(this))
  }

  render() {

    return (
      <div>
        <Search onSearchClick={this.nytSearch} />
        <Found />
        <Saved />
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.querySelector('#Main'));