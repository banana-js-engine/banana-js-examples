import { GameObject, Sprite, Transform, ShapeType, BoxBody2D } from "@mfkucuk/banana-js";

/**
 * 
 * @param {{ position: [number, number, number] }} props 
 */
export function Wall(props) {
    return (
        <GameObject name="Wall">
            <Transform position={props.position} scale={[14, 1, 1]}/>
            <Sprite/>
            <BoxBody2D shape={ShapeType.Box} isStatic/>
        </GameObject>
    );
}
