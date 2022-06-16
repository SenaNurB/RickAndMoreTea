import { useQuery } from "react-query";
import axios from "axios";

function useEpisode(episode) {
  return useQuery(["episodes", episode], async () => {
    const { data } = await axios.get(`episode/${episode}/`);
    return data;
  });
}

export default useEpisode;
