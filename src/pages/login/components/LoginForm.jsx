import { Button, Form, Input, message } from "antd";
import { UserOutlined, CloseCircleOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HOME_URL } from "@/config/config";
import { loginApi } from "@/api/login";
import { connect } from "react-redux";
import { setToken } from "@/redux/modules/global/action";
import md5 from "js-md5";

const LoginForm = (props) => {
  const { setToken } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (loginForm) => {
    try {
      setLoading(true);
      loginForm.password = md5(loginForm.password);
      const { data } = await loginApi(loginForm);
      setToken(data.access_token);
      message.success("登录成功！");
      navigate(HOME_URL);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form
      form={form}
      labelCol={{ span: 5 }}
      autoComplete="off"
      size="large"
      onFinish={onFinish}
      initialValues={{ username: "admin", password: "123456" }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="用户名：admin / user" prefix={<UserOutlined style={{
          color: 'rgba(0,0,0,.25)',
        }} />} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined style={{
          color: 'rgba(0,0,0,.25)',
        }} />} />
      </Form.Item>

      <Form.Item className="login-btn">
        <Button
          onClick={() => {
            form.resetFields();
          }}
          icon={<CloseCircleOutlined />}
        >
          重置
        </Button>
        <Button type="primary" htmlType="submit" icon={<UserOutlined />} loading={loading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

const mapDispatchToProps = { setToken };

export default connect(null, mapDispatchToProps)(LoginForm);
