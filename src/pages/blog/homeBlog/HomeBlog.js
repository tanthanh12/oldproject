import { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
} from "reactstrap";
import {Link } from "react-router-dom";
import "./HomeBlog.css";

export default function HomeBlog() {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      name: "Instagram ra mắt loạt tính năng chỉnh sửa video mới, cải tiến Reels và Filter",
      desc: "Instagram hiện đang triển khai một bản cập nhật lớn mang đến cho người dùng loạt công cụ chỉnh sửa video mới, cải tiến Reels và thêm nhiều Filter sáng tạo hơn.",
      imgSrc:
        "https://cdn.tgdd.vn/2023/11/content/Ban-cap-nhat-Instagram-moi-se-giup-nguoi-dung-thoa-suc-sang-tao-Reels-theo-cach-rieng-800x450.jpg",
     
    },
    {
      id: 2,
      name: "Rò rỉ thông số kĩ thuật của Samsung Galaxy Book 4 Ultra: Intel Core Ultra 7 155H, màn hình QHD+, Wi-Fi 6E",
      desc: "Samsung dự kiến sẽ ra mắt dòng sản phẩm laptop Galaxy Book 4 trong tháng này. Vài ngày trước, thiết kế và một vài tính năng của Galaxy Book 4 series đã được tiết lộ.",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/12/samsung-galaxy-book-4-ultra-thong-so-1.jpg",
    },
    {
      id: 3,
      name: "Thêm tính năng “đỉnh” của Xiaomi 14 Ultra vừa được hé lộ",
      desc: "Trong vài tuần trở lại đây, chúng ta đã được nhìn thấy khá nhiều thông tin rò rỉ về flagship Xiaomi 14 Ultra dự kiến được Samsung ra mắt vào đầu năm sau.",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/12/Xiaomi-14-Ultra-van-tay-sieu-am-cover.jpeg",
    },
    { id: 4,
      name: "Hình ảnh thực tế của OPPO Find X7 Pro tiếp tục được rò rỉ",
      desc: "OPPO dự kiến sẽ sớm trình làng Find X7 series tại thị trường Trung Quốc. Các thông tin về Find X7 và Find X7 Pro đã bắt đầu được rò rỉ.",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/12/Cover-1.jpg",
      
    },
    {
      id: 5,
      name: "4 nâng cấp đáng mong chờ trên dòng Galaxy S24 sắp ra mắt",
      desc: "Những tính năng được đề cập trong bài viết dưới đây sẽ là sự bổ sung tuyệt vời cho mẫu flagship Galaxy S24 dự kiến được Samsung ra mắt vào đầu năm sau.",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/12/tinh-nang-mong-cho-tren-galaxy-s24-series-1.jpeg",
    },
    {
      id: 6,
      name: 'Tải "tất tần tật" nội dung trên Instagram trong một nốt nhạc với Vidinsta mà dân chuyên chưa chắc biết',
      desc: "Ngày nay, việc chia sẻ và lưu trữ nội dung từ các nền tảng mạng xã hội, đặc biệt là Instagram, trở nên ngày càng quan trọng trong cuộc sống của chúng ta. Những khoảnh khắc độc đáo, video sáng tạo, và ảnh đẹp có thể trở thành một phần quan trọng của kí ức cá nhân và sự phát triển chuyên nghiệp. ",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/12/Vidinsta-th.jpg",
    },
    {
      id: 7,
      name: "Những mẹo hay trên iPhone siêu hữu ích mà bạn thường bỏ qua",
      desc: "Trong thế giới hiện đại, chiếc iPhone đã trở thành người bạn đồng hành không thể thiếu trong cuộc sống hàng ngày của chúng ta với những mẹo hay trên iPhone siêu tiện dụng. Tuy nhiên, có một sự thật là đa số chúng ta chỉ sử dụng một phần nhỏ của những tính năng thú vị và tiện ích mà thiết bị này mang lại.",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/meo-iphone-th.jpg",
    },
    {
      id: 8,
      name: "Công nghệ AI là gì? Ứng dụng của trí tuệ nhân tạo AI",
      desc: "Trong những năm gần đây, AI là thuật ngữ ngày càng trở nên phổ biến và hiện hữu trong cuộc sống con người. Vậy công nghệ trí tuệ nhân tạo AI là gì? Ứng dụng công nghệ AI trong thực tiễn đời sống như thế nào? Có nên học ngành này không? Hãy cùng tìm hiểu ngay sau đây nhé!",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/ai-la-gi-thumbnail.jpg",
    },
    {
      id: 9,
      name: "Nêu bật là gì trên Facebook? Cách nêu bật và tắt thông báo",
      desc: 'Nêu bật là gì trên Facebook? Cách tag nêu bật và tại sao không nêu bật được trên Facebook đang là câu hỏi mà nhiều bạn sử dụng Facebook quan tâm. Trong bài viết này, chúng ta sẽ khám phá khái niệm và cách thức đơn giản để thực hiện việc "tag nêu bật" nhằm tối ưu hóa tương tác và tạo nên một dấu ấn đặc biệt trong thế giới mạng xã hội này.',
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/neu-bat-la-gi-cach-neu-bat-tren-facebook-thumb.jpg",
    },
    {
      id: 10,
      name: "So sánh Xiaomi 14 Pro và iPhone 15 Pro: Lựa chọn nào “đáng tiền” hơn?",
      desc: "Xiaomi gần đây đã phát hành chiếc flagship mới và tốt nhất của hãng là Xiaomi 14 Pro. Sở hữu hàng loạt nâng cấp ấn tượng và tính năng cao cấp, đây được xem là đối thủ “sừng sỏ” của iPhone 15 Pro trong phân khúc smartphone siêu cao cấp.",
      imgSrc:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/12/so-sanh-iphone-15-pro-xiaomi-14-pro.jpg",
    },
  ]);
  return (
    <>
      <div className="cate">
        <Container>
          <div className="section1">
          
            <Row>
            <h3>BÀI VIẾT MỚI</h3>
              <div className="banner-group">
                <div className="banner">
                  {newsList.map((item, index) => {
                    if (item.id == 1) {
                      return (
                        <Card key={index} >
                          <CardImg src={item.imgSrc} top width="100%" />
                          <CardBody>
                            <Link to ="/blog-detail/">
                            <CardTitle tag="h6">{item.name}</CardTitle>
                            </Link>
                            <CardText tag="p">{item.desc} </CardText>
                          </CardBody>
                        </Card>
                      );
                    }
                  })}
                </div>
                <div className="next-to-banner">
                  <div className="top-banner">
                    {newsList.map((item, index) => {
                      if (item.id == 2)
                        return (
                          <Card key={index}>
                            <CardImg src={item.imgSrc} top width="100%" />
                            <CardBody>
                              <CardTitle tag="h6">{item.name}</CardTitle>
                            </CardBody>
                          </Card>
                        );
                    })}
                  </div>
                  <div className="bottom-banner">
                    {newsList.map((item, index) => {
                      if (item.id == 3)
                        return (
                          <Card key={index}>
                            <CardImg src={item.imgSrc} top width="100%" />
                            <CardBody>
                              <CardTitle tag="h6">{item.name}</CardTitle>
                            </CardBody>
                          </Card>
                        );
                    })}
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className="section2">
            <h3>TẤT CẢ BÀI VIẾT</h3>
            {newsList.map((item, index) => {
              if (item.id > 3)
                return (
                  <Card key={index}>
                    <CardBody>
                      <CardImg src={item.imgSrc} top width="100%" />
                      <CardTitle tag="h6">{item.name}</CardTitle>
                    </CardBody>
                  </Card>
                );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
