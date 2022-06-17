export default {
	props: ['title'],
	template: `
  
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">{{title}}</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
				data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
				aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<ul class="navbar-nav me-auto mb-2 mb-md-0">
				<slot></slot>
			</ul>
		</div>
	</div>
</nav>
  
`}