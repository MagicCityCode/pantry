import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { STORAGE_KEY } from "../utils/api-service";

const Login: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<{ msg: string }>();
  const [values, setValues] = React.useState<{ [key: string]: string }>({
    // email: 'test@test.com',
    // password: 'password'
  });
  const [err, setErr] = React.useState<string>("");

  React.useEffect(() => {
    // console.log(state);
    setErr(state?.msg);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const info = await res.json();
      // console.log(info);
      localStorage.setItem(STORAGE_KEY, info.token);
      localStorage.setItem("role", info.role);
      history.push("/");
    }
    // console.log('Register', values);
  };

  return (
    <Row className="mt-5 justify-content-center">
      <Col md={8}>
        <Form className="border rounded-lg p-3">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={values.email || ""}
              onChange={handleChange}
              type="email"
              name="email"
              size="lg"
              className="my-2"
              placeholder="Email address"
              autoComplete="email"
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={values.password || ""}
              onChange={handleChange}
              type="password"
              name="password"
              size="lg"
              className="my-2"
              placeholder="Password"
              autoComplete="current-password"
            />
          </Form.Group>
          <Button
            onClick={handleLogin}
            className="w-50 mx-auto"
            block
            size="lg"
          >
            Login
          </Button>
        </Form>
        {err && <Alert variant="danger">{err}</Alert>}
      </Col>
    </Row>
  );
};

// interface LoginProps {}

export default Login;
