import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Validate from '../validation/validation';
import FormInput from '../components/formInput';
/*import {
  upper,
  aadhaar,
  pan,
  salary
} from '../validation/normalize';*/
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const Page3 = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
               name="workingexperience"
               type="text"
               component={FormInput}
               label="Working Experience/Educational Qualification"
               inputPlaceHolder="Enter"
            />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="spoj_id"
                  type="text"
                  component={FormInput}
                  label="Spoj_id"
                  inputPlaceHolder="Enter"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="codeforces_id"
                  type="text"
                  component={FormInput}
                  label="Codeforces_id"
                  inputPlaceHolder="Enter"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="hackerrank_id"
                  type="text"
                  component={FormInput}
                  label="Hackerrank_id"
                  inputPlaceHolder="Enter"
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                   name="hackerearth_id"
                   type="text"
                   component={FormInput}
                   label="Hackerearth_id"
                   inputPlaceHolder="Enter"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label htmlFor="file-input">
                      Upload Resume
                    </Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="file"
                      id="file-input"
                      name="File"
                    />
                  </Col>
                </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
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

Page3.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  Validate,
})(Page3);