import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState('')
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

        useEffect ( () => {
      
            fetch(url)
            .then(res => {
                if (!res.ok){
                    throw Error ('Couldnt fetch data');
                }
               return res.json();
            })
            .then(dat => {
                const datas = [];
                for (const key in dat) {
                    const datta = {
                        id: key,
                        ...dat[key]
                    }
                    datas.push(datta)
                }
                setData(datas)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
        }, [url])

        return { data, isPending, error}
}
 
export default useFetch;