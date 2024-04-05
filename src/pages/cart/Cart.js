import "./Cart.css";
import {
  Button,
  ButtonGroup,
  Col,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import React, { useState } from "react";

export default function Cart() {
  const { handle_delete, product } = props;
  const [count, setCount] = useState(0);
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
      <div className="total-cart">
        <div>
          <Breadcrumb className="crumb">
            <BreadcrumbItem>
              <a href="/home/">
                <i class="fa-solid fa-house"></i>
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Giỏ hàng</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="main-title">
          <h3>Giỏ hàng</h3>
        </div>
        <div className="cart">
          <div className="left">
            <div className="content-top">
              <div className="line">
                <Row>
                  <Col md="6" className="name-title">
                    <FormGroup check>
                      <Input type="checkbox" />
                      <Label check>Sản phẩm</Label>
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <h6>Đơn giá</h6>
                  </Col>
                  <Col md="2">
                    <h6>Số lượng</h6>
                  </Col>
                  <Col md="2">
                    <h6>Thành tiền</h6>
                  </Col>
                </Row>
              </div>
              <Row className="detail">
                <Col md="6" className="product-info">
                  <FormGroup row className="text-center">
                    <Col>
                      <FormGroup check>
                        <Input id="checkbox" type="checkbox" />{" "}
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <img src={product.imgSrc}></img>
                  <div className="review">
                    <h6>ipad</h6>
                    <p>Màu:Xám</p>
                  </div>
                </Col>
                <Col md="2">
                  <h6>3.000.000</h6>
                </Col>
                <Col md="2">
                  <div className="count">
                    <div className="number-count">
                      <ButtonGroup>
                        <Button onClick={decrement}>-</Button>
                        <span>{count}</span>
                        <Button onClick={increment}>+</Button>
                      </ButtonGroup>
                    </div>
                    <div className="delete">
                      <p onClick={() => handle_delete(product.id)}>Xóa</p>
                    </div>
                  </div>
                </Col>
                <Col md="2">
                  <h6>{product.price}</h6>
                </Col>
              </Row>
            </div>
          </div>
          <div className="right">
            <div className="content-bottom">
              <div className="temporary">
                <div className="title">
                  <h6>
                    Tạm tính <span>({count} sản phẩm )</span>:
                  </h6>
                  <h6>Khuyến mãi:</h6>
                  <h6>Phí vận chuyển:</h6>
                </div>
                <div className="description">
                  <h6>{product.price * count}đ</h6> 
                  <h6>200.000 đ</h6>
                  <h6>10.000 đ</h6>
                </div>
              </div>
              <div className="voucher">
                <h5>Mã giảm giá</h5>
                <InputGroup>
                  <Input placeholder="Nhập mã giảm giá" />
                  <Button>Áp dụng</Button>
                </InputGroup>
              </div>
              <div className="total-price">
                <div className="reward-points">
                  <h6>Tổng tiền:</h6>
                  <h6>Điểm tích lũy:{(product.price * count) / 10} </h6>
                </div>
                <div className="number-reward">
                  <h6>5.000.000 đ</h6>
                  <h6>500 điểm</h6>
                </div>
              </div>
              <div className="order">
                <Button>Đặt hàng</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
