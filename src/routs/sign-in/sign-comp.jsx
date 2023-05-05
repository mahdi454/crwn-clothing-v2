
import SignUpForm from "../../components/sign-up-form/sign-up-com";
import SignEmail from "../../components/signin-email/signin-email.com";
import './signin.style.jsx'
import { SignUpPage } from "./signin.style.jsx";
const SignIn = () => {
  /*   useEffect(()=>
    async ()=>{
      const response=await getRedirectResult(auth);
      if(response){
        const userDocRef=await createUserDocFromAuth(response.user)
        console.log(userDocRef)
      }
    
  },[]); */


  return (
    <SignUpPage>
      
        <SignUpForm />
    
        <SignEmail />
     
      
    </SignUpPage>
  );
};
export default SignIn;
