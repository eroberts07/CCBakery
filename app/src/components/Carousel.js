import Carousel from 'react-bootstrap/Carousel';
import CCCOOKIE from '../Images/CCCOOKIE.JPG';
import PBCOOKIE from '../Images/PBCOOKIE.JPEG';
import PBCOOKIE2 from '../Images/PBCOOKIE2.JPEG';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100 h-25"
          src={CCCOOKIE}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Delicious Food On Demand</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-25"
          src={PBCOOKIE}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fast and Easy Shipping</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-25"
          src={PBCOOKIE2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Local Pickup Available</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
