// src/components/Tracker.tsx
import React from "react";
import { Table } from "antd";
import styles from "../styles/Tracker.module.scss";

const dataSource = [
  {
    key: "1",
    month: "Jan 2023",
    status: "PENDING APPROVAL (1/12)",
    completion: "20%",
    unit: "Business Unit 1",
  },
  {
    key: "2",
    month: "Feb 2023",
    status: "APPROVED",
    completion: "30%",
    unit: "Business Unit 1",
  },
  {
    key: "3",
    month: "Mar 2023",
    status: "IN PROGRESS",
    completion: "50%",
    unit: "Business Unit 1",
  },
  // Add more data rows as needed
];

const columns = [
  {
    title: "MONTH",
    dataIndex: "month",
    key: "month",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "COMPLETION %",
    dataIndex: "completion",
    key: "completion",
  },
  {
    title: "BUSINESS UNIT",
    dataIndex: "unit",
    key: "unit",
  },
];

const Tracker: React.FC = () => {
  return (
    <div className={styles.tracker}>
      <div className={styles.summary}>
        <div>
          <h3>Pending Trackers</h3>
          <p>45/60</p>
        </div>
        <div>
          <h3>Pending Reviews</h3>
          <p>3</p>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Tracker;
