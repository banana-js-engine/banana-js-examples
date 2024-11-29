import { Animation, Animator, GameObject, Script, Sprite, Timer, Transform } from "@mfkucuk/banana-js";

/**
 * @param {{ position }} props 
 */
export function Flag(props) {
    return (
        <GameObject>
            <Transform position={props.position}/>
            <Sprite/>
            <Timer oneShot duration={2}/>
            <Script import={import('../scripts/FlagScript')}/>

            <Animator startAnim='flagBottom'>
                <Animation src='tilemap.png' name='flagBottom' cellWidth={19} cellHeight={19} firstFrame={125} frames={1}/>
            </Animator>

            <GameObject>
                <Transform position={[0, -0.9, 0]}/>
                <Sprite/>
                <Animator startAnim='flagTop'>
                    <Animation src='tilemap.png' name='flagTop' cellWidth={19} cellHeight={19} firstFrame={106} frames={2} length={1}/>
                </Animator>
            </GameObject>
        </GameObject>
    );
}