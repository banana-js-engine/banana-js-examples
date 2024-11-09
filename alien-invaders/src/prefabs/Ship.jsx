import { GameObject, Transform, Sprite, Script, Animator, Animation } from '@mfkucuk/banana-js';

/**
 * 
 * @param {{ onBulletHit }} props 
 * @returns 
 */
export function Ship(props) {
    return (
        <GameObject name="Ship">
            <Transform position={[0, 4, 0]} scale={[0.5, 0.5, 1]}/>
            <Sprite/>

            <Animator startAnim="Idle">
                <Animation src="SpaceAsset.png" name="Idle" firstFrame={1} frames={0} cellWidth={8} cellHeight={8}/>
                <Animation src="SpaceAsset.png" name="Left" firstFrame={0} frames={0} cellWidth={8} cellHeight={8}/>
                <Animation src="SpaceAsset.png" name="Right" firstFrame={2} frames={0} cellWidth={8} cellHeight={8}/>
            </Animator>
            <Script import={import('../scripts/ShipScript')} speed={8} onBulletHit={props.onBulletHit}/>
        </GameObject>
    );
}