import { Game, Scene, GameObject, Transform, OrthographicCamera, PlatformType, Particle, Color, Script, Cursor } from '@mfkucuk/banana-js';

export default function GameApp() {
    return (
        <Game name='Particle Demo' width={600} height={600} platform={PlatformType.Web}>
            <Cursor/>

            <Scene>
                <GameObject name="Camera">
                    <Transform/>
                    <OrthographicCamera bgColor={[0, 0, 0, 1]}/>
                </GameObject>

                <GameObject name="Particle_Default">
                    <Transform/>
                    <Particle/>
                </GameObject>

                <GameObject name="Particle_Red">
                    <Transform position={[-2, 0, 0]}/>
                    <Particle color={Color.red}/>
                </GameObject>

                <GameObject name="Particle_Blue">
                    <Transform position={[2, 0, 0]}/>
                    <Particle color={Color.blue}/>
                </GameObject>

                <GameObject name="Particle_Rain">
                    <Transform position={[0, -3, 0]}/>
                    <Particle color={[0, 0.3, 0.6, 1]} gravity={[0, -10, 0]} minTheta={0} maxTheta={Math.PI * 2}/>
                </GameObject>

                <GameObject name="Particle_Slow">
                    <Transform position={[-2, 2, 0]}/>
                    <Particle color={Color.white} count={20} minAge={0.3} maxAge={0.5} minSpeed={0.3} maxSpeed={0.6}/>
                </GameObject>

                <GameObject name="Particle_Slow_2">
                    <Transform position={[2, 2, 0]}/>
                    <Particle color={Color.purple} count={20} minAge={0.3} maxAge={0.5} minSpeed={0.3} maxSpeed={0.6}/>
                </GameObject>

                <GameObject name="Particle_Blast">
                    <Transform position={[0, 2, 0]}/>
                    <Particle color={Color.cyan} count={300} gravity={[0, 0, 0]} minTheta={0} maxTheta={Math.PI * 3}/>
                </GameObject>

                <GameObject name="Particle_Mouse_Controlled">
                    <Transform/>
                    <Particle color={Color.green}/>
                    <Script import={import('./scripts/ParticleMoveScript')}/>
                </GameObject>
            </Scene>
        </Game>
    )
}