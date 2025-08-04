export const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return { weight: 0, battery: 0 };
  }
};
