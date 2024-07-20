import axios from "axios";

const API_BASE_URL = "http://localhost:3000"

export const getStockData = async (ticker) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/stock/${ticker}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
