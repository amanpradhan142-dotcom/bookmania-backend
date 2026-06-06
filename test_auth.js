const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

(async () => {
  try {
    const signup = await fetch('http://10.163.209.25:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'pass123' })
    });
    const signupData = await signup.json();
    console.log('SIGNUP:', signup.status, signupData);

    const login = await fetch('http://10.163.209.25:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'pass123' })
    });
    const loginData = await login.json();
    console.log('LOGIN:', login.status, loginData);
  } catch (err) {
    console.error(err);
  }
})();
