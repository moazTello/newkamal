import { createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
// import api from '../api/DataTrans';
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
//   const [token,setToken] = useState('');
  const [password,setPassword] = useState('');
  const [userName,setUserName] = useState('');
  const [logedInUser,setLogedInUser] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);

  const [emailContact,setEmailContact] = useState('');
  const [contactMessage,setContactMessage] = useState('');
  const navigate = useNavigate();
  // const handleSubmitlogin = (e) =>{
  //   e.preventDefault();
  //   setUserName('hi fuckers');
  //   setPassword('go to the fucking hell');
  // }
  const logout = () => {
    setLogedInUser(false);
    setUserName('');
    setPassword('');
    setIsAdmin(false);
  }
  const handleSubmitRegister = (e) =>{
    e.preventDefault();
    setUserName('hi fuckers');
    setPassword('go to the fucking hell');
  }
  const handleSubmitContact = () => {

  }

  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    if(userName === 'moaz' && password === 'admin'){
      setLogedInUser(true);
      setIsAdmin(true);
      navigate('/admin');
    }
  }

        // try{
        // const response = await api.post('customerUI/login',
        //                                 JSON.stringify({username:userName,password:password}),
        //                                 {
        //                                     headers:{ 'Content-Type':'application/json'}
        //                                 });
        // // const response = await api.post('/',
        // //   {
        // //     "comment":userName,
        // //   }
        // // );
        // // console.log(response);
        // // setPassword(response.data.data.answer);
        // setToken(response.data.token);
        // setUserTrips(response.data.customerTrips);
        // setLogedInUser(response.data.customer);
        // // console.log(response);
        // setNavDisplay(false);
        // navigate(`/login/alltrips`);
        // }
        // catch(err) {
        //     alert('المعلومات غير صحيحة يرجى اعادة تعبئة المعلومات ');
        // }
    return(
        <DataContext.Provider value={{
            userName,setUserName,password,setPassword,handleSubmitlogin,handleSubmitRegister,
            logedInUser,setLogedInUser,logout,isAdmin,setIsAdmin,
            contactMessage,setContactMessage,emailContact,setEmailContact,handleSubmitContact
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;