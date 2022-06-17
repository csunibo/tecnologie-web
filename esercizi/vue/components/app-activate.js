export default {
	props: ['dest'],
	template: `

<a class="dropdown-item" href="#" data-bs-toggle="modal" :data-bs-target="'#' + dest">
	<slot></slot>
</a>

`}