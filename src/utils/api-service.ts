// function handleFetch(
//   resourcePath: string,
//   httpMethod: string,
//   content?: { [key: string]: any },
// ): any {
//   return fetch(String(resourcePath), {
//     method: String(httpMethod),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(content),
//   })
//     .then((results) => results.json())
//     .catch((err) => console.log({ Error: err, Status: err.status, Message: err.message }));
// }

export default {
  // handleFetch,
  STORAGE_KEY: 'token',
};
