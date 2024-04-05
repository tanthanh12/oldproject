import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import "./Success.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Success() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "http://localhost:5678/product?page_1&_limit=4";
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
  return (
    <>
      <Container>
      <div>
            <Breadcrumb className="crumb">
                        <BreadcrumbItem>
                            <a href="/home/">
                                <i class="fa-solid fa-house"></i>
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Thành công</BreadcrumbItem>
                    </Breadcrumb> 
          </div>
        <div className="top">
          <div className="block">
            <i class="fa-regular fa-thumbs-up"></i>
            <h6>Bạn đã đặt hàng thành công</h6>
          </div>
          <p>
            Mã đơn hàng: <span>IPD2579D11</span>
          </p>
          <p>
            Ngày đặt hàng: <span>11/11/2023</span>
          </p>
          <p>
            Cám ơn bạn đã đặt hàng ở MyTECH. Chúng tôi sẽ giao hàng đến bạn
            trong thời gian sớm nhất
          </p>
        <Button href="#">Tra cứu đơn hàng</Button>
        </div>
        <div className="bottom">
          <h3>Sản phẩm bán chạy</h3>
          <Row>
            {data.map((item, index) => {
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
                      <CardText tag="p">{item.price}</CardText>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <i class="fa-solid fa-star"></i>
                        <span>{item.rating}</span>
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
}
