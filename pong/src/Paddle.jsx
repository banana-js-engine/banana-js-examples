import { GameObject, Sprite, Transform, Script, ShapeType, BoxBody2D } from "@mfkucuk/banana-js";

/**
 * 
 * @param {{ position: [number, number, number] }} props 
 */
export function Paddle(props) {
    return (
        <GameObject name="Paddle">
            <Transform position={props.position} scale={[0.5, 2, 1]}/>
            <Sprite/>
            <Script import={import('./scripts/PaddleScript')} upKey={props.upKey} downKey={props.downKey} speed={0.1}/>
            <BoxBody2D shape={ShapeType.Box} isStatic/>
        </GameObject>
    );
}
