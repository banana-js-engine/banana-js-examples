import { BoxBody2D, GameObject, Transform } from "@mfkucuk/banana-js";

/**
 * @param {{ position, scale }} props 
 */
export function Wall(props) {
    return (
        <GameObject name='Wall'>
            <Transform position={props.position} scale={props.scale}/>
            <BoxBody2D isStatic restitution={1}/>
        </GameObject>
    )

}