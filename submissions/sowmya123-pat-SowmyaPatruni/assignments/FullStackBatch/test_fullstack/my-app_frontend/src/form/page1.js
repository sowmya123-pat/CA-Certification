import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/formInput'
import {
  Mobile,
  Captialize,
} from '../validation/normalize';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup
} from 'reactstrap';


const Page1 = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="username"
              type="text"
              component={FormInput}
              label="UserName *"
              inputPlaceHolder="Enter User Name"
          
            />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="firstName"
                  type="text"
                  component={FormInput}
                  label="FirstName"
                  inputPlaceHolder="Enter First Name"
                  normalize={Captialize}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="lastName"
                  type="text"
                  component={FormInput}
                  label="LastName"
                  inputPlaceHolder="Enter Last Name"
                  normalize={Captialize}
                />
              </Col>
              </FormGroup>
              <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="dob"
                  type="date"
                  component={FormInput}
                  label="Date of Birth"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                   name="phone"
                   type="text"
                   component={FormInput}
                   label="Mobile No *"
                   inputPlaceHolder="+91"
                   normalize={Mobile}
                />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}}>
               Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

Page1.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Page1);