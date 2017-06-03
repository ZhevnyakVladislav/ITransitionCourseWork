import React from 'react';
import { TextField }  from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid,Row,Col} from 'react-flexbox-grid';
import {Link } from 'react-router-dom';
import './Registration.scss'

export default class MaterialUiForm extends React.Component {

  render() {
    return (
      <form className="row">
        <div className="">
          <TextField floatingLabelText="Email"/>
        </div>
        <div className="">
          <TextField floatingLabelText="Password"/>
        </div>
        <div className="">
          <TextField floatingLabelText="Confirm password"/>
        </div>
        <RaisedButton className="primary-button" label="Login In" primary={true}/>
      </form>
    );
  }
}
