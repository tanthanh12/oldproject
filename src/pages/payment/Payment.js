import "./Payment.css";
import {
  Label,
  Input,
  FormGroup,
  Form,
  Button,
  Collapse,
  Toast,
  ToastHeader,
  ToastBody,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import React, { useState } from "react";
import acb from "../../img/logoBank/ACB.png";
import agribank from "../../img/logoBank/Agribank.png";
import bidv from "../../img/logoBank/BIDV.png";
import vietcombank from "../../img/logoBank/Vietcombank.png";
import vietinbank from "../../img/logoBank/Vietinbank.png";

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const [activebank, setActiveBank] = useState();
  const handle_click = (bank) => {
    setActiveBank(bank);
  };
  return (
    <>
      <Container>
        <div className="pay">
        <div>
            <Breadcrumb className="crumb">
                        <BreadcrumbItem>
                            <a href="/home/">
                                <i class="fa-solid fa-house"></i>
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Thanh toán</BreadcrumbItem>
                    </Breadcrumb> 
          </div>
          <h3>Chọn hình thức thanh toán</h3>
          <div className="pay-top">
            <Form>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Input name="radio2" type="radio" />{" "}
                  <Label check>Thanh toán khi nhận hàng</Label>
                </FormGroup>
                <React.StrictMode>
                  <FormGroup check>
                    <Input name="radio2" type="radio" onClick={toggle} />{" "}
                    <Label check>Thanh toán bằng thẻ ATM/Internet Banking</Label>
                    <Collapse isOpen={isOpen}>
                      <div className="p-6 my-2 rounded">
                        <Toast>
                          <ToastHeader>
                            Chọn ngân hàng mà bạn muốn thanh toán
                          </ToastHeader>
                          <ToastBody>
                            <img
                              src={acb}
                              id="acb"
                              className={activebank == "acb" ? "active" : ""}
                              onClick={() => handle_click("acb")}
                            />
                            <img
                              src={agribank}
                              id="agribank"
                              className={
                                activebank == "agribank" ? "active" : ""
                              }
                              onClick={() => handle_click("agribank")}
                            />
                            <img
                              src={bidv}
                              id="bidv"
                              className={activebank == "bidv" ? "active" : ""}
                              onClick={() => handle_click("bidv")}
                            />
                            <img
                              src={vietcombank}
                              id="vietcombank"
                              className={
                                activebank == "vietcombank" ? "active" : ""
                              }
                              onClick={() => handle_click("vietcombank")}
                            />
                            <img
                              src={vietinbank}
                              id="vietinbank"
                              className={
                                activebank === "vietinbank" ? "active" : ""
                              }
                              onClick={() => handle_click("vietinbank")}
                            />
                          </ToastBody>
                        </Toast>
                      </div>
                    </Collapse>
                  </FormGroup>
                  <FormGroup check>
                  <Input name="radio2" type="radio" onClick={toggle1} />{" "}
                    <Label check>Thanh toán bằng thẻ tín dụng</Label>
                    <Collapse isOpen={isOpen1}>
                      <div className="p-6 my-2 rounded ">
                        <Toast>
                          <ToastHeader>Thông tin thẻ</ToastHeader>
                          <ToastBody>
                            <Form>
                              <FormGroup>
                                <Label>Số thẻ</Label>
                                <Input id="form-input" type="number" />
                              </FormGroup>
                              <FormGroup>
                                <Label>Họ tên chủ thẻ</Label>
                                <Input id="form-input" type="text" />
                              </FormGroup>
                              <FormGroup>
                                <Label>Ngày hết hạn</Label>
                                <Input id="form-input" type="date" />
                              </FormGroup>
                              <FormGroup>
                                <Label>Số CVV</Label>
                                <Input id="form-input" type="number" />
                              </FormGroup>
                            </Form>
                          </ToastBody>
                        </Toast>
                      </div>
                    </Collapse>
                  </FormGroup>
                </React.StrictMode>
              </FormGroup>
            </Form>
          </div>
          <div className="agree">
            <Form>
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" />{" "}
                <Label check>
                  Tôi đồng ý với thỏa thuận bảo mật và chính sách mua hàng của
                  MyTECH
                </Label>
              </FormGroup>
            </Form>
          </div>
          <div className="request">
            <Form>
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" />{" "}
                <Label check>Yêu cầu xuất hóa đơn GTGT cho đơn hàng này</Label>
              </FormGroup>
            </Form>
          </div>
          <div className="pay-button">
            <Button size="lg" href="/success/">Thanh toán</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
