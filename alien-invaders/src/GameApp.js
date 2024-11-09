import { Game, Scene, GameObject, Transform, OrthographicCamera, Color, Text } from '@mfkucuk/banana-js';
import { Ship } from './prefabs/Ship';
import { Alien } from './prefabs/Alien';
import { useState } from 'react';

export default function App() {
    const [score, setScore] = useState(0);

    const increaseScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    return (
        <Game name='Alien Invaders' width={400} height={600}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={Color.black}/>   
                </GameObject>
                
                <Ship onBulletHit={increaseScore}/>

                <Alien position={[-0.5, -4, 0]}/>
                <Alien position={[-2.5, -4, 0]}/>
                <Alien position={[1.5, -4, 0]}/>

                <GameObject>
                    <Transform position={[1.8, 4.8, 0]}/>
                    <Text fontSize={20} color={Color.white}>{`Score: ${score}`}</Text>
                </GameObject>
            </Scene>
        </Game>
    )
}