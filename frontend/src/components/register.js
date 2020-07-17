import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Container, Col } from 'react-bootstrap'
import { Form, Input, Button, Spin, message } from 'antd'
import * as UserActions from "../redux/actions/user-actions"
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class RegisterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
  }
  onFinish =async values => {
    this.setState({ loading: true })
   await this.props.register(values);
      if (this.props.registermessage === 'User added successfully') {
        this.setState({ loading: false })
        message.info('User registered successfully Please login to continue')
        this.props.history.push('/login')
      } else {
        this.setState({ loading: false })
        message.info('Some error occured , Please try again later')
      }
    

  };

  onFinishFailed = errorInfo => {
  };

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <div className="App">
          <Container>
            <Row md={2}>
              <Col style={{ marginTop: "10%", marginBottom: "10px" }}>
                <span style={{ color: "#0000FF", fontSize: "20px" }}><b>Sign up</b></span>
                <Form
                  style={{ marginLeft: "25%", marginRight: "25%" }}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item >
                    <span style={{ marginTop: "1px" }}>Already have an Account ?<a><b onClick={() => { this.props.history.push('') }}>Login</b></a></span>
                  </Form.Item>
                  <Row md={2}>
                    <Col>
                      <Form.Item
                        name="Name"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your name!',
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your email!',
                      },
                    ]}
                  >
                    <Input placeholder="Email ID" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your password!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item
                    name="con_password"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Confirm password!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="Confirm Password" />
                  </Form.Item>
                  <Form.Item >
                    <Button htmlType="submit" style={{ background: '#2e856e' }} >
                      Signup
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </Spin>
    );
  }
}
RegisterComponent.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  registermessage: PropTypes.string

};
function mapStateToProps(state) {
  return {
    ...state.user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...UserActions }, dispatch);
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { forwardRef: true }
  )(RegisterComponent)
);
