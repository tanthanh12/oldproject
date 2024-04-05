import "./Cart.css";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import React, { useState } from "react";
export default function Cart(props) {
  const { handle_delete, product, convertMoney, count, increase, decrease } =
    props;

  return (
    <>
      <div className="detail">
        <Row>
          <Col md="6" xs="6" className="product-info">
            <FormGroup row className="text-center">
              <Col>
                <FormGroup check>
                  <Input id="checkbox" type="checkbox" />{" "}
                </FormGroup>
                <img src={product.imgSrc}></img>
              </Col>
            </FormGroup>
            <div className="review">
              <h6>{product.name}</h6>
              <p>Màu:Xám</p>
            </div>
          </Col>
          <Col md="2" xs="3">
            <h6>{product.price}</h6>
          </Col>
          <Col md="2" xs="2">
            <div className="count">
              <ButtonGroup>
                <Button onClick={decrease}>-</Button>
                <span>{count}</span>
                <Button onClick={increase}>+</Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col md="2" xs="2">
            <div className="delete">
              <Button onClick={() => handle_delete(product.id)}>Xóa</Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
