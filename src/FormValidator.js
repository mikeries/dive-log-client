import validator from 'validator';

class FormValidator {
  constructor() {
    this.validation = {
      name: { isValid: true, message: '' },
      country: { isValid: true, message: '' }
    }
  }

  validate = state => {
    const { name, country } = state;
    let validation = this.validation;
    let formIsValid = true;

    if(validator.isEmpty(name)) {
      validation.name.isValid = false;
      validation.name.message = 'You must supply a name.'
      formIsValid = false;
    }

    if(validator.isEmpty(country)) {
      validation.country.isValid = false;
      validation.country.message = 'You must supply a country.'
      formIsValid = false;
    }

    return formIsValid;
  }


  reset = () => {
    var validation = this.validation;

    Object.keys(validation).map(key => (
      validation[key] = { isValid: true, message: '' }
    ));

    return validation;
  }
}

export default FormValidator;