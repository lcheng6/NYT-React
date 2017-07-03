import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Search from './Children/Search';
import Found from './Children/Found';
import Saved from './Children/Saved';

class Main extends Component {

  constructor (props) {
    super(props);

    this.state = {
      found: [],
      saved: [],
    };

  }

  render() {

    return (
      <div>
        <Search />
        <Found />
        <Saved />
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.querySelector('#Main'));