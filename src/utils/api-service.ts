const STORAGE_KEY = 'token';
export default STORAGE_KEY;

// export default async <T = any>(
//   uri: string,
//   method = 'GET',
//   body?: Record<string, unknown>,
// ) => {
//   const TOKEN = localStorage.getItem(STORAGE_KEY);
//   const headers = new Headers();

//   if (TOKEN) {
//     headers.set('Authorization', `Bearer ${TOKEN}`);
//   }

//   if (method === 'POST' || method === 'PUT') {
//     headers.set('Content-Type', 'application/json');
//   }

//   const opts: any = {
//     method,
//     headers,
//     body: JSON.stringify(body),
//   };

//   if (method === 'GET') {
//     delete opts.body;
//   }

//   try {
//     const res = await fetch(uri, opts);
//     if (res.status === 401) {
//       throw new Error('Token failed or not found');
//     }
//     if (res.status === 404) {
//       throw new Error('Server path not found');
//     }
//     if (res.status === 500) {
//       throw new Error('Check server logs');
//     }
//     if (res.ok) {
//       return <T> await res.json();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Have this clear local storage & refresh the pg
// // (which Luke said is typically ill-advised in React but...)
