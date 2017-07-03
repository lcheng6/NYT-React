import React, { Component } from 'react';

class Saved extends Component {
  constructor (props) {
    super(props);

    this.state = {saved:[
      {
        _id: "mockdata",
        url: "test",
        title: "test",
        pub_date: "10/20/96"
      },
      {
        _id: "mockdata",
        url: "test",
        title: "test",
        pub_date: "10/20/96"
      }
    ] };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2>Saved Articles</h2>
              </div>
              <div className="panel-body" onClick={this.clickHandler}>
                {/* using map to loop through the array being returned from the db with the articles it holds */}
                {this.state.saved.map(function(search, i) {
                  return <p key={i}><a href="" className="btn btn-danger" id={search._id} >Delete</a> <a href={search.url}>{search.title}</a> <span>{search.pub_date}</span></p>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;