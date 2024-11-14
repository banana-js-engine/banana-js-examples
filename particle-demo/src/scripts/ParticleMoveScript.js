import { ComponentType, Input, MouseButtonCode, ScriptComponent } from "@mfkucuk/banana-js";

export class ParticleMoveScript extends ScriptComponent {

    #particle

    ready() {
        this.#particle = this.getComponent(ComponentType.Particle);
    }

    step(dt) {
        this.transform.moveTo(this.mainCamera.screenToWorldSpace(Input.mousePosition));

        if (Input.getButtonDown(MouseButtonCode.Left)) {
            if (this.#particle.playing) {
                this.#particle.stop();
            } else {
                this.#particle.play();
            }
        }
    }
} 