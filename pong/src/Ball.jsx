import { Body2D, Circle, GameObject, Script, ShapeType, Transform } from "@mfkucuk/banana-js";

export function Ball(props) {
    return (
        <GameObject name="ball">
            <Transform scale={[0.5, 0.5, 1]}/>
            <Circle/>
            <Script import={import('./scripts/BallScript')}/>
            <Body2D shape={ShapeType.Circle} isStatic={false} gravityScale={0}/>
        </GameObject>
    );
}