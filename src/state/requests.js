const API_URL = `http://${window.location.hostname}:10021`;

const buildRequest = async (url, method, data, callback) => {
  const init = {
    method: method,
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

  if (data) {
    init["body"] = JSON.stringify(data);
  }

  const request = await fetch(`${API_URL}${url}/`, init).then(res => {
      return res.json();
    }
  );

  if (callback)
    callback(await request);

  return request;
}

export const getData = async (url, callback) => {
  return buildRequest(url, "GET", null, callback);
}

export const postData = async (url, data, callback) => {
  return buildRequest(url, "POST", data, callback);
}
