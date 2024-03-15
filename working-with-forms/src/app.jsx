import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const App = () => {
    return (
        <div className="w-full">
            <Header />
            <LoginForm />
            <SignupForm />
        </div>
    )
}

export default App;