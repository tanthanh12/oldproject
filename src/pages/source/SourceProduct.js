import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import "./SourceProduct.css";
import Cart from "../../components/cart/Cart";
import axios from "axios";
export default function SourceProduct(children) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "http://localhost:5678/product?id=8";
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
  const addCart = (id) => {
    const item = products.find((item) => item.id == id);
    const index = cart.findIndex((item) => item.id == id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
      localStorage.setItem("cart-list", JSON.stringify(newCart));
    } else {
      setCart([...cart, { item, quantity: 1 }]);
      localStorage.setItem(
        "cart-list",
        JSON.stringify([...cart, { item, quantity: 1 }])
      );
    }
  };
  const handle_delete = (id) => {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
    localStorage.setItem("cart-list", JSON.stringify(newList));
  };
  useEffect(() => {
    const storedData = localStorage.getItem("cart-list");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  const changeQuality = (id, count) => {
    const updatedCart = cart.map((item) => {
      if (item.id == id) {
        const newQuality = item.quality + count;
        if (newQuality == 0) {
          return null;
        }
        return { ...item, quality: newQuality };
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item !== null);

    setCart(filteredCart);
    localStorage.setItem("cart-list", JSON.stringify(filteredCart));
  };
  console.log(setData);
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
      var array = num.toString().split("");
      var index = -3;
      while (array.length + index > 0) {
        array.splice(index, 0, separator);
        index -= 4;
      }
      return array.join("");
    }
  }
  function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
  }
  return (
    <div className="source-p">
      <Container>
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
                    <Col md="6" xs="6 " className="name-title">
                      <FormGroup check>
                        <Input type="checkbox" />
                        <Label check>Sản phẩm</Label>
                      </FormGroup>
                    </Col>
                    <Col md="2" xs="2">
                      <h6>Đơn giá</h6>
                    </Col>
                    <Col md="2" xs="2">
                      <h6>Số lượng</h6>
                    </Col>
                  </Row>
                </div>
                <div>
                  {data.map((item, index) => (
                    <Cart
                      key={index}
                      product={item}
                      handle_delete={handle_delete}
                      convertMoney={convertMoney}
                      increase={increase}
                      decrease={decrease}
                      count={count}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="right">
              <div className="content-bottom">
                <div className="temporary">
                  <div className="title">
                    <h6>Tạm tính:</h6>
                    <h6>Khuyến mãi:</h6>
                    <h6>Phí vận chuyển:</h6>
                  </div>
                  <div className="description">
                    {data.map((item, index) => {
                      return (
                        <>
                          <h6>{convertMoney(item.pricecore * count)} </h6>
                        </>
                      );
                    })}
                    <h6>-200.000 đ </h6>
                    <h6>0 đ</h6>
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
                    <h6>Điểm tích lũy: </h6>
                  </div>
                  <div className="number-reward">
                    {data.map((item, index) => {
                      return (
                        <>
                          <h6>
                            {convertMoney(item.pricecore * count - 200000)} đ
                          </h6>
                        </>
                      );
                    })}
                    <h6>500 điểm</h6>
                  </div>
                </div>
                <div className="order">
                  <Button href="/address/">Đặt hàng</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
