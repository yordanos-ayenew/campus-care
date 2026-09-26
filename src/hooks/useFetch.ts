import { useEffect, useState } from "react";

function useFetch<T>(fetchFunction: ()=> Promise<T>){
    const [data, setData] = useState<T|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null); 

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true);
                setError(null);
                const result=await fetchFunction();
                setData(result);
            } catch(error){
                setError(error instanceof Error?error.message:"Something went wrong");
            } finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [fetchFunction]);
    return {data, loading, error};
}
export default useFetch;