import React, { Component } from 'react';

export default class Menu extends Component {

  render() {
    return(

	<li className="nav-item dropdown">
		<a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" 
		role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.props.title}</a>
		<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
			{this.props.children }
		</ul>
	</li>

    )
  }

}
