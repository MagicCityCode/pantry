import * as React from "react";

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
    // <Row className="mt-5 justify-content-center">
    <div className="">
      {/* <Col md={8}> */}
      <div className="">
        {/* <Form className="border rounded-lg p-3"> */}
        <form className="border rounded-lg p-3">
          {/* <Form.Group> */}
          <div className="">
            {/* <Form.Label>Username</Form.Label> */}
            <label className="">Username</label>
            {/* <Form.Control */}
            <input
              value={values.username || ""}
              onChange={handleChange}
              type="username"
              name="username"
              // size="lg"
              // className="my-2"
              className=""
              placeholder="Type username here"
              autoComplete="un"
            />
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
              placeholder="example@example.com"
              autoComplete="email"
            />
            {/* <Form.Label>Password</Form.Label> */}
            <label className="">Password</label>
            <input
              value={values.password || ""}
              onChange={handleChange}
              type="password"
              name="password"
              // size="lg"
              // className="my-2"
              className=""
              placeholder="Type password here"
              autoComplete="current-password"
            />
          </div>
          {/* <Button onClick={handleRegister} className="w-50 mx-auto" block size="lg"> */}
          <button onClick={handleRegister} className="w-50 mx-auto">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
