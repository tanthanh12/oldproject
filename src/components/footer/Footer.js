import { Col, Container, Row } from "reactstrap";
import logo from "../../logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col md="3">
              <img src={logo}></img>
              <p>
                Một thực tế đã được chứng minh từ lâu là người đọc sẽ bị phân
                tâm bởi nội dung có thể đọc được của một trang...
              </p>
              <div className="footer-icon">
                <Link to="https://www.facebook.com/?locale=vi_VN">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="https://twitter.com/?lang=vi">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
                <Link to="https://www.google.com.vn/?hl=vi">
                  <i class="fa-brands fa-google-plus-g"></i>
                </Link>
                <Link to="https://www.instagram.com/">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </Col>
            <Col md="3" className="buy">
              <h5>Chính sách mua hàng</h5>
              <div className="sub">
                <ul>
                  <li>
                    <Link to="#">Chính sách bảo hành</Link>
                  </li>
                  <li>
                    <Link to="#">Chính sách thanh toán</Link>
                  </li>
                  <li>
                    <Link to="#">Chính sách đổi trả</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3" className="support">
              <h5>Hỗ trợ khách hàng</h5>
              <div className="sub">
                <ul>
                  <li>
                    <Link to="#">Hướng dẫn mua hàng online</Link>
                  </li>
                  <li>
                    <Link to="#">Chính sách trả góp</Link>
                  </li>
                  <li>
                    <Link to="#">Dịch vụ sửa chữa</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <h5>Thông tin liên hệ</h5>
                <div className="address">
                  <i class="fa-solid fa-house"></i>
                  <p>
                    Địa chỉ: 515 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1,
                    Thành phố Hồ Chí Minh.
                  </p>
                </div>
                <div className="email">
                  <i class="fa-solid fa-envelope"></i>
                  <p>Email: MyTECH@gmail.com</p>
                </div>
                <div className="phone">
                  <i class="fa-solid fa-mobile-screen"></i>
                  <p>Phone: 0(1234) 567 890</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md="6">
              <p>©2016 MyTech.Com. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
