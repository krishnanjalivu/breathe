// src/components/SignInForm.tsx
import React from "react";
import { Button, Form, Input } from "antd";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";
import { auth, googleProvider, githubProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      dispatch(setUser(userCredential.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(setUser(result.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      dispatch(setUser(result.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  return (
    <Form name="sign_in" layout="vertical" onFinish={onFinish}>
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={handleGoogleSignIn}
          type="primary"
          style={{ marginRight: 10 }}
        >
          Sign In with Google
        </Button>
        <Button onClick={handleGithubSignIn} type="primary">
          Sign In with GitHub
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
