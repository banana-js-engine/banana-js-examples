import { useState } from "react";
import GameApp from "./GameApp";

export default function App() {

    const initialData =
`.data
#: 0,0
$: 1,0
%: 2,0
&: 3,0
W: 4,0
L: 5,0
@: 6,0
A: 0,4
B: 1,4
C: 2,4
D: 3,4
E: 4,4
F: 5,4

.tilemap
#$%&WL
#@@@@L
#@@@@L
#@@@@L
ABCDEF`

    const [imageSrc, setImageSrc] = useState('Dungeon_Tileset.png');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
            const reader = new FileReader();
            reader.onload = (e) => setImageSrc(e.target.result);
            reader.readAsDataURL(file);
        } else {
            alert("Please select a PNG or JPG file.");
        }
    };

    return (
        <div style={{
            maxWidth: 'fit-content',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            gap: '1rem'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Tilemap Demo</h1>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
            }}>
                <GameApp />
                <div style={{
                    maxWidth: 'fit-content',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: '1rem'
                }}>
                <h2>Texture</h2>
                <img 
                    id="texture"
                    src={imageSrc} 
                    alt="Demo Image" 
                    style={{
                        width: '300px',
                        height: '300px',
                        objectFit: 'contain',
                    }}
                />
                Cell Width:<input id="cellWidth" type="number" defaultValue={16}></input>
                Cell Height:<input id="cellHeight" type="number" defaultValue={16}></input>
                <button
                    style={{
                        padding: '0.5rem 1rem',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                    onClick={() => document.getElementById('fileInput').click()}
                >
                    Change Texture
                </button>
                <input
                    id="fileInput"
                    type="file"
                    accept="image/png, image/jpeg"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                </div>
            </div>
            <textarea style={{
                width: '300px', // Example width for the textarea
                height: '100px', // Example height
            }} id="tilemapData" defaultValue={initialData}></textarea>
            Tilemap X:<input id="tilemapX" type="number" defaultValue={-2.5}></input>
            Tilemap Y:<input id="tilemapY" type="number" defaultValue={-2}></input>
            <button id="tilemapButton">Set</button>
        </div>
    );
}
