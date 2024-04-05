import { Breadcrumb, BreadcrumbItem, Button, Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Row } from "reactstrap";
import "./Address.css";

export default function Address() {
  return (
    <>
    <Container>
      <div className="address-form">
      <div>
            <Breadcrumb className="crumb">
                        <BreadcrumbItem>
                            <a href="/home/">
                                <i class="fa-solid fa-house"></i>
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Địa chỉ giao hàng</BreadcrumbItem>
                    </Breadcrumb> 
          </div>
      <h3>Chọn địa chỉ giao hàng</h3>
        <Form>
          <FormGroup>
            <Label for="name">Họ và tên</Label>
            <Input id="name" name="name" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="telephone">Số điện thoại</Label>
            <Input id="phone" name="telephone" type="number" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label for="select">Tỉnh / Thành phố</Label>
            <Input id="select" name="select" type="select">
              <option>Hồ Chí Minh</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="select_2">Quận / Huyện</Label>
            <Input id="select_2" name="select_2" type="select">
              <option> Quận 1</option>
              <option> Quận 2</option>
              <option> Quận 3</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="select_3">Phường / Xã</Label>
            <Input id="select_3" name="select_3" type="select">
              <option>Phường 1</option>
              <option>Phường 2</option>
              <option>Phường 3</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">Số nhà / Tên đường</Label>
            <Input id="name" name="name" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="text">Điều cần lưu ý</Label>
            <Input id="text" name="text" type="textarea" />
          </FormGroup>
        </Form>
      </div>
      <div>
        <Row className="countine-button">
       <Button size="lg" href="/payment/">Tiếp tục</Button>
        </Row>
      </div>
      </Container>
    </>
  );
}
