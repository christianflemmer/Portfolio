import { ReactElement } from 'react';
import './Contact.scss';

export default function Contact(): ReactElement {
	return (
		<section id="contact">
			<div id="wip">
				<p>Thanks for checking out my website!</p>
				<small>It's a work in progress so check back often!</small>
				<small><a href="#welcome">Back to top</a></small>
			</div>
			<div id="credits">
				<small>Website tailored with 💜 by Christian Flemmer</small>
				<small>Powered by React</small>
			</div>
			<div id="galaxy"></div>
			<div id="ground"></div>
		</section>
	);
}
