import React, { useState, useEffect } from "react";
import Label from "../components/label";
import { Row, Col, Card, Input, Select, Form, Button, Alert, Space, Spin } from "antd";
import { Tehsils } from "../utility/tehsil";
import { useNavigate } from 'react-router-dom';

import Header from "./header";
import { PhoneOutlined } from "@ant-design/icons";
function Form3({
  handleStep,
  initialValues,
  handleChange,
  handleSelect,
  handleSubmit,
  loading,
  response,
}) {
  const { Option } = Select;
  const {
    modeOfInvestment,
    percentage,
    cropsSale,
    seed,
    machinery,
    cropAdvisory,
    targetedmandi,
  } = initialValues;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleChangemandi(value) {
    console.log(`selected`,value);
    handleSelect("targetedmandi",value)
  }
  
  // function handleMode(value) {
  //   if (value === "Aarhti") {
  //     setmode("Aarhti");
  //     console.log(mode);
  //   } else if (value === "Personal") {
  //     setmode("Personal");
  //     console.log(mode);
  //   }
  // }

  let navigate = useNavigate();
  function handlecontact(){
navigate("/contactUs")
  }

  return (
    <div>
      <div className="setting-drwer"     onClick={handlecontact} >
        {/* {setting} */}
        <PhoneOutlined  className="hypericon"
      
         />
      </div>
      <Header />
      <Spin size="large" spinning={loading} >
      
      <Row justify="center">
        <Col xs={24} lg={17} className="mb-24">
          <Form onFinish={handleSubmit}>
            <Card
              // className="payment-method-card"
              className="formBody"
              title={
                <>
                  <Row gutter={[0, 24]} className="title">
                    <h2 className="font-semibold m-0">Mod of Investment</h2>
                  </Row>
                </>
              }
              headStyle={{
                backgroundColor: "#96CC5C",
                borderRadius: " 20px 20px 0px 0px",
              }}
            >
              <Row justify="center" gutter={[24, 0]}>
                <Col span={7} md={0} lg={0} x={0}></Col>

                {/* <Card style={{background:"#e7e7e7",border:"none"}} > */}
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={11}
                  sm={20}
                  md={7}
                >
                  <Label
                    eLabel=" Mod of Investment"
                    ulabel="سرمایہ کاری کا ذریعہ"
                    index={0}
                  />

                  <Form.Item
                    className="username"
                    name="modeOfInvestment"
                    rules={
                      !modeOfInvestment.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder=" سرمایہ کاری"
                      // onChange={handleMode}
                      onSelect={(value, event) =>
                        handleSelect("modeOfInvestment", event)
                      }
                      //   onChange={handleMode}
                      name="modeOfInvestment"
                      size="large"
                      defaultValue={modeOfInvestment.children}
                    >
                      <Option key="Aarhti"> Aarhti</Option>
                      <Option key="Personal"> Personal </Option>
                    </Select>
                  </Form.Item>
                </Col>
                {/* </Card> */}

                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={6}
                  sm={20}
                  md={6}
                >
                  {initialValues.modeOfInvestment.value==="Aarhti" ? (<>
                  <Label eLabel="  Percentage %" ulabel=" % فیصد" index={0} />

                    <Form.Item
                      name="percentage"
                      rules={
                        !percentage
                          ? [
                              {
                                required: true,
                                message: "Please Fill",
                              },
                            ]
                          : ""
                      }
                    >
                      <Input
                        className="inputnumber"
                        placeholder="فیصد"
                        min={1}
                        name="percentage"
                        defaultValue={percentage}
                        onChange={handleChange}
                        type="number"
                      />
                    </Form.Item>
                    </> ) : (<>
                  <Label eLabel="  Percentage %" ulabel=" % فیصد" index={1} />

                    <Form.Item name="percentage1">
                      <Input
                        min={1}
                        name="percentage1"
                        // defaultValue={0}
                        value={0}
                        disabled={true}
                        placeholder="0"
                        // onChange={handleChange}
                        type="number"

                        // onChange={onChange}
                      />
                    </Form.Item>
                    </>  )}
                </Col>
                <Col xs={20} span={7} lg={6} sm={20} md={6}>
                  <Label eLabel=" Crop Sale" ulabel=" فصل کی فروخت" index={0} />

                  <Form.Item
                    className="username"
                    name="cropsSale"
                    rules={
                      !cropsSale.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder=" فصل کی فروخت "
                      onSelect={(value, event) =>
                        handleSelect("cropsSale", event)
                      }
                      size="large"
                      name="cropsSale"
                      defaultValue={cropsSale.children}
                    >
                      <Option key="On Farm">On Farm</Option>
                      <Option key="Mandi ">Mandi </Option>
                      <Option key="Company ">Company </Option>
                      <Option key="Contract ">Contract </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="center" gutter={[24, 0]}>
                <Col span={6} md={0} lg={0}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={11}
                  sm={20}
                  md={12}
                >
                  <Label eLabel="Target Mandi" ulabel="ٹارگٹ منڈی" index={0} />

                  <Form.Item
                    className="username"
                    name="targetedmandi"
                    rules={
                      !targetedmandi
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder=" منڈی "
                      showSearch
                      mode="multiple"

                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={handleChangemandi}
                      defaultValue={targetedmandi?targetedmandi:undefined}

                      // onSelect={(value, event) =>
                      //   handleSelect("targetedmandi", event)
                      // }
                      size="large"
                      name="targetedmandi"
                    >
                      {Tehsils &&
                        Tehsils.map((data) => (
                          <Option key={data.value}>{data.label}</Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={12}
                  sm={20}
                  md={7}
                >
                  <Label eLabel="Seed" ulabel="بیج" index={0} />

                  <Form.Item
                    className="username"
                    name="seed"
                    rules={
                      !seed.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder="بیج "
                      size="large"
                      onSelect={(value, event) => handleSelect("seed", event)}
                      defaultValue={seed.children}
                    >
                      <Option key="Own">Own</Option>

                      <Option key="Market">Market</Option>
                      <Option key="both">Both</Option>

                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center" gutter={[24, 0]}>
                <Col span={6} md={0} lg={0}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={11}
                  sm={20}
                  md={12}
                >
                  <Label eLabel="Machinery" ulabel="  مشینری" index={0} />

                  <Form.Item
                    className="username"
                    name="machinery"
                    rules={
                      !machinery.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder=" مشینری "
                      size="large"
                      onSelect={(value, event) =>
                        handleSelect("machinery", event)
                      }
                      defaultValue={machinery.children}
                    >
                      <Option value="Own">Own</Option>

                      <Option value="Rented">Rented</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={12}
                  sm={20}
                  md={7}
                >
                  <Label
                    eLabel="Crops Advisory"
                    ulabel="  فصلوں کی ایڈوائزری"
                    index={0}
                  />

                  <Form.Item
                    className="username"
                    name="cropAdvisory"
                    rules={
                      !cropAdvisory.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder=" فصلوں کی ایڈوائزری"
                      size="large"
                      name="cropAdvisory"
                      onSelect={(value, event) =>
                        handleSelect("cropAdvisory", event)
                      }
                      defaultValue={cropAdvisory.children}
                    >
                      <Option value="Self-Experience">Self-Experience</Option>

                      <Option value="Relative or Friend">
                        Relative or Friend
                      </Option>
                      <Option value="Govt. Extension services ">
                        Govt. Extension services{" "}
                      </Option>
                      <Option value="Input Companies">Input Companies</Option>
                      <Option value="Consultant or Advisor ">
                        Consultant or Advisor{" "}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
           
              {response?.success === false ? (
                <Row justify="center">
                  <Alert
                    style={{ marginBottom: "10px" }}
                    message={response?.message}
                    type="error"
                  />
                </Row>
              ) : (
               ""
              )}
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col span={7} xs={2} md={18} sm={18} lg={18} xl={17}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={22}
                  span={7}
                  lg={5}
                  xl={6}
                  xxl={6}
                  sm={20}
                  md={5}
                  className="d-flex"
                >
                  <Button
                    shape="round"
                    size="large"
                    className="backbtnStyle"
                    onClick={() => handleStep("2")}
                    type="primary"
                  >
                    Back
                  </Button>
                  <Button
                    className="nextbtn"
                    size="large"
                    shape="round"
                    type="primary"
                    htmlType="submit"
                    style={{ background: "#273A9E", border: "none" }}
                  >
                    Submit
                  </Button>
                
                </Col>
              </Row>
            </Card>
          </Form>
        </Col>
      </Row>
      </Spin>
    </div>
  );
}

export default Form3;