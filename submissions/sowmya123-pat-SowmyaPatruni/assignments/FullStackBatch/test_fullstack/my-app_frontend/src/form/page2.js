import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Validate  from '../validation/validation';
import FormInput from '../components/formInput';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const Page2 = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="github_id"
                  type="text"
                  component={FormInput}
                  label="github_id"
                  inputPlaceHolder="Enter"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="bitbucketId"
                  type="text"
                  component={FormInput}
                  label="bitbucket_id_id"
                  inputPlaceHolder="Enter"
                />
              </Col>
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="12" lg="6">
                <Field
                 name="gitlab_id"
                 type="text"
                 component={FormInput}
                 label="gitlab_id"
                 inputPlaceHolder="Enter"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="kaggle_id"
                  type="text"
                  component={FormInput}
                  label="kaggle_id"
                  inputPlaceHolder="Enter"
                />
              </Col>
            </FormGroup>
            <br />
            
            <FormGroup row>
              <Col xs="12" lg="6">
                <Label htmlFor="textarea-input">Skills</Label>
              </Col>
              <Col xs="12" lg="12">
                <Input
                  type="textarea"
                  name="textarea-input"
                  id="textarea-input"
                  rows="3"
                  placeholder="Content..."
                />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" type="submit" style={{marginRight: '20px'}} disabled={pristine || submitting}>
               Save &nbsp;
              <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

Page2.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  Validate
})(Page2);