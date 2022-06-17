	const { createApp } = Vue
	import AppModal from './components/AppModal.js'
	import AppNavbar from './components/AppNavbar.js'
	import AppMenu from './components/AppMenu.js'
	import AppItem from './components/AppItem.js'
	import AppNavbarItem from './components/AppNavbarItem.js'
	import AppActivate from './components/AppActivate.js'
	import AppSeparator from './components/AppSeparator.js'

	createApp({
		components: {
			AppModal,
			AppNavbar,
			AppMenu,
			AppItem,
			AppActivate,
			AppNavbarItem,
			AppSeparator
		},
		data() {
			return {
				appName: 'Vue Component',
				explanation: "Questo esempio usa Bootstrap con Vue.js."
			}
		}
	}).mount('#app')
