import reactLogo from '@/assets/react.svg'
import loginLeft from "@/assets/images/login_left.png";
import SwitchDark from "@/components/SwitchDark";
import LoginForm from "./components/LoginForm";
import { connect } from "react-redux";
import "./index.less";

const Login = () => {
	return (
		<div className="login-container">
			{/* <SwitchDark /> */}
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={reactLogo} alt="logo" />
						<span className="logo-text">React-Antd-Admin</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default connect()(Login);
