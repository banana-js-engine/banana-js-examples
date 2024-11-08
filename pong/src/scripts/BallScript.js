import { ComponentType, ScriptComponent, Vector2 } from "@mfkucuk/banana-js";

export class BallScript extends ScriptComponent {

    #body;

    ready() {
        this.#body = this.getComponent(ComponentType.Body2D);

        const initialForce = new Vector2(-5, 5);

        this.#body.addForce(initialForce);
    }

    onExitViewport() {
        this.onBallExit(this.transform.position.x);
        this.transform.moveTo(0, 0, 0);
    }

}