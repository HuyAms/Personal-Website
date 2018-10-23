import React, {Component} from 'react';
import classes from './PositiveBox.css';
import PositiveSentences from './PositiveSentences/PositiveSentences';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/ReactAux/ReactAux';
import Fade from 'react-reveal/Fade';
import Input from '../UI/Input/Input';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import Pulse from 'react-reveal/Pulse';

class PositiveBox extends Component {

  componentDidMount() {
    this.props.onFetchPositive();
  }

  state = {
    positiveForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        label: 'Name',
        errorMessage: '',
      },
      positive: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: 'Positive words',
        },
        value: '',
        validation: {
          required: true,
          minLength: 20,
          maxLength: 150,
        },
        valid: false,
        touched: false,
        label: 'We are happy to hear from you',
        errorMessage: '',
      },
    },
    formIsValid: false,
  };

  checkValidity(value, rules) {
    let isValid = true;
    let errorMessage = '';

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorMessage = (value.trim() !== '') ?
          errorMessage :
          'This field is required';
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
      errorMessage = (value.length >= rules.minLength) ?
          errorMessage :
          `At least ${rules.minLength} characters`;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
      errorMessage = (value.length <= rules.maxLength) ?
          errorMessage :
          `Limited to ${rules.maxLength} characters`;
    }

    return {isValid: isValid, errorMessage: errorMessage};
  }

  onChangedHandler = (event, inputIdentifier) => {
    const updatePositiveForm = {
      ...this.state.positiveForm,
    };
    const updatedFormElement = {
      ...updatePositiveForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value,
        updatedFormElement.validation).isValid;
    updatedFormElement.errorMessage = this.checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation).errorMessage;
    updatedFormElement.touched = true;
    updatePositiveForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatePositiveForm) {
      formIsValid = updatePositiveForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({positiveForm: updatePositiveForm, formIsValid: formIsValid});
  };

  sharingHandler = () => {
    this.props.openPositiveForm();
  };

  sharingCancelHandler = () => {
    this.props.closePositiveForm();
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.positiveForm) {
      formData[formElementIdentifier] = this.state.positiveForm[formElementIdentifier].value;
    }

    this.props.onPostPositive(formData);
  };

  render() {

    const formElementArray = [];
    for (let key in this.state.positiveForm) {
      formElementArray.push({
        id: key,
        config: this.state.positiveForm[key],
      });
    }

    let positiveSentences = <Spinner/>;
    let form = <Spinner/>;

    if (!this.props.loading) {
      if (!this.props.error) {
        positiveSentences =
            <PositiveSentences positives={this.props.positives}/>;

        form = (
            <form onSubmit={this.onFormSubmitHandler}>
              {formElementArray.map(formElement => (
                  <Input
                      key={formElement.id}
                      label={formElement.config.label}
                      elementType={formElement.config.elementType}
                      elementConfig={formElement.config.elementConfig}
                      value={formElement.config.value}
                      invalid={!formElement.config.valid}
                      shouldValidate={formElement.config.validation}
                      touched={formElement.config.touched}
                      changed={(event) => this.onChangedHandler(event,
                          formElement.id)}
                      errorMessage={formElement.config.errorMessage}
                  />
              ))}
              <div>
                <button onClick={this.sharingCancelHandler} type="button"
                        className={classes.ButtonDanger}>x
                </button>
                <Button btnTheme="Dark" btnType="Normal"
                        disabled={!this.state.formIsValid}>Share</Button>
              </div>
            </form>
        );

      } else {
        positiveSentences = <p>Fail to load positive words</p>;
        form = <p>Fail to post positive words</p>;
      }
    }

    let positiveBoxContent = this.props.sharing ?
        (
            <Fade top>
              <div className={classes.PositiveForm}>
                {form}
              </div>
            </Fade>
        ) : (
            <Aux>
              <Fade bottom>
                <div>
                  <h3>Share your positive words?</h3>
                  <div className={classes.Button}>
                    <Pulse delay={1000} count={2}>
                      <Button clicked={this.sharingHandler} btnTheme="Light"
                              btnType="Small">Yes</Button>
                    </Pulse>
                  </div>
                </div>
                {positiveSentences}
              </Fade>
            </Aux>
        );

    return (
        <section className={classes.PositiveBoxContent}>
          <h2>Positive Box</h2>
          {positiveBoxContent}
        </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    positives: state.positiveReducer.get('positives'),
    loading: state.positiveReducer.get('loading'),
    error: state.positiveReducer.get('error'),
    sharing: state.positiveReducer.get('sharing'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openPositiveForm: () => dispatch(actions.openPositiveForm()),
    closePositiveForm: () => dispatch(actions.closePositiveForm()),
    onFetchPositive: () => dispatch(actions.fetchPositiveStart()),
    onPostPositive: (positiveData) => dispatch(
        actions.postPositiveStart(positiveData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositiveBox);
