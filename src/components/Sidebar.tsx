import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  DashboardOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.scss";

const { Sider } = Layout;

const Sidebar: React.FC<{ setActiveTab: (key: string) => void }> = ({
  setActiveTab,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={styles.sidebar}
    >
      <div className={styles.logo}>
        <img src="/src/assets/image.png" alt="Breathe ESG" width={150} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<DashboardOutlined />}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<BarChartOutlined />}
          onClick={() => setActiveTab("entityManager")}
        >
          Entity Manager
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<PieChartOutlined />}
          onClick={() => setActiveTab("reporting")}
        >
          Reporting
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<LineChartOutlined />}
          onClick={() => setActiveTab("maturity")}
        >
          Maturity
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<UnorderedListOutlined />}
          onClick={() => setActiveTab("suppliers")}
        >
          Suppliers
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={<PieChartOutlined />}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </Menu.Item>
        <Menu.Item
          key="7"
          icon={<LineChartOutlined />}
          onClick={() => setActiveTab("targets")}
        >
          Targets
        </Menu.Item>
        <Menu.Item
          key="8"
          icon={<LogoutOutlined />}
          onClick={() => setActiveTab("logout")}
        >
          <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
      <Button className={styles.collapseButton} onClick={toggleCollapsed}>
        {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
      </Button>
    </Sider>
  );
};

export default Sidebar;
