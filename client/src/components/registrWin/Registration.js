import React from 'react';
import { TextField }  from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid,Row,Col} from 'react-flexbox-grid';
import {Link } from 'react-router-dom';
import './Registration.scss';

export default class MaterialUiForm extends React.Component {
  constructor(props){
    super(props);
    this.errors  = {};
  }
  validData(){
  }
  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col>
            <form className="">
              <div className="">
                <TextField floatingLabelText="Email"
                           errorText={this.errors.email} />
              </div>
              <div className="">
                <TextField floatingLabelText="Password"
                           type="password" errorText=""
                           errorText={this.errors.passwordText} />
              </div>
              <div className="">
                <TextField floatingLabelText="Confirm password"
                           type="password"
                           errorText={this.errors.confirmPassword} />
              </div>
              <RaisedButton className="primary-button"
                            label="Log In" primary={true}
                            onTouchTap={this.validData.bind(this)} />
            </form>
          </Col>
        </Row>
      </Grid>

    );
  }
}
