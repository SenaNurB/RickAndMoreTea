import { useQuery } from "react-query";
import axios from "axios";

function useCharacterData(id) {
  return useQuery(["episodes", id], async () => {
    const { data } = await axios.get(`character/${id}/`);
    return data;
  });
}

export default useCharacterData;
