const handleFetch = (
  resourcePath: string,
  httpMethod: string,
  content?: { [key: string]: unknown },
) => {
  fetch(String(resourcePath), {
    method: String(httpMethod),
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content),
  })
    .then((r) => r.json())
    .catch((err) => console.log(err, err.status, err.message));
};

export default {
  handleFetch,
  STORAGE_KEY: 'token',
};
