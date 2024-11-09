import { ScriptComponent } from "@mfkucuk/banana-js";

export class BulletScript extends ScriptComponent {

    step(dt) {
        this.transform.moveBy(0, -dt * 8, 0);
    }

    onExitViewport() {
        this.destroyGameObject(this.gameObject);
    }

    onCollisionEnter2D(other) {
        this.onBulletHit();

        this.destroyGameObject(other.gameObject);
        this.destroyGameObject(this.gameObject);
    }

}