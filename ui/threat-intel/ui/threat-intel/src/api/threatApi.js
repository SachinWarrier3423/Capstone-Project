import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getThreats = (token) =>
  axios.get(`${API}/threats`, { headers: { Authorization: `Bearer ${token}` } });
export const createThreat = (threat, token) =>
  axios.post(`${API}/threats`, threat, { headers: { Authorization: `Bearer ${token}` } });