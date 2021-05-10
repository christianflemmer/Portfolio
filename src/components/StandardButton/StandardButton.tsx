import './StandardButton.scss';
import React, { ReactElement } from 'react';

interface IStandardButtonProps {
	text: string;
	href: string;
}

const StandardButton: React.FC<IStandardButtonProps> = (
	{
		text,
		href,
	},
): ReactElement => {
	return (
		<>
			<a href={href}>
				{text}
				<svg viewBox="0 0 16 16" fill="none" className="chevron">
					<path d="M5 1.0606601717798212 L11.939339828220179 8 L5 14.939339828220179"></path>
				</svg>
			</a>
		</>
	);
};

export default StandardButton;