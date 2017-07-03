import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import helpers from '../utils/helpers';

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      search_topic: '',
      start_year: '',
      end_year: ''
    };
  }

  changedSearchCriteria(event) {
    console.log(event.target.id + ": " + event.target.value);
    let tid = event.target.id;
    let tval = event.target.value;

    this.setState( {tid : tval });
  }

  searchNYT(event) {
    event.preventDefault();
    console.log("Search NYT Now")

  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 id="testing">Search</h2>
                <span id="just-added"></span>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Topic</label>
                    <input type="text" className="form-control" id="search_topic" onChange={event => this.changedSearchCriteria(event)} />
                  </div>
                  <div className="form-group">
                    <label>Start Year</label>
                    <input type="text" className="form-control" id="start_year" onChange={event => this.changedSearchCriteria(event)} />
                  </div>
                  <div className="form-group">
                    <label>End Year</label>
                    <input type="text" className="form-control" id="end_year" onChange={event => this.changedSearchCriteria(event)} />
                  </div>
                  <a href="" className="btn btn-primary" onClick={ event => this.searchNYT(event) }>Submit</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Search;