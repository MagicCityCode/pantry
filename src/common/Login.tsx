import * as React from 'react';
// import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import STORAGE_KEY from '../utils/api-service';

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
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const info = await res.json();
      // console.log(info);
      localStorage.setItem(STORAGE_KEY, info.token);
      localStorage.setItem('role', info.role);
      history.push('/');
    }
    // console.log('Register', values);
  };

  return (
    <div className="row row--align-center row--justify-center">
      <div className="card-demo margin-vert--md">
        <div className="card">
          <div className="col col--6">
            <div className="card__body">
              <label htmlFor="email">
                Email
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
              <label htmlFor="password">
                Password
                <input
                  value={values.password || ''}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  className="form-input margin-bottom--md"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </label>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="button button--outline button--primary"
            >
              Login
            </button>
          </div>
          {/* {err && <Alert variant="danger">{err}</Alert>} */}
        </div>
      </div>
    </div>
  );
};

// interface LoginProps {}

export default Login;
