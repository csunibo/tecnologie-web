export default {
	props: ['id', 'title'],
	template: `
	<div class="modal fade" :id="id" data-bs-backdrop="static" data-bs-keyboard="false" 
		 tabindex="-1" :aria-labelledby="id+'Label'" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<h5 class="modal-title" :id="id+'Label'">{{title}}</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		  </div>
		  <div class="modal-body">
			<slot>Default content</slot>
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
			<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
		  </div>
		</div>
	  </div>
	</div>
	
	
	
`}