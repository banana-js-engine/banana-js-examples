import { ComponentType, Input, KeyCode, ScriptComponent, Vector2 } from "@mfkucuk/banana-js";

export class PlayerScript extends ScriptComponent {

    jumpVector = Vector2.down.mul(4);

    ready() {
        this.body = this.getComponent(ComponentType.Body2D);
        this.animator = this.getComponent(ComponentType.Animator);
        this.sprite = this.getComponent(ComponentType.Sprite);
        this.canJump = false;

        this.body.addForce(Vector2.right.mul(4));
    }

    step(dt) {

        if ((Input.getKeyDown(KeyCode.Space) || Input.getTap()) && this.canJump) {
            this.body.addForce(this.jumpVector);
            this.animator.playAnimation('JUMP');
            this.canJump = false;
        }

    }

    onCollisionEnter2D(other) {
        const nameComponent = other.getComponent(ComponentType.Name);

        if (nameComponent.name == 'Ground') {
            this.animator.playAnimation('IDLE');
            this.canJump = true;
        } else if (nameComponent.name == 'Wall') {
            this.sprite.flipX = !this.sprite.flipX;
        }
    }
}