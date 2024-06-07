import React from "react";
import { Layout, Dropdown, Menu, Button } from "antd";
import { ArrowDownOutlined, UserOutlined } from "@ant-design/icons";
import styles from "../styles/Header.module.scss";

const { Header: AntHeader } = Layout;

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const handleMenuClick = (tab: string) => {
    setActiveTab(tab);
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.left}>
          <Button>View Name</Button>

          <Button>
            North India Region <ArrowDownOutlined />
          </Button>
        </div>
        <div className={styles.right}>
          <Button>
            John Doe <UserOutlined />
          </Button>
        </div>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.left}>
          <Menu
            mode="horizontal"
            onClick={({ key }) => handleMenuClick(key.toString())}
          >
            <Menu.Item key="dataEntry">Data Entry</Menu.Item>
            <Menu.Item key="tracker">Tracker</Menu.Item>
          </Menu>
        </div>
        <div className={styles.right}>
          <Button>FY 2023-24</Button>
          <Button type="primary">Submit for Approval</Button>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
