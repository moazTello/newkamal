import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/Datacontext';
import Marquee from "react-fast-marquee";

const About = () => {
  const {openions} = useContext(DataContext);
  return (
    <div className='home_all'>
        <div className='home_sector_1'>
            <p className='home_sector_1_descripe' >  ! مرحبًا بك في مفيد</p>
            <p className='home_sector_1_text'>
            , AI نحن مفيد 
            </p>
            <p className='home_sector_1_text'>
            GPT 3.5 Turbo نفتخر بتقديم أفضل وأول خدمة للدردشة على منصة الواتساب في الوطن العربي.
             باستخدام تقنية 
            </p>
            <p className='home_sector_1_text' style={{marginTop:'0px'}}> 
         .و نوفر لك تجربة دردشة متقدمة و فائقة الجودة  
            </p>
            <p className='home_sector_1_text'> 
          تمتاز منصتنا بسهولة الاستخدام والمرونة، حيث يمكنك التفاعل معنا عبر الواتساب بشكل آمن ومريح. نحن نقدم حلاً فعالًا للاستفسارات والمعلومات في مختلف المجالات، سواء كنت تبحث عن مساعدة في السفر والسياحة، أو الصحة والعافية، أو التعليم والثقافة، والمزيد
            </p>
            <p className='home_sector_1_text'> 
            فريقنا مكون من خبراء محترفين في مجالات مختلفة، يعملون جاهدين لتقديم معلومات موثوقة ودقيقة ومفيدة لك. نحن نهتم بتلبية احتياجاتك وتوفير الدعم اللازم لكل زبون. نحن نعتقد أن الاطلاع على المعلومات الصحيحة هو الأساس في بناء مستقبل أفضل، ولهذا السبب نسعى جاهدين لتوفير مصادر موثوقة ومجربة تساعدك في اتخاذ القرارات الصائبة
            </p>
            <p className='home_sector_1_text'>
            , AI مفيد
            </p>
            <p className='home_sector_1_text'>
            موجودة في اليمن، ونحن نفاخر بكوننا جزءًا من تطوير المحتوى المحلي وتمكينك من الوصول إلى المعرفة والموارد المحلية 
            </p>
            <p className='home_sector_1_text'> 
             نحن نتطلع إلى خدمتك والإجابة على أسئلتك ومساعدتك على الوصول إلى المعلومات التي تحتاجها 
            </p>
            <p className='home_sector_1_text'> 
            , AI  شكرًا لاهتمامك بمفيد 
            </p>
            <p className='home_sector_1_text'> 
            ونأمل أن تستفيد من خدماتنا وتجد الإجابات التي تبحث عنها. نحن هنا لنكون الشريك الموثوق لك في رحلتك نحو المعرفة والتطوير
            </p>
        </div>
        <div className='home_sector_marqee' style={{backgroundColor:'white',border:"1px solid rgb(74,153,233)"}}>
            <p className='marqee_oppenien'>آراء العملاء</p>
            <Marquee style={{backgroundColor:'white'}} direction="right" pauseOnHover="true">
            {openions.map(op => (
                <p 
                  className='marqee_text'
                  key={op.pk} 
                >
                    عميل : {op.description} 
                </p>
            ))}
            </Marquee>    
        </div>
    </div>
  )
}

export default About