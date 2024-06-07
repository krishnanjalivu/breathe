import React from "react";
import { Tabs } from "antd";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/LoginForm";
import styles from "../styles/AuthPage.module.scss";

const AuthPage: React.FC = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.leftPanel}>
        <h5>WELCOME TO</h5>
        <img src="/src/assets/image.png" alt="logo" width={300} />
        <p>
          We help you track your organisations <br></br> metrics as per the ESG
          Guidelines
        </p>
        <h5>
          Sounds Interesting? <a href="#">Get in touch!</a>
        </h5>
      </div>
      <div className={styles.formContainer}>
        <div>
          <img src="/src/assets/image2.png" alt="logo2" width={150} />
        </div>
        <div className={styles.form}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Sign Up" key="1">
              <SignUpForm />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Login" key="2">
              <SignInForm />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
