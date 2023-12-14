import { useEffect , useState} from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null);

    const [isPending, setIsPending]=useState(true);
  
    const [error,setError]=useState(true)


    useEffect(()=> {

        setTimeout(()=>{
          fetch(url)
  
          .then(res => {
  
            console.log(res)
  
              if(!res.ok){
                throw Error ('Oupps ... Your are Lost... ')
              }
              
            return res.json();
          })
  
          .then(data => {
            console.log(data)
            setData(data)
            setIsPending(false)
            setError(null)
          })
          .catch(err =>{
            setError(err.message)
            setIsPending(false)
          })
        },2000);

        // return () => {
        //     console.log('Jesus Is my Lord')
        // }
    },[])  // dodo U need to see How this hook works in Ure spare time 

  return{data,isPending,error}
}
