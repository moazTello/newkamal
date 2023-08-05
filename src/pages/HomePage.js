import React from 'react'
import { Link } from 'react-router-dom';
import Open from '../images/Open.svg';
import Marquee from "react-fast-marquee";
import {BsBookmarkCheckFill,BsWhatsapp} from 'react-icons/bs';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
const HomePage = () => {
    const {openions} = useContext(DataContext);
    return (
    
    <div className='home_all'>
        <div className='home_sector_1'>
            <p className='home_sector_1_descripe' > ؟ GPT-3.5 Turbo ما هو </p>
            <p className='home_sector_1_text'> هو نموذج لغة قوي بشكل لا يصدق مدعوم بالذكاء الاصطناعي يمكنه فهم وإنشاء نص يشبه الإنسان 
                بناءً على موجه فقط ، مما يجعله أداة قيمة لمجموعة متنوعة من التطبيقات.
                يسمح لك بالتواصل مع النموذج والتحدث ، وتلقي ردود مفصلة عن الموضوع الذي تم سؤال النموذج عنه
            </p>
            <img style={{width:'20%',marginTop:'25px'}} src={Open} alt='' />
            <Link className='linkbtn' style={{marginTop:'25px'}} to='/gpt'>
                جرب الآن
            </Link>
        </div>
        <div className='home_sector_marqee'>
            <p className='marqee_oppenien'>آراء العملاء</p>
            <Marquee style={{backgroundColor:'white'}} direction="right" pauseOnHover="true">
            {openions?.map(op => (
                <p 
                  className='marqee_text'
                  key={op.pk} 
                >
                   عميل : {op.description}
                </p>
            ))}
            </Marquee>    
        </div>
        <div className='home_sector_2'>
            <p className='home_sector_2_descripe'>خدماتنا</p>
            <div className='home_sector_2_service'>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <p style={{marginRight:'0px',textAlign:'center'}}>
                    Whatsapp ChatBot     عن طريق GPT-3.5 Turbo خدمة استخدام
                    </p>
                    <BsBookmarkCheckFill style={{marginLeft:'20px'}}  color='white' size={30}/>
                </div>
                <button style={{width:"130px"}} className='linkbtn_sec2'>
                    <BsWhatsapp size={20}/>
                </button>
            </div>
            <div className='home_sector_2_service'>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <p style={{marginRight:'0%',textAlign:'center'}}>
                    Whatsapp ChatBot خدمة الاعلانات المدفوعة عبر 
                    </p>
                    <BsBookmarkCheckFill style={{marginLeft:'20px'}} color='white' size={30}/>
                </div>
                <Link style={{fontSize:'12px'}} className='linkbtn_sec2' to='/addadv'>
                    انشر إعلانك الآن
                </Link>
            </div>
        </div>

    </div>
  )
}

export default HomePage