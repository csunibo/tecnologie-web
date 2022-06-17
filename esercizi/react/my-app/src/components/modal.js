import React, { Component } from 'react';

export default class Modal extends Component {

  render() {
    return(

	<div className="modal fade" id={this.props.id} data-bs-backdrop="static" data-bs-keyboard="false" 
		 tabIndex="-1" aria-labelledby={this.props.id +'Label'} aria-hidden="true">
	  <div className="modal-dialog">
		<div className="modal-content">
		  <div className="modal-header">
			<h5 className="modal-title" id={this.props.id + 'Label'}>{this.props.title}</h5>
			<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		  </div>
		  <div className="modal-body">
			{ this.props.children }
		  </div>
		  <div className="modal-footer">
			<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
			<button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
		  </div>
		</div>
	  </div>
	</div>

    )
  }

}
