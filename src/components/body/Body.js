import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  CardLink,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Container,
} from "reactstrap";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  Col,
  Row,
} from "reactstrap";
import "./Body.css";

export default function Body() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/api-product";
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
  const items = [
    {
      src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/11/banner/Le-hoi-OPPO-720-220-720x220-2.png",
      altText: "",
      caption: "",
      key: 1,
    },
    {
      src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/11/banner/XIAOMI-LEHOI-720-220-720x220.png",
      altText: "",
      caption: "",
      key: 2,
    },
    {
      src: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/10/banner/LAP-GAMING-720-220-720x220.png",
      altText: "",
      caption: "",
      key: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  const [news, setNews] = useState([
    {
      id: 1,
      name: "Trên tay Geekom mini IT13: Mini PC với ngoại hình gọn nhẹ, hiệu năng mạnh mẽ và mức giá phải chăng",
      imgSrc:
        "https://cdn.tgdd.vn/Files/2023/11/03/1553950/9_0-071123-091529-800-resize.jpg",
      date: "5 ngày trước",
    },
    {
      id: 2,
      name: "Kỳ vọng Xiaomi 16 Pro Concept: Cấu hình nâng cấp với chip Snapdragon 8 Gen 5, cải tiến thời lượng pin",
      imgSrc: "https://cdn.tgdd.vn/2023/11/content/5-800x450-7.jpg",
      date: "2 ngày trước",
    },
    {
      id: 3,
      name: "Apple phát hành iOS 17.2 và iPadOS 17.2 Beta 3 cho các nhà phát triển, có gì mới?",
      imgSrc: "https://cdn.tgdd.vn/2023/11/content/tt-800x450-3.jpg",
      date: "3 ngày trước",
    },
  ]);
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
  return (
    <>
      <Container>
        <div className="banner">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <div className="home-content">
          <div className="new-arrivals">
            <div className="title">
              <h3>TOP BÁN CHẠY</h3>
            </div>
            <Row>
              {data.map((item, index) => {
                if (item.id < 5)
                  return (
                    <Col md="3" sm="6" xs="12" key={index}>
                      <Card>
                        <CardImg src={item.imgSrc} top width="100%" />
                        <CardBody>
                          <CardTitle tag="p">{item.name}</CardTitle>
                          <CardText tag="h5">{item.price} đ</CardText>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            <span>{item.rating}</span>
                            <i class="fa-solid fa-star"></i>
                          </CardSubtitle>
                          <div className="button">
                            <Button className="add">THÊM VÀO GIỎ HÀNG</Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  );
              })}
            </Row>
            <div className="more">
              <a href="#">XEM THÊM</a>
            </div>
          </div>
          <div className="featured-collection">
            <div className="title">
              <h3>TOP NỔI BẬT</h3>
            </div>
            <Row>
              {data.map((item, index) => {
                if (item.id > 5 && item.id < 10 && item.id != 8)
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
                          <div className="button">
                            <Button className="add" onClick={addCart}>THÊM VÀO GIỎ HÀNG</Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  );
              })}
              {data.map((item, index) => {
                if (item.id == 8)
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
                          <CardLink href="/product-detail/">
                            <CardTitle tag="p">{item.name}</CardTitle>
                          </CardLink>
                          <CardText tag="h5">{item.price} đ</CardText>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            <span>{item.rating}</span>
                            <i class="fa-solid fa-star"></i>
                          </CardSubtitle>
                          <div className="button">
                            <Button className="add" onClick={addCart}>THÊM VÀO GIỎ HÀNG</Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  );
              })}
            </Row>
            <div className="more">
              <a href="#">XEM THÊM</a>
            </div>
          </div>
          <div className="title">
            <h4>Gợi ý cho bạn</h4>
          </div>
          <div className="product-list">
            <Row>
              {data.map((item, index) => {
                if (item.id > 2)
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
          <div className="blog">
            <div className="title">
              <h4>TIN CÔNG NGHỆ</h4>
              <a href="/home-blog/">
                <span>XEM THÊM</span>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <Row>
              {news.map((id, index) => {
                return (
                  <Col md="4" sm="6" xs="12" key={index}>
                    <Card className="my-2">
                      <CardImg
                        alt="Card image cap"
                        src={id.imgSrc}
                        style={{
                          height: 180,
                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="p">{id.name}</CardTitle>
                        <CardText>
                          <small className="text-muted">
                            Đăng vào {id.date}
                          </small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
