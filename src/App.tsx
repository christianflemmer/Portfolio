import './App.scss';
import './assets/scss/main.scss';
// import DataInterfaceService from './services/DataInterfaceService';
import Welcome from './pages/Welcome/Welcome';

export default function App(

): JSX.Element {
	return (
		<>
			<div id="stars"></div>
			<div id="aurora"></div>
			<Welcome />
		</>
	);
}
