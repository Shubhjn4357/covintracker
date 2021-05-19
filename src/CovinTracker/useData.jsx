import {useEffect,useState} from "react";
const useData=(Link)=>{
  const[Result,setResult]=useState(null);
  const[Catch,setCatch]=useState(null);
  const[IsLoading,setIsLoading]=useState(false);
  useEffect(()=> {
    const JsonDatafetcher=async()=>{
      setIsLoading(true);
      try{
        const response =await fetch(Link)
        const data= await response.json()

        setIsLoading(false);
        return setResult(data)
        }
        catch(error){
          setIsLoading(false);
          return setCatch(error)
        }
    }
    JsonDatafetcher();
    return () => {
      setResult(null);
      setCatch(null);
      setIsLoading(false)
    };
   },[Link])
   
  return{Result,Catch,IsLoading}
};
export default useData;