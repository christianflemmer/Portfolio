import './Card.scss';
import React, { ReactElement } from 'react';
import Tilt from 'react-tilt';

import angularSVG from '../../assets/svgs/angular.svg';
import typescriptSVG from '../../assets/svgs/typescript.svg';
import rxjsSVG from '../../assets/svgs/rxjs.svg';
import sassSVG from '../../assets/svgs/sass.svg';

interface ICardProps {

}

const Card: React.FC<ICardProps> = (
    // {
    // 	text,
    // },
): ReactElement => {
    return (
        <>
            <Tilt 
                className="tilt" 
                options={{ max: 25 }} 
                style={{ height: 350, width: 300 }}
            >
                <div className="content">
                    <h2>ng-sidebar</h2>
                    <p>// carefully tailored sidebar with nested route styling.</p>
                    <div className="svgs">
                        <img src={angularSVG} />
                        <img src={typescriptSVG} />
                        <img src={rxjsSVG} />
                        <img src={sassSVG} />
                    </div>
                </div>
                <div className="overlay">
                    <div className="overlay-helper">
                        <div className="overlay-element top-left"></div>
                        <div className="overlay-element top-right"></div>
                        <div className="overlay-element bottom-left"></div>
                        <div className="overlay-element bottom-right"></div>
                    </div>
                </div>
            </Tilt>
        </>
    );
};

export default Card;