import axios from 'axios';
const ALERT_API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getAlerts = (token) =>
  axios.get(`${ALERT_API}/alerts`, { headers: { Authorization: `Bearer ${token}` } });