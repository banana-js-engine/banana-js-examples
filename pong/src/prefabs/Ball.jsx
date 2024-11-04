import { Circle, CircleBody2D, GameObject, Script, ShapeType, Transform } from "@mfkucuk/banana-js";

export function Ball(props) {
    return (
        <GameObject name="ball">
            <Transform scale={[0.5, 0.5, 1]}/>
            <Circle/>
            <Script import={import('../scripts/BallScript')} onBallExit={props.onBallExit}/>
            <CircleBody2D isStatic={false} gravityScale={0} restitution={1}/>
        </GameObject>
    );
}