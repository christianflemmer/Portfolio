import { ReactElement } from 'react';
import Tilt from 'react-tilt';
import './Projects.scss';

export default function Projects(

): ReactElement {
	return (
		<section id="projects">
			<Tilt className="tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }} >
				<div className="tilt-inner"> 👽 </div>
			</Tilt>
		</section>
	);
}
