import React from "react";
import { Table, Tag, Space, Button, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import styles from "../styles/DataEntry.module.scss";

const columns = [
  {
    title: "Assessment Title",
    dataIndex: "title",
    key: "title",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "No. of Suppliers",
    dataIndex: "suppliers",
    key: "suppliers",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Risk Classification",
    key: "risk",
    dataIndex: "risk",
    render: (risk: string) => {
      let color =
        risk === "High" ? "volcano" : risk === "Medium" ? "gold" : "green";
      return <Tag color={color}>{risk.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => {
      let color = status === "PENDING" ? "volcano" : "green";
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Space size="middle">
        <a>View</a>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">Edit</Menu.Item>
              <Menu.Item key="2">Delete</Menu.Item>
            </Menu>
          }
        >
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    title: "Assessment 1",
    type: "BRSR",
    suppliers: 20,
    score: "-",
    risk: "Medium",
    status: "PENDING",
    result: "-",
  },
  {
    key: "2",
    title: "Assessment 2",
    type: "BRSR",
    suppliers: 25,
    score: 98,
    risk: "Low",
    status: "COMPLETE",
    result: "View",
  },
  {
    key: "3",
    title: "Assessment 3",
    type: "BRSR",
    suppliers: 35,
    score: 22,
    risk: "High",
    status: "COMPLETE",
    result: "View",
  },
  {
    key: "4",
    title: "Assessment 3",
    type: "Custom",
    suppliers: 49,
    score: 23,
    risk: "Medium",
    status: "COMPLETE",
    result: "View",
  },
  {
    key: "5",
    title: "Assessment 3",
    type: "Custom",
    suppliers: 100,
    score: 42,
    risk: "Medium",
    status: "COMPLETE",
    result: "View",
  },
];

const DataEntry: React.FC = () => (
  <div className={styles.dataEntry}>
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={{ type: "checkbox" }}
      className={styles.dataEntry}
    />
    ;
  </div>
);

export default DataEntry;
