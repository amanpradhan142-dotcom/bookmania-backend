const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

(async () => {
  try {
    const res = await fetch('http://10.163.209.25:5000/api/books');
    const data = await res.json();
    console.log('BOOKS:', res.status, Array.isArray(data) ? `count=${data.length}` : data);
  } catch (err) {
    console.error(err);
  }
})();
