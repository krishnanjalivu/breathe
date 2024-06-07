import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AuthPage.module.scss";

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      dispatch(setUser(userCredential.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="sign_up"
      onFinish={onFinish}
      layout="vertical"
      className={styles.form}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={loading}
          className={styles.submitButton}
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
