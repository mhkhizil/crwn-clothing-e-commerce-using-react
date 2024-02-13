import {CardElement} from "@stripe/react-stripe-js"
import CustomButton from "../button/customButom.component"
const PaymentForm=()=>{
return(
    <div>
        <CardElement/>
        <CustomButton btnType={"inverted"} >
            Pay now
        </CustomButton>
    </div>
)
}
export default PaymentForm;