import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import Page1 from './page1';
import Page3 from './page3';
import Page2 from './page2';

class Form extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'User details'},
        {title: 'Coding Profile'},
        {title: 'Development Profile'}
      ]
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={ steps } activeStep={ page } />
        {page === 0 && <Page1 onSubmit={this.nextPage} />}
        {page === 1 && (
          <Page3
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <Page2
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;