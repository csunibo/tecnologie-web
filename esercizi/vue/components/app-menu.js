export default {
	props: ['title'],
	template: `


	<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" 
		role="button" data-bs-toggle="dropdown" aria-expanded="false">{{title}}</a>
		<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
			<slot></slot>
		</ul>
	</li>



`}