class FormValidator {
  constructor(validations) {
    this.validations = validations;
    this.validation = this.reset();
  }

  validate = state => {
    const validation = {};
    let isValid = true;
    
    this.validations.forEach(v => {
      if (!validation[v.property] || validation[v.property].isValid) {
        if(v.method(state[v.property], v.options) !== v.validWhen) {
          validation[v.property] = { isValid: false, message: v.message }
          isValid = false;
        } else {
          validation[v.property] = { isValid: true, message: '' }
        }
      }
    });

    this.validation = validation;
    return isValid;
  }


  reset = () => {
    const validation = {}

    this.validations.map(v => (
      validation[v.property] = { isValid: true, message: '' }
    ));

    return validation;
  }
}

export default FormValidator;