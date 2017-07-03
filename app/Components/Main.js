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
    helpers.getArticles()
      .then(function(savedArticles) {
        var newState = this.state;
        newState.saved = savedArticles;
        this.setState(newState);
      })
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
  onSearchTermChange(searchTerm) {
    console.log('onSearchTermChange');
    console.log(searchTerm);
    var newState = this.state;
    newState.search = searchTerm;
    console.log('newState: ' + newState);
    this.setState(newState);
  }

  //This function will be triggered by the Found Child component
  //The onSavedArticle function will call ajax to save a function, and to reload the Saved section.
  onSaveArticle(article) {
    console.log('onSaving')
  }


  render() {
    // const nytSearch = _.debounce( (term) => {this.nytSearch(term)}, 300);
    const nytSearch =  (term) => {this.nytSearch(term)};
    const onSearchTermChange = (term) => { this.onSearchTermChange(term)};
    return (
      <div>
        <Search searchTerms = {this.state.search}
                onSearchClick={ nytSearch }
                onSearchTermChange = { onSearchTermChange }
        />
        <Found foundArticles= {this.state.found}/>
        <Saved />
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.querySelector('#Main'));