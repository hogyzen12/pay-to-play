import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const listID = process.env.REACT_APP_LIST_ID;

const instance = axios.create({
  baseURL: 'https://a.klaviyo.com',
  params: { api_key: apiKey },
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
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
