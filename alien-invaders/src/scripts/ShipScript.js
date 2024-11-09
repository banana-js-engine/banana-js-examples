import { ComponentType, Input, ScriptComponent, Vector3 } from "@mfkucuk/banana-js";
import { Bullet } from "../prefabs/Bullet";

export class ShipScript extends ScriptComponent {

    #animator;

    ready() {
        this.#animator = this.getComponent(ComponentType.Animator);
    }

    step(dt) {

        // Movement
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

        // Shooting
        if (Input.getKeyDown(' ')) {
            const pos = Vector3.down.div(4);
            pos.add(this.transform.position)
            this.createPrefab(<Bullet position={pos} onBulletHit={this.onBulletHit}/>);
        }
    }
}