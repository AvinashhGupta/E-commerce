// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
import './Authentication.styles.scss'

import SignUpForm from "../../components/Sign-Up-Form/SignUp-from.component";
import SignInForm from '../../components/SignIn-Form/Sign-In-from.component'

const Authentication = () => {
//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };
  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>GOOGLE SIGN IN</button> */}
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
