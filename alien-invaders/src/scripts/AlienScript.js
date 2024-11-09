import { ComponentType, ScriptComponent } from "@mfkucuk/banana-js";

export class AlienScript extends ScriptComponent {

    #speed;

    #elapsedTime;
    #duration;

    #animator;

    ready() {
        this.#speed = 1;

        this.#elapsedTime = 0;
        this.#duration = 1;

        this.#animator = this.getComponent(ComponentType.Animator);
    }

    step(dt) {
        this.transform.moveBy(this.#speed * dt, 0, 0);

        this.#elapsedTime += dt;

        if (this.#elapsedTime > this.#duration) {
            this.#elapsedTime = 0;

            this.#speed *= -1;
            if (this.#speed > 0) {
                this.#animator.playAnimation('Right');
            } else {
                this.#animator.playAnimation('Left');
            }
        }
    }

}