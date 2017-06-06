import React from 'react';
import { TextField }  from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid,Row,Col} from 'react-flexbox-grid';
import {Link } from 'react-router-dom';
import { Step, Stepper,  StepLabel,StepContent } from 'material-ui/Stepper';
import './LogUpForm.scss';



export default class LogUpForm extends React.Component {


  constructor(props){
    super(props);
    this.errors = {};
    this.state = {
      finished: false,
      stepIndex: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  };

   handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
      const stepIndex = this.state.stepIndex;
      return (
        <div >
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
          />
          {step > 0 && (
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              disableTouchRipple={true}
              disableFocusRipple={true}
              onTouchTap={this.handlePrev}
            />
          )}
        </div>
      );
    }

  render() {
     const {finished, stepIndex} = this.state;
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={10} sm={6} md={4} lg={3} >
            <Stepper activeStep={stepIndex} orientation="vertical">
              <Step>
                <StepLabel>Fill in form</StepLabel>
                <StepContent>
                  <div>
                    <TextField floatingLabelText="Full name"
                          errorText={this.errors.email} />
                  </div>
                  <div>
                    <TextField floatingLabelText="Email"
                          errorText={this.errors.email} />
                  </div>
                  <div>
                    <TextField floatingLabelText="Password"
                          errorText={this.errors.email} />
                  </div>
                  <div>
                    <TextField floatingLabelText="Confirm password"
                          errorText={this.errors.email} />
                  </div>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Confirm yourself</StepLabel>
                <StepContent>
                  <div>
                  <p>Plese, check your email, you should got secret code. Put it in form. </p>
                    <TextField floatingLabelText="code"
                          errorText={this.errors.email} />
                  </div>
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Get start</StepLabel>
                <StepContent>
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
            </Stepper>
          </Col>
        </Row>
      </Grid>

    );
  }
}
