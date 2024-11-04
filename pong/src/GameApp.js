import React, { useState } from 'react';
import { Game, Scene, GameObject, Transform, OrthographicCamera, Color, Text } from '@mfkucuk/banana-js';
import { Ball } from './Ball';
import { Paddle } from './Paddle';
import { Wall } from './Wall';

export default function App() {
    const [leftScore, setLeftScore] = useState(0);
    const [rightScore, setRightScore] = useState(0);

    const updateScore = (x) => {

        if (x > 0) {
            setLeftScore(prevLeftScore => prevLeftScore + 1);
        } else {
            setRightScore(prevRightScore => prevRightScore + 1);
        }
    }

    return (
        <Game name='Pong' width={800} height={600}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={Color.black}/>   
                </GameObject>

                <GameObject name="Score_Left">
                    <Transform position={[-2.3, -3, 0]}/>
                    <Text fontSize={50} fontFamily="fantasy" color={Color.white}>{leftScore}</Text>
                </GameObject>

                <GameObject name="Score_Right">
                    <Transform position={[2.3, -3, 0]}/>
                    <Text fontSize={50} fontFamily="fantasy" color={Color.white}>{rightScore}</Text>
                </GameObject>

                <Wall position={[0, -5, 0]}/>
                <Wall position={[0, 5, 0]}/>

                <Paddle position={[-6, 0, 0]} upKey="w" downKey="s"/>
                <Paddle position={[6, 0, 0]} upKey="arrowup" downKey="arrowdown"/>

                <Ball onBallExit={updateScore}/>
            </Scene>
        </Game>
    );
}
