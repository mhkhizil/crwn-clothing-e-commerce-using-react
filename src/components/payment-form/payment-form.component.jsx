import {CardElement,useElements,useStripe} from "@stripe/react-stripe-js"
import CustomButton from "../button/customButom.component"
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
const PaymentForm=()=>{
    const elements=useElements();
    const stripe=useStripe();
    const preventHandler=async(e)=>{
        e.preventDefault();
    }
return(
    <PaymentFormContainer>
        <FormContainer>
            <h2>Credit card payment</h2>
        <CardElement/>
        <CustomButton btnType={"inverted"} >
            Pay now
        </CustomButton>
        </FormContainer>
    </PaymentFormContainer>
)
}
export default PaymentForm;