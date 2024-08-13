import { useEffect } from "react";
import { Layout } from "antd";
import LayoutHeader from "./components/Header";
import LayoutMenu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollapse } from "@/redux/modules/menu/action";
import "./index.less";

const LayoutIndex = (props) => {
  const { isCollapse, updateCollapse } = props;
  const { Sider, Content } = Layout;

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth;
        if (!isCollapse && screenWidth < 1200) updateCollapse(true);
        if (!isCollapse && screenWidth > 1200) updateCollapse(false);
      })();
    };
  };

  useEffect(() => {
    listeningWindow();
  }, []);

  return (
    // 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
    <section className="container">
      <Sider theme="dark" collapsed={isCollapse} width={220}>
        <LayoutMenu />
      </Sider>
      <Layout>
        <LayoutHeader />
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </section>
  )
}

const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { updateCollapse };

export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);