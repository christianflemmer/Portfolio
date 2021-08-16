import './App.scss';
import './assets/scss/main.scss';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Welcome from './pages/Welcome/Welcome';

export default function App(

): JSX.Element {
	return (
		<>
			<div id="stars"></div>
			<div id="aurora"></div>
			<Welcome />
			<About />
			<Contact />
		</>
	);
}
