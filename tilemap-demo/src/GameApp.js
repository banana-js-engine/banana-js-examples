import { Game, Scene, GameObject, Transform, OrthographicCamera, Script, PlatformType, Tilemap } from '@mfkucuk/banana-js';

export default function GameApp() {

    return (
        <Game name='Tilemap demo' width={600} height={600} platform={PlatformType.Web}>
            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={[0.18, 0.1, 0.2, 1]}/>
                </GameObject>

                <GameObject>
                    <Transform position={[-2.5, -2, 0]}/>
                    <Tilemap src="Dungeon_Tileset.png" dataSrc="tilemap.data" cellWidth={16} cellHeight={16}/>
                    <Script import={import('./scripts/TilemapScript')}/>
                </GameObject>
            </Scene>
        </Game>
    )
}