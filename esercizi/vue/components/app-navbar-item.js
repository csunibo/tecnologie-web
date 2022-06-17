export default {
	props: ['dest'],
	template: `

			<li class="nav-item">
				<a class="nav-link active" href="#" data-bs-toggle="modal"
					 :data-bs-target="'#'+dest"><slot></slot></a>
			</li>

`}