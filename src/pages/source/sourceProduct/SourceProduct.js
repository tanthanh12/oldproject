import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Col, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import Cart from "../../../components/cart/Cart";
import "./SourceProduct.css";

export default function SourceProduct() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            name: "Laptop Dell Inspiron 15 3520 i3 1215U OfficeHS/Win11 (i3U082W11BLU)",
            desc: "Laptop Dell Inspiron 15 3520 i3 1215U (i3U082W11BLU) nhắm trực tiếp đến đối tượng người dùng là sinh viên và nhân viên văn phòng với lối thiết kế thanh lịch, cấu hình có thể vận hành ổn định mọi tác vụ thường ngày, một chiếc laptop học tập - văn phòng mà bạn không nên bỏ qua.",
            price: "10.990.000",
            imgSrc: "components/img/thumbnail/dell-inspiron-i3.jpg",
        },
        {
            id: 2,
            name: "Laptop Lenovo Legion 5 15IAH7 i5 12500H RTX3050Ti/165Hz/Win11 (82RC003WVN)",
            desc: "Laptop Lenovo Legion 5 15IAH7 i5 12500H (82RC003WVN) gây ấn tượng bởi lối thiết kế đậm chất thể thao, mạnh mẽ với khả năng vận hành mượt mà mọi tựa game từ nhẹ đến nặng, giúp các cao thủ chiến game đầy tự tin và tận hưởng những giây phút đỉnh cao trong chiến trường ảo.",
            price: "30.590.000",
            imgSrc: "components/img/thumbnail/dell-inspiron-i5.jpg",
        },
        {
            id: 3,
            name: "Laptop Dell Vostro 5620 i5 1240P OfficeHS/Win11 (V6I5001W1) ",
            desc: "Laptop Dell Vostro 5620 i5 (V6I5001W1) có lối thiết kế đơn giản nhưng hiện đại, sở hữu cấu hình mạnh mẽ đến từ bộ vi xử lý Intel Gen 12 đi cùng màn hình kích thước lớn hỗ trợ mình giải quyết mọi tác vụ trong cả công việc và học tập.",
            price: "16.990.000",
            imgSrc: "components/img/thumbnail/lenovo-legion-i5.jpg",
        },
        {
            id: 4,
            name: "Máy tính bảng iPad Air 5 M1 WiFi ",
            desc: "iPad Air 5 M1 WiFi đã được công bố tại sự kiện Peek Performance diễn ra hôm 9/3 (theo giờ Việt Nam). Năm nay Apple đã có những thay đổi lớn về cả hiệu năng và bổ sung màu sắc mới cho thiết bị.",
            price: "14.090.000",
            imgSrc: "components/img/thumbnail/ipad-air-5-m1-xanh-duong.jpg",
        },
        {
            id: 5,
            name: "Máy tính bảng Xiaomi Redmi Pad SE ",
            desc: "Xiaomi tiếp tục cho ra mắt mẫu sản phẩm máy tính bảng mới nhất của mình (09/2023), được biết đến với tên gọi Xiaomi Redmi Pad SE. Với thiết kế viền kim loại lộng lẫy, sản phẩm này kết hợp sự tinh tế với khả năng hoạt động mạnh mẽ để đáp ứng toàn bộ nhu cầu liên quan đến công việc và giải trí của người dùng.",
            price: "4.990.000",
            imgSrc: "components/img/thumbnail/xiaomi-pad-se-xam.jpg",

        },
        {
            id: 6,
            name: "Máy tính bảng Samsung Galaxy Tab A7 Lite",
            desc: "Máy tính bảng Samsung Galaxy Tab A7 Lite một phiên bản rút gọn của dòng máy tính bảng 'ăn khách' Galaxy Tab A7 thuộc thương hiệu Samsung, đáp ứng nhu cầu giải trí của khách hàng thuộc phân khúc bình dân với màn hình lớn nhưng vẫn gọn nhẹ hợp túi tiền.",
            price: "3.490.000",
            imgSrc: "components/img/thumbnail/samsung-galaxy-tab-a7-lite.jpg",

        },
        {
            id: 7,
            name: "Điện thoại iPhone 15 Pro Max",
            desc: "iPhone 15 Pro Max mẫu điện thoại mới nhất của Apple cuối cùng cũng đã chính thức được ra mắt vào tháng 09/2023. Mẫu điện thoại này sở hữu một con chip với hiệu năng mạnh mẽ Apple A17 Pro, màn hình đẹp mắt và cụm camera vô cùng chất lượng.",
            price: "33.990.000",
            imgSrc: "components/img/thumbnail/iphone-15-pro-max-tu-nhien.jpg",
        },
        {
            id: 8,
            name: " Điện thoại Samsung Galaxy S23 FE ",
            desc: "Samsung tiếp tục chinh phục thị trường điện thoại thông minh với phiên bản Samsung Galaxy S23 FE 5G mới. Mẫu điện thoại này được định hình là sản phẩm cận cao cấp với những điểm nổi bật có thể kể đến như: Cấu hình mạnh, camera 50 MP có khả năng quay video 8K đi cùng màn hình 120 Hz.",
            price: "13.890.000",
            imgSrc: "components/img/thumbnail/galaxy-s23-fe.jpg",
        },
        {
            id: 9,
            name: "Điện thoại OPPO Reno10 5G",
            desc: "Đến hẹn lại lên, hãng điện thoại OPPO tiếp tục cho ra mắt sản phẩm OPPO Reno10 5G 128GB tại thị trường Việt Nam trong năm 2023. Điện thoại mang trong mình lối thiết kế đẹp mắt, hiệu năng mượt mà xử lý tốt mọi tác vụ, đi cùng bộ ba camera mang đến những bức ảnh đẹp mắt.",
            price: "9.490.000",
            imgSrc: "components/img/thumbnail/oppo-reno10-pro-xam.jpg",
        },
        {
            id: 10,
            name: "Điện thoại Xiaomi 13 Lite 5G",
            desc: "Hãng Xiaomi đã ra mắt mẫu điện thoại Xiaomi 13 Lite 5G, tiếp tục thành công từ dòng flagship Xiaomi 13 series. Được xem là dòng sản phẩm tầm trung, Xiaomi 13 Lite 5G có nhiều điểm nổi bật như sử dụng chipset mới từ Qualcomm và hệ thống camera đáng chú ý trong phân khúc.",
            price: "9.490.000",
            imgSrc: "components/img/thumbnail/xiaomi-13-xanh.jpg",
        },
    ]);
    const handle_delete = (id) => {
        const newList = productList.filter((item) => item.id !== id)
        setProductList(newList);
    }
    const handle_add = (text) => {
        if (productList.length == 0) {
            setProductList([...productList, { id: 1, name: text, check: false }])
        }
        else
            setProductList([...productList, { id: productList[productList.length - 1].id + 1, name: text, check: false }])
    }
    console.log(productList);
    return (
        <div className="source-p">
            <div className="total-cart">
                <div>
                    {/* <Breadcrumb className="crumb">
                        <BreadcrumbItem>
                            <a href="/home/">
                                <i class="fa-solid fa-house"></i>
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Giỏ hàng</BreadcrumbItem>
                    </Breadcrumb> */}
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
                            <div>
                                {productList.map((item, index) => (
                                    <Cart key={index} product={item} handle_delete={handle_delete} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="content-bottom">
                            <div className="temporary">
                                <div className="title">
                                    <h6>
                                        Tạm tính:
                                    </h6>
                                    <h6>Khuyến mãi:</h6>
                                    <h6>Phí vận chuyển:</h6>
                                </div>
                                <div className="description">
                                    <h6>111</h6>
                                    <h6>111</h6>
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
                                    <h6>Điểm tích lũy: </h6>
                                </div>
                                <div className="number-reward">
                                    <h6>111 đ</h6>
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
        </div>
    )
}
