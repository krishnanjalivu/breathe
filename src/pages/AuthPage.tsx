import React from "react";
import { Tabs } from "antd";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import styles from "../styles/AuthPage.module.scss";

const AuthPage: React.FC = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.leftPanel}>
        <h1>WELCOME TO</h1>
        <h2>BREATHE ESG</h2>
        <p>
          We help you track your organisations metrics as per the ESG Guidelines
        </p>
        <p>
          Sounds Interesting? <a href="#">Get in touch!</a>
        </p>
      </div>
      <div className={styles.formContainer}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Sign Up" key="1">
            <SignUpForm />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Login" key="2">
            <LoginForm />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
