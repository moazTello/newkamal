// import { useContext } from 'react';
import axios from '../api/DataTrans';
import useAuth from './useAuth';
// import DataContext from '../context/Datacontext';

const useRefreshToken = () => {
    // const {logout} = useContext(DataContext);
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
        if(err?.response?.data?.detail === 'Token is invalid or expired') {
          alert('انتهت الجلسة يرجى اعادة تسجيل الدخول');
          // logout()
        } 
        if(err?.response?.data?.refresh[0] === 'This field is required.') {
          alert('انتهت الجلسة يرجى اعادة تسجيل الدخول');
          // logout()
        } 
        
        console.log('errrrrrorr');
        console.log(err?.response?.data?.detail);
        console.log(err);

      }
    }
  return (
    refresh
  )
}
export default useRefreshToken