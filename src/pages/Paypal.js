import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const Paypal = ({price}) => {
    

  return (
    <div className='container' style={{paddingTop:'0px'}}>
        <div className='loginbox' style={{marginTop:'0px'}}>
          <PayPalScriptProvider 
            // options={{"client-id":""}}
            >
            <PayPalButtons 
                createOrder={async(data,actions) => {
                    return await actions.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    value:price,
                                },
                            },
                        ],
                    });
                }}
                onApprove={ (data,actions) => {
                    return actions.order.capture().then(function (details) {

                        alert('لقد تم دفع المبلغ المطلوب' + details.payer.name.given_name);
                    });
                }}
            />
          </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default Paypal;