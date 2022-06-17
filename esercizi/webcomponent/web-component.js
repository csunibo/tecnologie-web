		String.prototype.tpl = function(o) { 
			var r = this ; 
			for (var i in o) { 
				r = r.replace(new RegExp("\\{\\{"+i+"\\}\\}", 'g'),o[i].value || o[i]) 
			} 
			return r 
		}

		NamedNodeMap.prototype.toPlainObject = function() {
			let ret = {}
			for (var i=0; i< this.length; i++)
				ret[this[i].name] = this[i].value
			return ret
		}


		function AddToContent(where,what) {
			let els = document.querySelectorAll(where)
			for (var i=0; i<els.length; i++) {
				els[i].innerHTML += what
			}
		}

		function CreateCustomElement(name, template) {
			if (name) {
				customElements.define(name,
					class extends HTMLElement {
						constructor() {
							super();

							if (!template)
								template = document.getElementById(name)?.innerHTML || "";

							let templateContent = fragmentFromString(template.tpl(this.attributes.toPlainObject()) )
								/* Usare la shadow DOM permette l'uso di <slot> direttamente
								ma incapsula il componente e debbo ridefinire librerie CSS e JS 
								(quindi niente Bootstrap)

								Se voglio usare librerie esterne CSS e/o Javascript (ad esempio
								Bootstrap) posso appendere il contenuto direttamente nel custom Element
								ma debbo gestirmi gli <slot> da solo, ad esempio con poorMenSlotManager 
								e tpl */


								/*
								const shadowRoot = this.attachShadow({mode: 'open'});
								shadowRoot.appendChild(templateContent.cloneNode(true));
								*/
			
							let newContent = templateContent.cloneNode(true)	
							poorMenSlotManager(newContent,this,true)
							this.replaceWith(newContent);
						}
					}
				);	
			}		
		}


		function poorMenSlotManager(tpl,customEl,replace=false) {
			let slots = tpl.querySelectorAll('slot[name]')
			
			for (var i =0; i< slots.length; i++) {
				let n = slots[i].getAttribute('name')
				let els = customEl.querySelectorAll(`*[slot=${n}]`)
				for (var j = 0; j< els.length; j++) {
					if (replace) {
						slots[i].replaceWith(els[j])
					} else {
						slots[i].appendChild(els[j])
					}
				}
			}

			let slotsNoName = tpl.querySelectorAll('slot:not([name])')
			for (var i =0; i< slotsNoName.length; i++) {
				let els = customEl.childNodes
				if (replace) {
					slotsNoName[i].replaceWith(...els)
				} else {
					slotsNoName[i].appendChild(els)
				}
			}
		
		}

		function fragmentFromString(strHTML) {
			return document.createRange().createContextualFragment(strHTML);
		}




		
		


