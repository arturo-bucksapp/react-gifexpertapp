import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


// custom hooks
export const useFetchGifs = (category) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect(() => { //SE VA DISPARAR UNA SOLA VEZ
    getGifs(category)
      .then(imgs => {
        setstate({
          data: imgs,
          loading: false
        })
      })
  },[category])

  return state;

}