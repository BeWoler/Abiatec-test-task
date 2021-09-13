import { useCallback, useState } from "react";
import axios from "axios";

export const useLoadContent = () => {
  const [imgList, setImgList] = useState([]);
  const [page, setPage] = useState(1);
  const getContent = useCallback(async (value) => {
    try {
      if (value) {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${value}`
        );
        setPage(1);
        setImgList(response.data.results);
      } else {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/`
        );
        setPage(2);
        setImgList(response.data.results);
      }
    } catch (e) {
      alert("Wrong value, please enter the character name");
    }
  }, []);
  const fetchMore = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setPage(page + 1);
      setImgList(response.data.results);
    } catch (e) {
      console.log(e);
    }
  }, [page]);
  return [imgList, getContent, fetchMore];
};
