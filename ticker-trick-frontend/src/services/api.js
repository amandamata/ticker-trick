import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getStockData = async (ticker) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/stock/${ticker}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
