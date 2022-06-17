import Activate from './components/Activate';
import Item from './components/Item';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import NavbarItem from './components/NavbarItem';
import Separator from './components/Separator';
import './App.css';

function App() {
	var appName ="React Component"
	var explanation ="Questo esempio usa Bootstrap con React."
  return (
<div>

	<Navbar title="React component">
		<Menu title="Io sono un menu">
			<Item>
				<Activate dest="modal1">Prima modale</Activate>
			</Item>
			<Item>
				<Activate dest="modal2">Seconda modale</Activate>
			</Item>
			<Separator />
			<Item>
				<Activate dest="modal3">Terza modale</Activate>
			</Item>
		</Menu>
		<NavbarItem dest="info">Info</NavbarItem>
	</Navbar>
	
	<main className="container">
		<div className="bg-light p-5 rounded">
			<h1>Esempio di componenti - {appName}</h1>
			<p className="lead">{explanation}</p>
		</div>
	</main>

	<Modal id="modal1" title="Prima modale">
        <p>Qui ci metto il testo della prima modale. Può essere anche roba molto lunga.</p>
	</Modal>

	<Modal id="modal2" title="Seconda modale">
        <p>Qui ci metto il testo della seconda modale.</p>
        <p style={{marginTop: 30 + 'em'}}>Facciamo una roba un po&apos; altina</p>
	</Modal>

	<Modal id="modal3" title="Terza modale">
      	<h2 className="text-center">Senza fantasia</h2>
        <p>Qui ci metto il testo della terza modale. Non so proprio che metterci.</p>
	</Modal>

	<Modal id="info" title="Info su questo esempio">
		<p>Questo è uno degli esempi di applicazione dei framework di componenti per gli studenti di TW.</p>
		<p className="small text-end">© Fabio Vitali, 2022</p>
	</Modal>

</div>
  );
}

export default App;
