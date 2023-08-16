import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const Paypal = ({price,phoneBaka,number_of_day}) => {
//    const PAY_PAL = "AVhwNDK4-TkjN7dVszNc_UqJU88q-_OYwkj3B90bwko0Y57zwgfPEfUjVKdO0YnKcYu0mtgyXC4EY--1";
const PAY_PAL = "AY_Hv2sOquUQM8RWarL_t9-mVCqif0OYp2H8V0X8mBwDTWbN2YdfyHo92zKKamRhhj6KMPRZJoeT-IJB";

  return (
    <div className='container' style={{paddingTop:'0px',zIndex:'0',minWidth:'400px'}}>
        <div className='loginbox' style={{marginTop:'0px'}}>
 
          <PayPalScriptProvider 
            options={{"client-id":PAY_PAL}}
            >
            <PayPalButtons 
                createOrder={async(data,actions) => {
                    console.log(`${phoneBaka} ${number_of_day} Baka`);
                    return await actions.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    currency_code:'USD',
                                    value:price,
                                },
                                description:`${phoneBaka}  ${number_of_day}  Baka`,
                            },
                        ],
                    });
                }}
                onApprove={ async (data,actions) => {
                    return await actions.order.capture().then(function (details) {
                        alert('لقد تم دفع المبلغ المطلوب' + details.payer.name.given_name);
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

export default Paypal;