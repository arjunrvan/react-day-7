import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions';
import { connect } from 'react-redux';


export class Register extends Component {

    registerUser() {
        const userVal = this._userEle.value;
        const passVal = this._passEle.value;
        this._userEle.value = '';
        this._passEle.value = '';

        if (userVal!== '' && passVal!== '') {
            const data = {
                user: userVal,
                pass: passVal,
                key: Date.now(),
            }
            this.props.registerUser(data);
            alert('Successfully registered. Please return to login page.');
        } else {
            alert('Please input both username and password!');
        }
    }

    render() {
        return (
            <div style={styles.main}>
                <h1>Register here</h1>
                <input type="text" placeholder = 'Username' ref = {(ele) => (this._userEle = ele)}/>
                <input type="password" placeholder = 'Password' ref = {(ele) => (this._passEle = ele)}/>
                <button onClick = {() => this.registerUser()}>Register</button>
                <button><Link to='/'>Return to Login</Link></button>
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
});

const mapDispatchToProps = {
    registerUser:registerUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);
