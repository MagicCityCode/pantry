import * as React from "react";
// import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STORAGE_KEY } from "../utils/api-service";

const Login: React.FC = () => {
  const history = useHistory();
  // const { state } = useLocation<{ msg: string }>();
  const [values, setValues] = React.useState<{ [key: string]: string }>({
    // email: 'test@test.com',
    // password: 'password'
  });
  // const [err, setErr] = React.useState<string>('');

  React.useEffect(() => {
    // console.log(state);
    // setErr(state?.msg);
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
    // row mt-5 justify-content-center
    <div className="">
      {/* <Col md={8}> */}
      <div className="">
        {/* <Form className="border rounded-lg p-3"> */}
        <form className="">
          {/* <Form.Group> */}
          <div className="">
            {/* <Form.Label>Email</Form.Label> */}
            <label className="">Email</label>
            {/* <Form.Control */}
            <input
              value={values.email || ""}
              onChange={handleChange}
              type="email"
              name="email"
              // size="lg"
              // className="my-2"
              className=""
              placeholder="Email address"
              autoComplete="email"
            />
            {/* <Form.Label>Password</Form.Label> */}
            <label className="">Password</label>
            {/* <Form.Control */}
            <input
              value={values.password || ""}
              onChange={handleChange}
              type="password"
              name="password"
              // size="lg"
              // className="my-2"
              className=""
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          {/* <Button onClick={handleLogin} className="w-50 mx-auto" block size="lg"> */}
          <button onClick={handleLogin} className="">
            Login
          </button>
        </form>
        {/* {err && <Alert variant="danger">{err}</Alert>} */}
      </div>
    </div>
  );
};

// interface LoginProps {}

export default Login;
