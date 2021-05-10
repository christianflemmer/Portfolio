import './Welcome.scss';
import { ReactElement } from 'react';
import Typewriter from '../../components/Typewriter/Typewriter';
import StandardButton from '../../components/StandardButton/StandardButton';

export default function Welcome(

): ReactElement {
	return (
		<section id="welcome">
			<h1>
				Hello, I'm <span className="red-highlight">Christian Flemmer</span>.
			</h1>
			<Typewriter
				prefixedText="I'm a"
				phrasesToType={['web developer.', 'graduated CS student. ', 'drummer.']}
			/>
			<StandardButton text="Explore portfolio" href="#about" />
		</section>
	);
}


/* tfc */