import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class Login extends Component {

    loginUser () {
        const userVal = this._userEle.value;
        const passVal = this._passEle.value;
        const status = false;

        this.props.userData.data.map((profile) => {
            if (profile.user === userVal && profile.pass === passVal) {
                window.location.href = "http://localhost:3000/home";
                status = true;
            }
            
        })
        
        status === false ? alert('Incorrect username or password') : console.log('nothing');
    }

    render() {
        return (
            <div style = {styles.main}>
                <h1>Login here</h1>
                <input type="text" placeholder = 'Username' ref = {(ele) => (this._userEle = ele)}/>
                <input type="password" placeholder = 'Password' ref = {(ele) => (this._passEle = ele)}/>
                <button onClick = {() => this.loginUser()}>Login</button>
                <button><Link to='/register'>Register</Link></button>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px',
    },
};

const mapStateToProps = (state) => ({
    userData : state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
