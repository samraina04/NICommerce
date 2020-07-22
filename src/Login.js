import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super (props);
        this.state = {email:"", password: ""}
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        // Authenticate?
    }

    render() {
        return (
            <div className="login-container">
                <div className="header">
                    <div className="heading">
                        <h1 className="heading-main">Sign In</h1>
                        <hr className="heading-line" />
                    </div>
                    <form className="textbox" onSubmit={this.handleSubmit}>
                        <label htmlFor="email" className="details">Email-id</label>
                        <input type="email" 
                        id="email" name="email"
                        className="input-field" required autocomplete="email" pattern="email-id" autofocus placeholder="email-id" 
                        value={this.state.email}
                        onChange={this.handleChange} />

                        <label htmlFor="password" className="details">Password</label>
                        <input type="password" 
                        id="password"
                        name="password" className="input-field"
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.handleChange}/>

                        <button type="submit" className="btn">Sign In</button>
                        <a className="register" href="#">Click Here to Register</a>
                    </form>
                </div>
            </div>
            );
        }
    }

export default Login;
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div classNameName="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }