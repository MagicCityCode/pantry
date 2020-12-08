import * as React from "react";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
  const history = useHistory();
  const [values, setValues] = React.useState<{ [key: string]: string }>({
    // email: 'test@test.com',
    // pw: 'password'
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
      // const info = await res.json();
      // console.log(info);
      history.push("/");
    }
  };

  return (
    <div className="row row--align-center row--justify-center">
      <div className="card-demo margin-vert--md">
        <div className="card">
          <div className="col col--12">
            <div className="card__body">
              <label>First name</label>
              <br />
              <input
                value={values.first_name || ""}
                onChange={handleChange}
                type="firstName"
                name="first_name"
                className="form-input margin-bottom--md"
                placeholder="Type first name here"
              />
              <br />
              <label>Last name</label>
              <br />
              <input
                value={values.last_name || ""}
                onChange={handleChange}
                type="lastName"
                name="last_name"
                className="form-input margin-bottom--md"
                placeholder="Type last name here"
              />
              <br />
              <label>Email</label>
              <br />
              <input
                value={values.email || ""}
                onChange={handleChange}
                type="email"
                name="email"
                className="form-input margin-bottom--md"
                placeholder="example@example.com"
                autoComplete="email"
              />
              <br />
              <label>Password</label>
              <br />
              <input
                value={values.pw || ""}
                onChange={handleChange}
                type="password"
                name="pw"
                className="form-input margin-bottom--md"
                placeholder="Type password here"
                autoComplete="current-password"
              />
            </div>
            <div className="row row--no-gutters">
              <div className="col col--12">
                <button
                  type="submit"
                  onClick={handleRegister}
                  className="button button--block button--primary margin margin-vert--md"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
