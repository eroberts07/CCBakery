import { Parallax } from 'react-parallax';
import Splash from '../Images/splashimage.jpg';

const Container = () => (
    <Parallax className='paraImage' bgImage={Splash} bgImageAlt="the cat" strength={500}>
        <div className="parallax">
        <div className="para-text">
            <h2>Satisfy your Sweet Tooth</h2>
        </div>
        </div>
    </Parallax>
);

export default Container;