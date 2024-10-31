import { Circle, GameObject, Script, Transform } from "@mfkucuk/banana-js";

export default function Ball(props) {
    return (
        <GameObject name="ball">
            <Transform/>
            <Circle/>
            <Script import={import('./scripts/HelloWorldScript')}/>
        </GameObject>
    );
}