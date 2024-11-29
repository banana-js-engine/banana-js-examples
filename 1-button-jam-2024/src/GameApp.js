import { Game, Scene, GameObject, Transform, OrthographicCamera, PlatformType, DebugSettings, UIText, Script, Audio, Sprite, Color, BoxBody2D, Animator, Animation, Tilemap, CircleBody2D } from '@mfkucuk/banana-js';
import { Ground } from './prefabs/Ground';
import { Wall } from './prefabs/Wall';
import { Flag } from './prefabs/Flag';

export default function GameApp() {

    return (
        <Game name="Can't Stop" width={600} height={600} platform={PlatformType.Itchio}>
            <DebugSettings showFps showCollisionShapes/>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={[0.45, 0.86, 0.46, 1]}/>  
                </GameObject>

                <GameObject name='Envrionment'>
                    <Transform/>
                    <Tilemap src='tilemap.png' dataSrc='tilemap.data' cellWidth={18} cellHeight={18}/>
                </GameObject>

                <GameObject name='Player'>
                    <Transform scale={[1, 1, 1]}/>
                    <Sprite flipX/>
                    <BoxBody2D restitution={1}/>
                    <Script import={import('./scripts/PlayerScript')}/>

                    <Animator startAnim='IDLE'>
                        <Animation src='tilemap-characters.png' name='IDLE' cellWidth={24} cellHeight={24} firstFrame={0} frames={1}/>
                        <Animation src='tilemap-characters.png' name='JUMP' cellWidth={24} cellHeight={24} firstFrame={1} frames={1}/>
                    </Animator>
                </GameObject>

                <Ground position={[0, 4, 0]} scale={[7, 1, 1]}/>
                <Wall position={[4.1, 0, 0]} scale={[1, 7, 1]}/>
                <Wall position={[-4.1, 0, 0]} scale={[1, 7, 1]}/>

                <Flag/>
            </Scene>
        </Game>
    )
}