import { BoxBody2D, Color, GameObject, Script, Sprite, Transform } from "@mfkucuk/banana-js";

/**
 * 
 * @param {{ position, onBulletHit }} props 
 */
export function Bullet(props) {
    return (
        <GameObject>
            <Transform position={props.position} scale={[0.1, 0.3, 1]}/>
            <Sprite color={Color.cyan}/>

            <Script import={import('../scripts/BulletScript')} onBulletHit={props.onBulletHit}/>
            <BoxBody2D isStatic/>
        </GameObject>
    )
}