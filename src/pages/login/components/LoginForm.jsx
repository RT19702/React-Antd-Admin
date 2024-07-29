import { Button, Form, Input, message } from "antd";
import { UserOutlined, CloseCircleOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HOME_URL } from "@/config/config";
import { loginApi } from "@/api/login";
import md5 from "js-md5";
const LoginForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (loginForm) => {
    try {
      setLoading(true);
      loginForm.password = md5(loginForm.password);
      const { data } = await loginApi(loginForm);
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
        <Button type="primary" htmlType="submit" icon={<UserOutlined />} >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm;