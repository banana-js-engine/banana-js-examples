import { ScriptComponent } from "@mfkucuk/banana-js";
import { Input } from "@mfkucuk/banana-js";

export class PaddleScript extends ScriptComponent {

    step(dt) {
        if (Input.getKey(this.upKey)) {
            this.transform.moveBy(0, -this.speed, 0);
        }
        if (Input.getKey(this.downKey)) {
            this.transform.moveBy(0, this.speed, 0);
        }
    }
}
