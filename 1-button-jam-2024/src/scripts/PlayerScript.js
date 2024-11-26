import { ComponentType, Input, KeyCode, ScriptComponent, Vector3 } from "@mfkucuk/banana-js";

export class PlayerScript extends ScriptComponent {

    ready() {
        this.body = this.getComponent(ComponentType.Body2D);
    }

    step(dt) {
        if (Input.getKeyDown(KeyCode.Space)) {
            this.body.addForce(Vector3.down.mul(10));
        }
    }

}