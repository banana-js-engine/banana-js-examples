import { Game, Scene, GameObject, Transform, OrthographicCamera, Color } from '@mfkucuk/banana-js';
import { Ship } from './prefabs/Ship';

export default function App() {
    return (
        <Game name='Alien Invaders' width={400} height={600}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={Color.black}/>   
                </GameObject>
                
                <Ship/>
            </Scene>
        </Game>
    )
}