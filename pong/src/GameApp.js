import React, { useState } from 'react';
import { Game, Scene, GameObject, Transform, OrthographicCamera, Color, Text } from '@mfkucuk/banana-js';
import { Ball } from './prefabs/Ball';
import { Paddle } from './prefabs/Paddle';
import { Wall } from './prefabs/Wall';
import { Score } from './prefabs/Score';

export default function Pong() {
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

                <Score position={[-2.3, -3, 0]} score={leftScore}/>
                <Score position={[2.3, -3, 0]} score={rightScore}/>

                <Wall position={[0, -5, 0]}/>
                <Wall position={[0, 5, 0]}/>

                <Paddle position={[-6, 0, 0]} upKey="w" downKey="s"/>
                <Paddle position={[6, 0, 0]} upKey="arrowup" downKey="arrowdown"/>

                <Ball onBallExit={updateScore}/>
            </Scene>
        </Game>
    );
}
