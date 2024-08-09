import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import avatar from "@/assets/images/avatar.png";
import { connect } from "react-redux";
import { setToken } from "@/redux/modules/global/action";
import { HOME_URL } from "@/config/config";
import { useNavigate } from "react-router-dom";

const AvatarIcon = (props) => {
  const { setToken } = props
  const navigate = useNavigate();
  const logout = () => {
    Modal.confirm({
      title: '退出登录',
      content: '确定退出登录吗？',
      onOk: () => {
        setToken("");
        message.success('退出登录成功！');
        navigate('/login');
      },
    })
  }

  // Dropdown Menu
  const items = [
    {
      key: '1',
      label: <span onClick={logout}>退出登录</span>,
      icon: <LogoutOutlined />
    },
  ];

  return (
    <Dropdown menu={{ items }} arrow placement="bottom" trigger={['click']}>
      <Avatar
        size="large"
        src={avatar}
      />
    </Dropdown>
  )
}

const mapDispatchToProps = { setToken };

export default connect(null, mapDispatchToProps)(AvatarIcon);