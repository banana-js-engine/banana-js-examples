import { ComponentType, ScriptComponent } from "@mfkucuk/banana-js";

export class FlagScript extends ScriptComponent {

    ready() {
        this.timer = this.getComponent(ComponentType.Timer);
        this.timer.setCallback(() => {
            console.log('Level completed');
        });
    }

}