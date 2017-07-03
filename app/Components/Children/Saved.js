import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Saved extends Component {
  constructor (props) {
    super(props);

  }
  onDeleteArticle(event) {
    //articleId is the Mongoose Id
    event.preventDefault();
    var articleId = event.target.id;
    console.log("To Delete Article Id: " + articleId);
    this.props.onDeleteArticle(articleId);

  }

  render() {
    var i = 0;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2>Saved Articles</h2>
              </div>
              <div className="panel-body">
                {/* using map to loop through the array being returned from the db with the articles it holds */}
                {this.props.savedArticles.map(function(savedArticle, i) {
                  return <p key={i} >
                    <a href="" className="btn btn-danger" id={savedArticle._id}
                       onClick={event => this.onDeleteArticle(event) }>Delete</a>
                    <a href={savedArticle.url}>{savedArticle.title} </a>
                    <span>{savedArticle.pub_date}</span>
                  </p>
                }.bind(this))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;