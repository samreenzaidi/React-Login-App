import React from 'react';

class Login extends React.Component{
    onLogin = (event) => {
        event.preventDefault();
        const data = {
            accountId: "admin",
            pswd: "123456"
        }
        fetch("https://apertum-interview.herokuapp.com/api/user/login", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)    
            })
            .then((response) => response.json())
            .then((response) => {
                window.localStorage.setItem("TOKEN", response.token); 
                this.props.history.push('/userlist');
                }
            )
            .catch((error) => {
                console.error("Error:", error);
            }
        );
    }
        
    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-12 login-form">
                        <h3>Apertum</h3>
                        <form onSubmit={this.onLogin}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Login;