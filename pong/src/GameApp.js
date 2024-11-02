import { Game, Scene, GameObject, Transform, OrthographicCamera, Color, Text } from '@mfkucuk/banana-js';
import { Ball } from './Ball';
import { Paddle } from './Paddle';

export default function App() {
    return (
        <Game name='banana-js game' width={800} height={600}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={Color.black}/>   
                </GameObject>

                <GameObject name="Score">
                    <Transform position={[-2.3, -3, 0]}/>
                    <Text fontSize={50} color={Color.white}>0                0</Text>
                </GameObject>

                <Paddle position={[-6, 0, 0]}/>
                <Paddle position={[6, 0, 0]}/>

                <Ball/>
            </Scene>
        </Game>
    )
}