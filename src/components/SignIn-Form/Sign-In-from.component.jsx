import { useState  } from "react";


import "./sign-in.styles.scss";

import FormInput from "../Form-Input/FormInput.component";
import Button,{BUTTON_TYPE_CLASSES} from "../Button/Button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fromFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = fromFields;
  // console.log(fromFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInGoogleUser = async () => {
    await signInWithGooglePopup();
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      // setCurrentUser(user);


    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect  Password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...fromFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already Have An Account</h2>
      <span>Sign Up With Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            SIGN IN
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInGoogleUser}>
            GOOGLE SIGN IN
          </Button>
          
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
