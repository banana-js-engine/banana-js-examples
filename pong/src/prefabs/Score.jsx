import { GameObject, Transform, Color, Text } from '@mfkucuk/banana-js';

/**
 * 
 * @param {{ position, score }} props 
 * @returns 
 */
export function Score(props) {
    return (
        <GameObject name="Score">
            <Transform position={props.position}/>
            <Text fontSize={50} fontFamily="fantasy" color={Color.white}>{props.score}</Text>
        </GameObject>
    );
}