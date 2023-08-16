import { createContext, useState, useEffect} from "react";
import { useNavigate
// , Location, Link
 } from 'react-router-dom';
import axios from '../api/DataTrans';
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import AuthContext from "./AuthProvider";
// import api from '../api/DataTrans';
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  // const { setAuth } = useContext(AuthContext);
  const { setAuth,auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
// admin +963988140521
// advertiser  +9639111111
//   const [token,setToken] = useState('');
  const [ password,setPassword ] = useState('aa');
  const [ userName,setUserName ] = useState('+963988140521');
  const [ advPhone ,setAdvPhone] = useState('+9639111111');

  const [ logedInUser,setLogedInUser ] = useState(false);
  const [ isAdmin,setIsAdmin ] = useState(false);

  const [ adminAdvertises , setAdminAdvertises] = useState([]);
  const [ usersadvertizeorder , setUsersadvertizeorder] = useState([]);
  const [ userPayedAddv , setUserPayedAddv] = useState([]);
  const [ activeAddv , setactiveAddv] = useState([]);


  const [email,setEmail] = useState('');
  const [contactMessage,setContactMessage] = useState('');
  const [phoneContact,setPhoneContact] = useState('');

  const [adminContacts , setAdminContacts] = useState([]);
  const [adminErrors , setAdminErrors] = useState([]);

  const [ userOpenion, setUserOpenion ] = useState('')
  const [ openions , setOpenions ] = useState([]);
  const [ adminOpenions , setAdminOpenions ] = useState([]);

  const [statistics, setStatistics ] = useState([]);

  const [ advName ,setAdvName] = useState('');
  const [ advDescription ,setAdvDescription] = useState('');
  const [ advCountry , setAdvCountry ] = useState('سوريا');
  const [ advStartDate , setAdvStartDate ] = useState('');
  const [ advEndDate , setAdvEndDate ] = useState('');
  const [ advUrl , setAdvUrl ] = useState('');
  const [ adminAdvPrice, setAdminAdvPrice ] = useState('');
  const [ adminAdvActive, setAdminAdvactive ] = useState('مفعل');
  
  const [ singleUserAddv , setSingleUserAddv ] = useState([]);

  const [ nameBaka , setNameBaka ] = useState('');
  const [ daysOfBaka , setDaysOfBaka ] = useState('');
  const [priceOfBaka, setPriceOfBaka ] = useState('');
  const [gptAdminBakas , setGptAdminBakas ] = useState([]);

  const [userAwiatAdminBakas , setUserAwaitAdminBakas ] = useState([])

  const [userBakas,setUserBakas] = useState([]);
  const navigate = useNavigate();
  const getOpen = async () => {
    if(auth?.admin === 'admin'){
      try{
        const response2 = await axiosPrivate.get(
            '/dashboard/opinions/',
        );
        console.log(response2);
        setAdminOpenions(response2.data);
      }  
      catch(err){
        console.log(err);
      }
    }
  }
  useEffect(() => {
    setIsAdmin(JSON.parse(localStorage.getItem('auth'))?.admin === 'admin' ? true : false);
    setAuth(JSON.parse(localStorage.getItem('auth')));
    setLogedInUser(localStorage.getItem('logedIn'));
    setSingleUserAddv(JSON.parse(localStorage.getItem('singleUserAdvers')));
    setStatistics(JSON.parse(localStorage.getItem('statistics')));
    setAdminOpenions(JSON.parse(localStorage.getItem('adminopenions')));
    setAdminAdvertises(JSON.parse(localStorage.getItem('adminadvertises')));
    setUsersadvertizeorder(JSON.parse(localStorage.getItem('usersadvertizeorder')));
    setactiveAddv(JSON.parse(localStorage.getItem('activeAddv')));
    setUserPayedAddv(JSON.parse(localStorage.getItem('userPayedAddv')));
    setAdminErrors(JSON.parse(localStorage.getItem('AdminErrors')));
    setAdminContacts(JSON.parse(localStorage.getItem('AdminContacts')));
    setGptAdminBakas(JSON.parse(localStorage.getItem('AdminBakas')));
    setUserBakas(JSON.parse(localStorage.getItem('UserBakas')));
    setUserAwaitAdminBakas(JSON.parse(localStorage.getItem('UserAwaitsBakas')));
  },[logedInUser,setAuth])
  useEffect(() => {
    const fetchOpenions = async () =>{ 
        try{
            const response = await axios.get('/user/opinion/')
            setOpenions(response.data);
        }
        catch(err){
        }
    }
    fetchOpenions();
  },[setOpenions,adminOpenions])
  useEffect(() => {
    const getOpen = async () => {
      if(auth?.admin === 'admin'){
        try{
          const response2 = await axiosPrivate.get(
              '/dashboard/opinions/',
          );
          setAdminOpenions(response2.data);
          localStorage.setItem('adminopenions',JSON.stringify(response2.data));
        }  
        catch(err){
        }
      }
    }
      getOpen();
  },[auth?.admin,axiosPrivate])
  const [ details,setDetails ] = useState('');
  const logout = () => {
    setLogedInUser(false);
    setUserName('');
    setPassword('');
    setAdvPhone('');
    setIsAdmin(false);
    setAuth(null);
    localStorage.setItem('logedIn',false);
    localStorage.clear();
  }
  const handleSubmitRegister = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post(
        '/advertiser/',
        {
          "name":userName,
          "phone":advPhone,
          "password":password
        }
      );
      setUserName(response.data.name);
      setAdvPhone(response.data.phone);
      alert('تم انشاء حسابك بنجاح');
      navigate('/login');
    }
    catch(err){
      alert(err.response.data.phone ? 'عذراً هذا الرقم موجود مسبقاً' : '')
    }
  }
  const handleSubmitContact = async (e) => {
    e.preventDefault();
    try{
      await axios.post(
          '/user/connect/',
          {
              "description": contactMessage,
              "email": email,
              "phone": phoneContact
          }  
      )
      alert('تم رفع طلبك بنجاح');
      setPhoneContact('');
      setEmail('');
      setContactMessage('');
  }
  catch(err){
  }
  }
  const handleSubmitError = async (e) => {
    e.preventDefault();
    try{
      await axios.post(
          '/user/complaint/',
          {
              "description": contactMessage,
              "email": email,
              "phone": phoneContact
          }  
      )
      alert('تم رفع الشكوى بنجاح');
      setPhoneContact('');
      setEmail('');
      setContactMessage('');
    }
    catch(err){
    }
  }
  const getSingleUserAdv = async () => {
    try{
      const response = await axiosPrivate.get(
          '/advertiser/advertisement/',
      )
      localStorage.setItem('singleUserAdvers',JSON.stringify(response.data));
      setSingleUserAddv(response.data);
    }
    catch(err){
    }
  }
  const sendUserAdv = async (e) => {
    e.preventDefault();
    try{
      const response = await axiosPrivate.post(
          '/advertiser/advertisement/',
          {
              "name": advName,
              "country": advCountry,
              "description": advDescription,
              "date_of_start": advStartDate,
              "date_of_end": advEndDate,
              "URL": advUrl,
          }  
      )
      const newArray = [...singleUserAddv,response.data]
      setSingleUserAddv(newArray);
      localStorage.setItem('singleUserAdvers',JSON.stringify(newArray));
      alert('تم رفع الاعلان بنجاح');
      navigate('/addadv');
      setAdvName('');
      // setAdvCountry('');
      setAdvDescription('');
      setAdvEndDate('');
      setAdvStartDate('');
      setAdvUrl('');
    }
    catch(err){
        alert(err?.response?.data?.URL ? 'رابط الاعلان غير صحيح' : 'سجل دخولك أولاً')
    }
  }
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(
        '/',
        {
          "phone":advPhone,
          "password":password
        }
      );
      localStorage.setItem('auth',JSON.stringify({phone:response?.data?.phone,country:response?.data?.country,accessToken:response?.data?.access,refreshToken:response?.data?.refresh,admin:response.data.type}))
      localStorage.setItem('logedIn',true);
      if(response.data.type === 'admin'){
        setIsAdmin(true);
        navigate('/admin');
      }
      else{
        setIsAdmin(false);
        navigate('/');
      }
      setLogedInUser(true);
      setAuth({userName,password,accessToken:response?.data?.access,refreshToken:response?.data?.refresh,admin:response.data.type});
    }
    catch(err){
      alert('تأكد من المعلومات التي ادخلتها');
    }
  }
  const getAdminAdvertises = async () => {
    try{
        const response = await axiosPrivate.get(
          '/dashboard/advertisement/',
          {
            // "phone":userName,
            // "password":password
          }
        );
        setAdminAdvertises(response.data);
        localStorage.setItem('adminadvertises',JSON.stringify(response.data))      
      }
      catch(err){
      }
  }
  const getusersAdvertises = async () => {
    try{
        const response = await axiosPrivate.get(
          '/dashboard/pending-advertisement/',
          {
            // "phone":userName,
            // "password":password
          }
        )
        setUsersadvertizeorder(response.data);
        localStorage.setItem('usersadvertizeorder',JSON.stringify(response.data))      

      }
      catch(err){
      }
  }
  const getActiveAddv = async () => {
    try{
      const response = await axiosPrivate.get(
        '/dashboard/active-advertisement/',
        {}
      )
      setactiveAddv(response.data);
      localStorage.setItem('activeAddv',JSON.stringify(response.data));      

    }
    catch(err){
    }
  }
  const getPayedAwaitAddv = async () => {
    try{
      const response = await axiosPrivate.get(
        '/dashboard/yemen-pending-advertisement/',
        {}
      )
      setUserPayedAddv(response.data);
      localStorage.setItem('userPayedAddv',JSON.stringify(response.data));      
    }
    catch(err){
    }
  }
  const getAllAddv = async () => {
    getPayedAwaitAddv();
    getActiveAddv();
    getusersAdvertises();
    getAdminAdvertises();
  }
  const handleSubmitOpenion = async (e) => {
    e.preventDefault();
    try{
        await axios.post(
            '/user/opinion/',
            {
                "description": userOpenion
            }
          )
          alert('تم رفع الرأي بنجاح ، شكراً لك');
          setUserOpenion('');
    }
    catch(err){
    }
  }
  const getAdminContactsErrors = async () => {
    try{
      const response2 = await axiosPrivate.get('/dashboard/connect/')
      setAdminContacts(response2.data);
      const response = await axiosPrivate.get('/dashboard/complaints/')
      setAdminErrors(response.data);
      localStorage.setItem('AdminContacts',JSON.stringify(response2.data));
      localStorage.setItem('AdminErrors',JSON.stringify(response.data));
  }
  catch(err){
  }
  }
  const sendAdv = async (e) => {
    e.preventDefault();
    try{
       await axiosPrivate.post(
        '/dashboard/advertisement/',
        {
          "name": advName,
          "country": advCountry,
          "description": advDescription,
          "URL": advUrl,
          "active_to_see": adminAdvActive === 'مفعل' ? true : false,
          "price": adminAdvPrice,
          "date_of_end": advEndDate,
          "date_of_start": advStartDate
        }
    )
    alert('تم ارسال اعلان الآدمن بنجاح');
    getAdminAdvertises();
    }
    catch(err){
    }
  }
  const getAdminStatistic = async () => {
    try{
      const response2 = await axiosPrivate.get('/dashboard/user-country/')
      setStatistics(response2.data);
      localStorage.setItem('statistics',JSON.stringify(response2.data));
    }
    catch(err){
    }
  }
  const getAdminBaka = async () => {
    try{
      const response = await axiosPrivate.get(
        '/dashboard/plan/',
    )
    setGptAdminBakas(response.data);
    localStorage.setItem('AdminBakas',JSON.stringify(response.data));
    }
    catch(err){
    }
  }
  const sendAdminBaka = async (e) => {
    e.preventDefault();
    try{
      await axiosPrivate.post(
        '/dashboard/plan/',
        {
          "name": nameBaka,
          "number_of_day": daysOfBaka,
          "price": priceOfBaka
      }
    )
    alert('تم ارسال باقة جديدة بنجاح');
    getAdminBaka();
    }
    catch(err){
    }
  }
  const getUserBaka = async () => {
    try{
      const response = await axios.get(
        '/user/plan/',
    )
    setUserBakas(response.data);
    localStorage.setItem('UserBakas',JSON.stringify(response.data));
    }
    catch(err){
    }
  }
  const getUserAwaitBakas = async () => {
    try{
      const response = await axiosPrivate.get(
        '/dashboard/active-user/',
    )
    setUserAwaitAdminBakas(response.data);
    localStorage.setItem('UserAwaitsBakas',JSON.stringify(response.data));
    }
    catch(err){
    }  
  }
    return(
        <DataContext.Provider value={{
            userName,setUserName,password,setPassword,handleSubmitlogin,handleSubmitRegister,
            logedInUser,setLogedInUser,logout,isAdmin,setIsAdmin,
            contactMessage,setContactMessage,email,setEmail,handleSubmitContact,phoneContact,setPhoneContact,handleSubmitError,getAdminContactsErrors,
            adminContacts,adminErrors,
            details,setDetails,
            advDescription,setAdvDescription,advName,setAdvName,advUrl,setAdvUrl,advCountry,setAdvCountry,advStartDate,setAdvStartDate,advEndDate,setAdvEndDate,sendUserAdv,
            advPhone,setAdvPhone,
            singleUserAddv , setSingleUserAddv,getSingleUserAdv,
            adminAdvertises,setAdminAdvertises,
            getPayedAwaitAddv,getActiveAddv,getusersAdvertises,getAdminAdvertises,
            adminAdvActive, setAdminAdvactive,adminAdvPrice, setAdminAdvPrice,
            getAllAddv,
            usersadvertizeorder,
            userPayedAddv,activeAddv,getOpen,sendAdv,
            userOpenion, setUserOpenion ,handleSubmitOpenion,
            openions,adminOpenions,
            getAdminStatistic,statistics, setStatistics,
            nameBaka , setNameBaka ,daysOfBaka , setDaysOfBaka ,priceOfBaka, setPriceOfBaka , gptAdminBakas , setGptAdminBakas ,sendAdminBaka,
            getAdminBaka,getUserBaka,userBakas,userAwiatAdminBakas,getUserAwaitBakas,
            
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;