import GameApp from "./GameApp";

export default function App() {
    return (
        <div style={{
            maxWidth: 'fit-content',
            margin: 'auto',
        }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h1>Particle Demo</h1>
                <p>Move mouse to control green particle</p>
                <p>Left click to toggle green particle</p>
            </div>
            <GameApp/>
        </div>
    )
}