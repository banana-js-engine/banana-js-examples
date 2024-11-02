import { GameObject, Sprite, Transform } from "@mfkucuk/banana-js";

/**
 * 
 * @param {{ position: [number, number, number] }} props 
 */
export function Paddle(props) {
    return (
        <GameObject name="Paddle">
            <Transform position={props.position} scale={[0.5, 2, 1]}/>
            <Sprite/>
        </GameObject>
    );
}