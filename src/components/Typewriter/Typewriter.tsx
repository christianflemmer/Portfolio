import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import './Typewriter.scss';

interface ITypewriterProps {
	phrasesToType: string[];
	prefixedText?: string;
}

interface IState {
	text: string;
	message: string;
	isDeleting: boolean;
	loopNum: number;
	typingSpeed: number;
}

const CONSTANTS = {
	TYPING_SPEED: 150,
	DELETING_SPEED: 50,
	DELAY_BEFORE_TYPING: 500,
	DELAY_BEFORE_DELETING: 1250,
};

const Typewriter: React.FC<ITypewriterProps> = (
	{
		phrasesToType,
		prefixedText,
	}
): ReactElement => {
	const [state, setState]: [IState, Dispatch<SetStateAction<IState>>] = useState<IState>({
		text: '',
		message: '',
		isDeleting: false,
		loopNum: 0,
		typingSpeed: CONSTANTS.TYPING_SPEED,
	});

	useEffect(() => {
		let timer: NodeJS.Timeout;
		const handleType: () => void = () => {
			setState(currentState => ({
				...currentState,
				text: currentState.message.substring(0, currentState.isDeleting
					? (currentState.text.length - 1)
					: (currentState.text.length + 1)
				),
				typingSpeed: currentState.isDeleting
					? CONSTANTS.TYPING_SPEED
					: CONSTANTS.DELETING_SPEED
			}));
			timer = setTimeout(handleType, state.typingSpeed);
		};
		handleType();
		return () => clearTimeout(timer);
		// eslint-disable-next-line
	}, [state.isDeleting]);

	useEffect(() => {
		if (
			!state.isDeleting &&
			(state.text === state.message)
		) {
			setTimeout(() => {
				setState(currentState => ({
					...currentState,
					isDeleting: true,
				}));
			}, CONSTANTS.DELAY_BEFORE_DELETING);
		} else if (
			state.isDeleting &&
			(state.text === '')
		) {
			setTimeout(() => {
				setState(currentState => ({
					...currentState,
					isDeleting: false,
					loopNum: currentState.loopNum + 1,
					message: phrasesToType[currentState.loopNum % phrasesToType.length],
				}));
			}, CONSTANTS.DELAY_BEFORE_TYPING);
		}
	}, [state.text, state.message, state.isDeleting, phrasesToType]);

	return (
		<h1>
			{prefixedText}
			<span> {state.text}</span>
			<span id="blinker" />
		</h1>
	);
};

export default Typewriter;