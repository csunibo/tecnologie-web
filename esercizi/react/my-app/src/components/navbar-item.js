import React, { Component } from 'react';

export default class NavbarItem extends Component {

  render() {
    return(

			<li className="nav-item">
				<a className="nav-link active" href="#" data-bs-toggle="modal" data-bs-target={'#' + this.props.dest}>
				{this.props.children}					 
					 </a>
			</li>

    )
  }

}
