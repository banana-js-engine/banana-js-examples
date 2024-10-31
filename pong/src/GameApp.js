import { Game, Scene, GameObject, Transform, OrthographicCamera, Circle, Script } from '@mfkucuk/banana-js';
import Ball from './Ball';

export default function App() {
    return (
        <Game name='banana-js game' width={800} height={600}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera/>   
                </GameObject>
                <Ball/>
            </Scene>
        </Game>
    )
}