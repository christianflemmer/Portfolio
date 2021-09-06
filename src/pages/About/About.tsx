import { ReactElement } from 'react';
import profilePicture from '../../assets/images/picture.png';
import angularSVG from '../../assets/svgs/angular.svg';
import typescriptSVG from '../../assets/svgs/typescript.svg';
import nodejsSVG from '../../assets/svgs/nodejs.svg';
import mssqlSVG from '../../assets/svgs/mssql.svg';
import rxjsSVG from '../../assets/svgs/rxjs.svg';
import sassSVG from '../../assets/svgs/sass.svg';
import nativescriptSVG from '../../assets/svgs/nativescript.svg';
import nxSVG from '../../assets/svgs/nx.svg';
import './About.scss';

interface ISVG {
	title: string;
	path: string;
	externalUrl: string;
}

export default function About(

): ReactElement {
	const svgs: ISVG[] = [
		{ title: 'Angular', path: angularSVG, externalUrl: 'https://angular.io/', },
		{ title: 'Typescript', path: typescriptSVG, externalUrl: 'https://www.typescriptlang.org/', },
		{ title: 'Nodejs', path: nodejsSVG, externalUrl: 'https://nodejs.org/en/' },
		{ title: 'MsSQL', path: mssqlSVG, externalUrl: 'https://www.microsoft.com/sql-server' },
		{ title: 'Rxjs', path: rxjsSVG, externalUrl: 'https://rxjs.dev/' },
		{ title: 'Sass', path: sassSVG, externalUrl: 'https://sass-lang.com/' },
		{ title: 'Nativescript', path: nativescriptSVG, externalUrl: 'https://nativescript.org/' },
		{ title: 'NX', path: nxSVG, externalUrl: 'https://nx.dev/' },
	];

	return (
		<section id="about">
			<div id="content">
				<img
					loading="lazy"
					id="flemmer-himself"
					src={profilePicture}
					alt="N/A"
				/>
				<article>
					<p>I'm a curious web developer who is passionate about new technologies, best practices and how to make things look pretty.</p>
					<p>I'm currently employed @ OxyGuard International A/S as a <span>full-stack web developer</span> and have over <span>three years</span> of professional experience working with technologies including, but not limited to:</p>
					<div className="svgs">
						{svgs.map((svg: ISVG): JSX.Element =>
							<a key={svg.externalUrl} target="_blank" rel="noreferrer" href={svg.externalUrl}>
								<img key={svg.title} src={svg.path} alt={svg.title} title={svg.title} />
							</a>
						)}
					</div>
					{/* <small>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” ― Martin Fowler</small> */}
				</article>
			</div>
		</section>
	);
}
