import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataEntry from "../components/DataEntry";
import Tracker from "../components/Tracker";
import styles from "../styles/DashboardPage.module.scss";

const { Content } = Layout;

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dataEntry");

  const renderContent = () => {
    switch (activeTab) {
      case "dataEntry":
        return <DataEntry />;
      case "tracker":
        return <Tracker />;
      default:
        return <DataEntry />;
    }
  };

  return (
    <Layout className={styles.dashboard}>
      <Sidebar setActiveTab={setActiveTab} />
      <Layout>
        <Header setActiveTab={setActiveTab} />
        <Content className={styles.content}>{renderContent()}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
