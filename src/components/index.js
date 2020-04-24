import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchDailyData = async () => {
  try {
    const response = await Axios.get(`${url}/daily`);
  } catch (error) {}
};
