import axios from 'axios';

const API_BASE = '/api';

export const sendContactInquiry = async (formData) => {
  const res = await axios.post(`${API_BASE}/contact`, formData);
  return res.data;
};

export const fetchCases = async () => {
  const res = await axios.get(`${API_BASE}/cases`);
  return res.data.data;
};

export const fetchTeam = async () => {
  const res = await axios.get(`${API_BASE}/team`);
  return res.data.data;
};

export const fetchServices = async () => {
  const res = await axios.get(`${API_BASE}/services`);
  return res.data.data;
};
