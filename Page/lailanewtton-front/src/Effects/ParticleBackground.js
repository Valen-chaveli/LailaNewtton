import Particles from 'react-tsparticles';
import particlesConfig from "../Config/particlesConfig";

export const ParticleBackground = () => {
    return (
        <Particles params={particlesConfig} options={ { fullScreen: { enable:false } } }
            style={{
                position: 'absolute',
                top: "0",
                left: "0"
            }}
        />
    )
}