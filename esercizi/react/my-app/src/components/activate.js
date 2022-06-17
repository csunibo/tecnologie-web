import React, { Component } from 'react';

export default class Activate extends Component {

  render() {
    return(

<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target={'#' + this.props.dest}>
	{ this.props.children }
</a>

    )
  }

}
