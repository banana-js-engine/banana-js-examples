import { Game, Scene, GameObject, Transform, OrthographicCamera, Script, PlatformType, Dialogue, Color, Text } from '@mfkucuk/banana-js';

export default function GameApp() {
    return (
        <Game name='Dialogue Demo' width={600} height={400} platform={PlatformType.Web}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={[0, 0, 0, 1]}/>
                </GameObject>

                <GameObject>
                    <Transform position={[-2.5, 0, 0]}/>
                    <Text color={Color.orange} fontSize={16}>Press [Space] to advance!</Text>
                </GameObject>

                <GameObject>
                    <Transform position={[0, 2, 0]}/>
                    <Dialogue playOnStart color={Color.white} fontSize={16}>
                        <div>Welcome to the banana.js dialogue demo!</div>
                        <div>This dialogue is made entirely in the JSX file.</div>
                        <div>Pretty simple to do</div>
                        <div>Anyways, that's it for now</div>
                        <div>Press [R] to restart the dialogue</div>
                    </Dialogue>
                    <Script import={import('./scripts/DialogueScript')}/>
                </GameObject>
            </Scene>
        </Game>
    )
}