import React, { useEffect, useState } from "react";
import Logo from './components/Logo'
import * as Icons from "@ant-design/icons";
import { connect } from 'react-redux'
import { Menu, Spin } from "antd";
import { getMenuList } from '@/api/login'
import { MenuList } from '@/api/config/servicePort'
import { setMenuList } from "@/redux/modules/menu/action";
import { useNavigate, useLocation } from "react-router-dom";
import './index.less'


const LayoutMenu = (props) => {
  const { setMenuList: setMenuListAction } = props;
  const { pathname } = useLocation();
  const [menuList, setMenuList] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([pathname]);

  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  // 生成菜单项
  const getItem = (label, key, icon, children, type) => ({
    key,
    icon: React.createElement(Icons[icon]),
    children,
    label,
    type
  });

  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (menuList, newArr = []) => {
    menuList.forEach((item) => {
      // 下面判断代码解释 *** !item?.children?.length ==> (!item.children || item.children.length === 0)
      if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, item.icon));
      newArr.push(getItem(item.title, item.path, item.icon, deepLoopFloat(item.children)));
    });
    return newArr;
  };

  // 获取菜单数据
  const getMenuData = async () => {
    setLoading(true);
    try {
      // const { data } = await getMenuList();
      const data = MenuList
      if (!data) return;
      setMenuList(deepLoopFloat(data));
      setMenuListAction(data);
    } finally {
      setLoading(false);
    }
  }

  // 路由跳转
  const navigate = useNavigate();

  const clickMenu = ({ key }) => navigate(key);

  useEffect(() => {
    getMenuData();
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <div className='menu'>
      <Spin spinning={loading} tip="Loading...">
        <Logo />
        <Menu theme="dark" mode="inline" triggerSubMenuAction="click" items={menuList} onClick={clickMenu} selectedKeys={selectedKeys} />
      </Spin>
    </div>
  )
}

const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { setMenuList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu)
