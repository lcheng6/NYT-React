//Found articles child
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Found extends Component {
  constructor (props) {
    super(props);
    //don't need to use states
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2>Results</h2>
              </div>
              <div className="panel-body" onClick={this.clickHandler}>

                {/* loop through the articles returned and display to screen with a save button */}
                {this.props.foundArticles.map(function(article, i) {

                  return <p key={i}><a href="" className="btn btn-primary">Save</a> <a href={article.url}>{article.title}</a> <span>{article.pub_date}</span></p>

                })}

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Found;