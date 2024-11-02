import { ComponentType, ScriptComponent, Vector2 } from "@mfkucuk/banana-js";

export class BallScript extends ScriptComponent {

    #body;

    ready() {
        this.#body = this.getComponent(ComponentType.Body2D);

        const initialForce = Vector2.zero;

        initialForce.x = -1;
        initialForce.y = 1;

        this.#body.addForce(initialForce);
    }

}