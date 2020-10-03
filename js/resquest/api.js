const api = async (url = "", options) => {
  const json = await fetch(`https://jobup-api.herokuapp.com${url}`, options);
  const res = await json.json();
  return res;
};
