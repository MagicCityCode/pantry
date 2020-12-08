import * as React from 'react';

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
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    <div className="row row--align-center row--justify-center">
      <div className="card-demo margin-vert--md">
        <div className="card">
          <div className="col col--6">
            <div className="card__body">
              <label htmlFor="username">
                Username
                <input
                  value={values.username || ''}
                  onChange={handleChange}
                  type="username"
                  name="username"
                  className="form-input margin-bottom--md"
                  placeholder="Type username here"
                  autoComplete="un"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  value={values.email || ''}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-input margin-bottom--md"
                  placeholder="example@example.com"
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
                  placeholder="Type password here"
                  autoComplete="current-password"
                />
              </label>
            </div>
            <button
              type="button"
              onClick={handleRegister}
              className="button button--outline button--primary"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
