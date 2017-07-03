//Found articles child
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Found extends Component {
  constructor (props) {
    super(props);
    //don't need to use states
  }

  onSelectArticle(event) {
    event.preventDefault();
    var articleId = event.target.getAttribute('data-key');
    this.props.onSelectArticle(articleId);

  }

  render() {
    //this is the index of the articles.  It will always go from 0 to lenght of found articles - 1.
    var i = 0;

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
                {this.props.foundArticles.map(function(article) {

                  return <p key={i++}>
                    <a data-key={i++} href="" className="btn btn-primary" onClick={event => this.onSelectArticle(event)}>Save</a>
                    <a href={article.url}>{article.title}</a>
                    <span>{article.pub_date}</span></p>

                }.bind(this))}

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Found;