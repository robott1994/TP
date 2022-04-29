import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"

function Home() {
  return (
    <>
      <Carousel variant="light" fade={true} controls={false} indicators={false} style={{position: 'fixed', top: 0, left: 0, zIndex: '-1', width: '100%', height: '100%', display: 'flex', }}>

          <img
            className="d-block"
            style={{width: '100%', minHeight: '100%'}}
            src={require("../images/bg1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2><b>Почта РФ</b></h2>
            <h2><b>Отправь письмо быстро и удобно.</b></h2>
          </Carousel.Caption>


      </Carousel>
    </>
  );
}

export default Home;
