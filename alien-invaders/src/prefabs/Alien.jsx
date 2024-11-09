import { Animation, Animator, BoxBody2D, GameObject, Script, Sprite, Transform } from "@mfkucuk/banana-js";

/**
 * 
 * @param {{ position }} props 
 */
export function Alien(props) {
    return (
        <GameObject>
            <Transform position={props.position} scale={[0.5, 0.5, 1]}/>
            <Sprite/>

            <Animator startAnim="Right">
                <Animation src="SpaceAsset.png" name="Left" firstFrame={10} frames={0} cellHeight={8} cellWidth={8}/>
                <Animation src="SpaceAsset.png" name="Right" firstFrame={12} frames={0} cellHeight={8} cellWidth={8}/>
            </Animator>

            <Script import={import('../scripts/AlienScript')}/>
            <BoxBody2D isStatic/>
        </GameObject>
    );
}