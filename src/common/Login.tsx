import * as React from 'react';
// import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import config from '../utils/api-service';

const Login: React.FC = () => {
  const history = useHistory();
  // const { state } = useLocation<{ msg: string }>();
  const [values, setValues] = React.useState<{ [key: string]: string }>({
    // email: 'test@test.com',
    // pw: 'password'
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
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const info = await res.json();
      localStorage.setItem(config.STORAGE_KEY, info.token);
      localStorage.setItem('role', info.role);
      history.push('/');
    }
  };

  return (
    <div className="row row--align-center row--justify-center">
      <div className="card-demo margin-vert--md">
        <div className="card">
          <div className="col col--12">
            <div className="card__body">
              <label htmlFor="email">
                Email
                <br />
                <input
                  value={values.email || ''}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-input margin-bottom--md"
                  placeholder="Email address"
                  autoComplete="email"
                />
              </label>
              <br />
              <label htmlFor="password">
                Password
                <br />
                <input
                  value={values.pw || ''}
                  onChange={handleChange}
                  type="password"
                  name="pw"
                  className="form-input margin-bottom--md"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </label>
            </div>
            <div className="row row--no-gutters">
              <div className="col col--12">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="button button--block button--primary margin margin-vert--md"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
          {/* {err && <Alert variant="danger">{err}</Alert>} // Revisit */}
        </div>
      </div>
    </div>
  );
};

export default Login;
