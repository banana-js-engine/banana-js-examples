import { ComponentType, Input, KeyCode, ScriptComponent } from "@mfkucuk/banana-js";

export class DialogueScript extends ScriptComponent {

    #dialogue;

    ready() {
        this.#dialogue = this.getComponent(ComponentType.Dialogue);
    }

    step(dt) {
        if (Input.getKeyDown(KeyCode.R)) {
            this.#dialogue.stopDialogue();
            this.#dialogue.startDialogue();
        }
    }

}
