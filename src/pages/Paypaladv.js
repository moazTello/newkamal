import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const Paypaladv = ({price,pk}) => {
   const PAY_PAL = "AVhwNDK4-TkjN7dVszNc_UqJU88q-_OYwkj3B90bwko0Y57zwgfPEfUjVKdO0YnKcYu0mtgyXC4EY--1";
//    const [cash,setCash] = useState('');
//    const [okkk,setOkkk] = useState(false);
//    useEffect(() => {
//     if(okkk&&cash?.length > 0){
//         alert('لقد تم دفع المبلغ المطلوب' + cash);
//         setOkkk(false);
//         setCash('');
//     }
//    },[cash,okkk])
  return (
    <div className='container' style={{paddingTop:'0px',zIndex:'0',minWidth:'400px'}}>
        <div className='loginbox' style={{marginTop:'0px'}}>
 
          <PayPalScriptProvider 
            options={{"client-id":PAY_PAL}}
            >
            <PayPalButtons 
                createOrder={async(data,actions) => {
                    console.log(`${pk} adv`);
                    return await actions.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    currency_code:'USD',
                                    value:price,
                                },
                                description:`${pk} adv`,
                                // custom_id:JSON.parse(localStorage.getItem('auth')?.phone),
                                // payment_type:isBaka ? 'Baka' : 'Adver'
                            },
                        ],
                    });
                }}
                onApprove={ async (data,actions) => {
                    return await actions.order.capture().then(function (details) {
                        // setCash(details.payer.name.given_name);
                        // alert('لقد تم دفع المبلغ المطلوب' + details.payer.name.given_name);
                        // setOkkk(true);
                    });
                }}
                onCancel={() => alert('لم تتم عملية الدفع')}
                onError={() => alert('حصل خطأ ما حاول لاحقاً')}
            />
          </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default Paypaladv;