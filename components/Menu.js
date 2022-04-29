import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from "react-bootstrap";

function menuIndex() {
  if (window.location.href.indexOf('home') > 0) {
    return 1
  }

  if (window.location.href.indexOf('orders') > 0) {
    return 2
  }

  if (window.location.href.indexOf('admin') > 0) {
    return 3
  }

  return
}

function Menu() {
  return (
    <Navbar bg="light" variant="light" style={{padding: '10px 40px'}}>
      <Container style={{justifyContent: 'flex-start'}}>
        <Navbar.Brand href="/home">
        <img
          src={require('../images/logo.png')}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />{' '}
        Почта РФ</Navbar.Brand>
        <Nav variant="tabs" activeKey={menuIndex()}>
          <Nav.Item>
            <Nav.Link eventKey="1" href="/home">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" href="/orders">
              Поиск письма
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" href="/admin">
              Список писем в БД
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
