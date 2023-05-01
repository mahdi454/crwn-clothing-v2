
import SignUpForm from "../../components/sign-up-form/sign-up-com";
import SignEmail from "../../components/signin-email/signin-email.com";
import './signin.style.scss'
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
    <div className="sign-page">
      
        <SignUpForm />
    
        <SignEmail />
     
      
    </div>
  );
};
export default SignIn;
