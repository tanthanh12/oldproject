import "./ProductDetail.css";
import phone from "../../img/galaxy-s23-fe.png";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Label, Container } from "reactstrap";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Row,
} from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import axios from "axios";

export default function ProductDetail() {
  const {id} = useParam();
  const [data, setData] = useState([]);
  const getData = () => {
    const url = `https://6518dbbd818c4e98ac5ff3ae.mockapi.io/api-product${id}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const addCart = (id) => {
    const item = products.find((item) => item.id == id);
    const index = cart.findIndex((item) => item.id == id);
    if (index > 0) {
      let newCart = cart;
      newCart[index]["quality"]++;
      setCart(newCart);
      localStorage.setItem("cart-list", JSON.stringify(newCart));
    } else {
      setCart([...cart, { item, quality: 1 }]);
      localStorage.setItem(
        "cart-list",
        JSON.stringify([...cart, { item, quality: 1 }])
      );
    }
  };
  const [activeTab, setActiveTab] = useState();
  const toggleTab = (tabId) => {
    setActiveTab(tabId);
  };

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="product-detail">
        <Container>
          <div className="detail-top">
            <div className="left">
              <img src={phone} alt=""></img>
            </div>
            <div className="right">
              {data.map((item, index) => {
                if (item.id == 8)
                  return (
                    <div key={index}>
                      <div className="info">
                        <h4>{item.name}</h4>
                        <div className="star">
                          <span>{item.rating}</span>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="price">
                          <h5>{item.price} đ</h5>
                        </div>
                      </div>
                    </div>
                  );
              })}
              <div className="classify">
                <div className="color">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="number">
                <ButtonGroup>
                  <Button onClick={decrement}>-</Button>
                  <span>{count}</span>
                  <Button onClick={increment}>+</Button>
                </ButtonGroup>
                <div className="button">
                  <Button className="buy" href="/address/">
                    MUA NGAY
                  </Button>
                  <Button className="add" href="/s-product" onClick={addCart}>
                    THÊM VÀO GIỎ HÀNG
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="desc">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => toggleTab("1")}
                >
                  Giới thiệu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => toggleTab("2")}
                >
                  Review
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <p>
                      Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ
                      đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
                      vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn
                      so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội
                      dung, nội dung" là nó khiến văn bản giống thật hơn, bình
                      thường hơn.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <p></p>
                    <div className="product-review">
                      <div className="spr-container">
                        <div className="spr-header">
                          <h2 class="spr-header-title">Bình luận </h2>
                          <div class="spr-summary">
                            <span class="spr-summary-caption">
                              Chưa có bình luận
                            </span>
                          </div>
                          <div className="spr-content">
                            <div className="spr-form">
                              <Form id="form-review">
                                <Row>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label>Họ tên</Label>
                                      <Input
                                        placeholder="Nhập tên của bạn"
                                        type="text"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label>Email</Label>
                                      <Input
                                        placeholder="Nhập email của bạn"
                                        type="email"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <FormGroup>
                                  <Label>Đánh giá</Label>
                                  <div class="rating-star ">
                                    <a
                                      href="#"
                                      onclick="SPR.setRating(this);return false;"
                                      class="fa-regular fa-star"
                                      data-value="1"
                                      aria-label="1 of 5 stars"
                                    ></a>
                                    <a
                                      href="#"
                                      onclick="SPR.setRating(this);return false;"
                                      class="fa-regular fa-star"
                                      data-value="2"
                                      aria-label="2 of 5 stars"
                                    ></a>
                                    <a
                                      href="#"
                                      onclick="SPR.setRating(this);return false;"
                                      class="fa-regular fa-star"
                                      data-value="3"
                                      aria-label="3 of 5 stars"
                                    ></a>
                                    <a
                                      href="#"
                                      onclick="SPR.setRating(this);return false;"
                                      class="fa-regular fa-star"
                                      data-value="4"
                                      aria-label="4 of 5 stars"
                                    ></a>
                                    <a
                                      href="#"
                                      onclick="SPR.setRating(this);return false;"
                                      class="fa-regular fa-star"
                                      data-value="5"
                                      aria-label="5 of 5 stars"
                                    ></a>
                                  </div>
                                </FormGroup>
                                <FormGroup>
                                  <Label>Lời bình luận</Label>
                                  <Input
                                    placeholder="Hãy viết cảm nghĩ của bạn về sản phẩm"
                                    type="textarea"
                                  />
                                </FormGroup>
                                <Button color="primary" size="lg">
                                  Bình luận
                                </Button>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p></p>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          <div className="related">
            <h3>Sản phẩm liên quan</h3>
            <Row>
              {data.map((item, index) => {
                if (item.id > 4 && item.id < 10 && item.id != 8)
                  return (
                    <Col md="3" sm="6" xs="12" key={index}>
                      <Card>
                        <CardImg
                          alt="Card image cap"
                          src={item.imgSrc}
                          top
                          width="100%"
                        />
                        <CardBody>
                          <CardTitle tag="p">{item.name}</CardTitle>
                          <CardText tag="h5">{item.price} đ</CardText>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            <span>{item.rating}</span>
                            <i class="fa-solid fa-star"></i>
                          </CardSubtitle>
                        </CardBody>
                      </Card>
                    </Col>
                  );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
