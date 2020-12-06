import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register: React.FC = () => {
  const [values, setValues] = React.useState<{ [key: string]: string }>({
    // email: 'test@test.com',
    // password: 'password'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async () => {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const info = await res.json();
      console.log(info);
    }
    // console.log('Register', values);
  };

  return (
    <Row className="mt-5 justify-content-center">
      <Col md={8}>
        <Form className="border rounded-lg p-3">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={values.username || ""}
              onChange={handleChange}
              type="username"
              name="username"
              size="lg"
              className="my-2"
              placeholder="Type username here"
              autoComplete="un"
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={values.email || ""}
              onChange={handleChange}
              type="email"
              name="email"
              size="lg"
              className="my-2"
              placeholder="example@example.com"
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
              placeholder="Type password here"
              autoComplete="current-password"
            />
          </Form.Group>
          <Button
            onClick={handleRegister}
            className="w-50 mx-auto"
            block
            size="lg"
          >
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
