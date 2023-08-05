import axios from '../api/DataTrans';
import useAuth from './useAuth';
const useRefreshToken = () => {
    const { setAuth,auth } = useAuth();
    const refresh = async () => {
      try{
        const response = await axios.post('/refresh/'
        ,{
          "refresh":auth?.refreshToken,
            withCredentials:true,
            headers:{
              'Content-Type' : 'application/json',
            },
        }
        );
        setAuth(prev => {
            localStorage.setItem('auth',JSON.stringify({...prev,accessToken:response?.data?.access}))
            return {...prev ,accessToken:response.data.access}
        });
        return response.data.access
      }
      catch(err){
        console.log('errrrrrorr');
        console.log(err);
      }
    }
  return (
    refresh
  )
}
export default useRefreshToken