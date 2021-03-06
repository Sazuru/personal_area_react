import React, { Component } from 'react';
import { Form, Button } from "bootstrap-4-react";

export default class Auth extends Component {
    render(){
    return (
        <Form>
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <Form.Input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Password</label>
            <Form.Input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check>
              <Form.CheckInput type="checkbox" id="exampleCheck1" />
              <Form.CheckLabel htmlFor="exampleCheck1">
                Check me out
              </Form.CheckLabel>
            </Form.Check>
          </Form.Group>
          <div className="btn-container">
          <Button primary type="submit" onClick={this.props.signIn}>
            Login
          </Button>
          <Button primary type="submit" onClick={this.props.createAccount}>
            Create Account
          </Button>
          </div>
        </Form>
    )
    }
}
