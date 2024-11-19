import { ComponentType, Input, KeyCode, ScriptComponent } from "@mfkucuk/banana-js";

export class DialogueScript extends ScriptComponent {

    #dialogue;
    #dialogueAudio;


    ready() {
        this.#dialogue = this.getComponent(ComponentType.Dialogue);
        this.#dialogueAudio = this.getComponent(ComponentType.Audio);
    }

    step(dt) {
        if (Input.getKeyDown(KeyCode.R)) {
            this.#dialogue.stopDialogue();
            this.#dialogue.startDialogue();
            this.#dialogueAudio.pause();
        }

        if (this.#dialogue.isDialogueRunning) {
            if (this.#dialogue.skipToNext) {
                this.#dialogueAudio.pause();
            } else {
                this.#dialogueAudio.resume();   
            }
        }
    }

}
