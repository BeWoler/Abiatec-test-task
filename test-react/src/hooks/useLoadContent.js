import { useCallback, useState } from "react";
import axios from "axios";

export const useLoadContent = () => {
  const [imgList, setImgList] = useState([]);
  const getContent = useCallback(async (value) => {
    try {
      if(value) {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${value}`
        );
        setImgList(response.data.results);
      }
      else {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]`
        );
        setImgList(response.data);
      }
    } catch (e) {
      alert("Wrong value, please enter the character name");
    }
    /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
  }, []);
  // TODO: Put fetchMore method here
  return [imgList, getContent];
};
