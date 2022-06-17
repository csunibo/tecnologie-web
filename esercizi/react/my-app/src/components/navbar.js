import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return(
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	<div className="container-fluid">
		<a className="navbar-brand" href="#">{this.props.title}</a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
				data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
				aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarCollapse">
			<ul className="navbar-nav me-auto mb-2 mb-md-0">
				{this.props.children}
			</ul>
		</div>
	</div>
</nav>
    )
  }

}
