import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const listID = process.env.REACT_APP_LIST_ID;

// const instance = axios.create({
//   baseURL: 'https://a.klaviyo.com',
//   params: { api_key: apiKey },
//   headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
// });

export const checkProfilesRequest = async email => {
  if (!apiKey && !listID && !email) return;

  // const options = {
  //   data: {
  //     emails: [email],
  //     phone_numbers: [],
  //     push_tokens: [],
  //   },
  // };

  // try {
  //   const response = await instance.post(
  //     `/api/v2/list/${listID}/get-members`,
  //     options,
  //   );

  //   console.log('response', response);

  //   return response?.data;
  // } catch (error) {
  //   console.log(error);
  // }
  const options = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      emails: ['george.washington@klaviyo.com', 'abraham.lincoln@klaviyo.com'],
      phone_numbers: ['+13239169023', '+12028837032'],
      push_tokens: ['PUSH_TOKEN_1', 'PUSH_TOKEN_2'],
    }),
  };

  fetch(
    `https://a.klaviyo.com/api/v2/list/${listID}/get-members?api_key=${apiKey}`,
    options,
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
