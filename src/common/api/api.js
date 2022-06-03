import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const listID = process.env.REACT_APP_LIST_ID;

const instance = axios.create({
  baseURL: 'https://a.klaviyo.com',
  params: { api_key: apiKey },
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const checkProfilesRequest = async email => {
  if (!apiKey && !listID && !email) return;

  const options = {
    data: {
      emails: [email],
      phone_numbers: [],
      push_tokens: [],
    },
  };

  try {
    const response = await instance.post(
      `/api/v2/list/${listID}/get-members`,
      options,
    );

    console.log('response', response);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
