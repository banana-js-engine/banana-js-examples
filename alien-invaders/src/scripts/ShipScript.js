import { ComponentType, Input, ScriptComponent } from "@mfkucuk/banana-js";

export class ShipScript extends ScriptComponent {

    #animator;

    ready() {
        this.#animator = this.getComponent(ComponentType.Animator);
    }

    step(dt) {
        let isMoving = false

        if (Input.getKey('a')) {
            isMoving = true;
            this.transform.moveBy(-this.speed * dt, 0, 0);
            this.#animator.playAnimation('Left');
        }
        if (Input.getKey('d')) {
            isMoving = true;
            this.transform.moveBy(this.speed * dt, 0, 0);
            this.#animator.playAnimation('Right');
        }

        if (!isMoving) {
            this.#animator.playAnimation('Idle');
        }
    }
}