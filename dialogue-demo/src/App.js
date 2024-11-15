import GameApp from "./GameApp";

export default function App() {
    return (
        <div style={{
            maxWidth: 'fit-content',
            margin: 'auto',
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Dialogue Demo</h1>
            </div>
            <GameApp/>
        </div>
    )
}