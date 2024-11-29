import { BoxBody2D, GameObject, Transform } from "@mfkucuk/banana-js";

/**
 * @param {{ position, scale }} props 
 */
export function Ground(props) {
    return (
        <GameObject name='Ground'>
            <Transform position={props.position} scale={props.scale}/>
            <BoxBody2D isStatic restitution={0}/>
        </GameObject>
    )

}