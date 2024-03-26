import Header from "./components/Header";
// import SignUpInput from "./components/SignupInput";
// import UseRefLogingForm from "./components/useRefFormPractice/UseRefLogingForm";
// import LoginForm from "./components/LoginForm";
import StateLogin from "./components/useStateFormPractice/StateLogin";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <StateLogin />

      {/*  
      <SignUpInput />
      <UseRefLogingForm />
        <LoginForm />
    */}
    </div>
  );
};

export default App;
