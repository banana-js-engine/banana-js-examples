import { ComponentType, ScriptComponent } from "@mfkucuk/banana-js";

export class TilemapScript extends ScriptComponent {
    
    #tilemap;

    ready() {
        this.#tilemap = this.getComponent(ComponentType.Tilemap);

        const tilemapData = document.getElementById('tilemapData');
        const tilemapX = document.getElementById('tilemapX'); 
        const tilemapY = document.getElementById('tilemapY'); 
        const tilemapButton = document.getElementById('tilemapButton');
        const texture = document.getElementById('texture');
        const cellWidth = document.getElementById('cellWidth');
        const cellHeight = document.getElementById('cellHeight');

        tilemapButton.addEventListener('click', () => {
            this.#tilemap.setSpriteSheet(texture.src, cellWidth.value, cellHeight.value);
            this.#tilemap.setData(tilemapData.value);
            this.transform.moveTo(tilemapX.value, tilemapY.value, 0);
        });
    }
}