import { Game, Scene, GameObject, Transform, OrthographicCamera, PlatformType, Sprite, Color, BoxBody2D, Script } from '@mfkucuk/banana-js';

export default function GameApp() {
    return (
        <Game name='1 Button Jam 2024' width={600} height={600} platform={PlatformType.Itchio}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera/>  
                </GameObject>

                <GameObject>
                    <Transform/>
                    <Sprite color={Color.red}/>
                    <BoxBody2D/>
                    <Script import={import('./scripts/PlayerScript')}/>
                </GameObject>
            </Scene>
        </Game>
    )
}