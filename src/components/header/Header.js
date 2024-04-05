import { useState } from "react";
import logo from "../../logo.png";
import "./Header.css";
import {
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  UncontrolledDropdown,
  Input,
  InputGroup,
  Button,
  Container,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Container>
        <div className="header-top">
          <Row>
            <Col md="2">
              <div className="image">
                <img src={logo} href="/home/"></img>
              </div>
            </Col>
            <Col md="4" xs="12">
              <div className="find">
                <InputGroup>
                  <Input placeholder="Bạn cần tìm gì" />
                  <Button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </InputGroup>
              </div>
            </Col>
            <Col md="6" xs="12">
              <div className="icon">
                <div className="i-user">
                  <i class="fa-solid fa-user" id="user-icon"></i>
                  <Link to="/login/">
                    <span className="user-link">Tài khoản</span>
                  </Link>
                </div>
                <div className="liking">
                  <i class="fa-regular fa-heart" id="heart-icon"></i>
                  <span className="number-heart">0</span>
                </div>
                <div className="i-cart">
                  <Link to="/s-product/" id="cart">
                    <i class="fa-solid fa-cart-shopping">
                      <span className="number">0</span>
                    </i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="nav-header">
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <div className="image">
                <img src={logo} href="/home/"></img>
              </div>
              <div className="find">
                <InputGroup>
                  <Input placeholder="Bạn cần tìm gì" />
                  <Button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </InputGroup>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="#">
                    <i class="fa-solid fa-laptop"></i>
                    <span>Laptop</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i class="fa-solid fa-tablet-screen-button"></i>
                    <span>Máy tính bảng</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <span>Điện thoại</span>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i class="fa-solid fa-headphones"></i>
                    <span>Phụ kiện</span>
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>Loa bluetooth</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Tai nghe</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Sạc dự phòng</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="account">
                  <NavLink href="/login/">
                    <span>Tài khoản</span>
                    </NavLink>
                </NavItem>
                <NavItem className="logout">
                  <NavLink>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Đăng xuất</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}
Header.propTypes = {
  direction: PropTypes.string,
};
export default Header;
