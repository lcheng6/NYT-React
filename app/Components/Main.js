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
      //Found articles
      search: {
        search_topic: "Surfboard",
        start_year: "2000",
        end_year: "2001"
      },
      //Found articles
      found: [],
      //Saved articles
      saved: [],
    };

  }

  //nytSearch to search the NYT database for the article.
  nytSearch(searchTerm) {
    helpers.searchNYT(searchTerm.search_topic, searchTerm.start_year, searchTerm.end_year)
      .then(function(data) {
        console.log(data);
        this.setState({"found": data});

      }.bind(this)
      );
  }

  render() {
    // const nytSearch = _.debounce( (term) => {this.nytSearch(term)}, 300);
    const nytSearch =  (term) => {this.nytSearch(term)};
    return (
      <div>
        <Search searchTerms = {this.state.search}
                onSearchClick={ nytSearch } />
        <Found />
        <Saved />
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.querySelector('#Main'));