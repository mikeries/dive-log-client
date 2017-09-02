class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  validate = state => {
    let validation = this.reset();
    
    this.validations.forEach(v => {
      if (!validation[v.field].isInvalid) {
        if(v.method(state[v.field], v.options, state) !== v.validWhen) {
          validation[v.field] = { isInvalid: true, message: v.message }
          validation.isValid = false;
        }
      }
    });

    return validation;
  }

  reset = () => {
    const validation = {}

    this.validations.map(v => (
      validation[v.field] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validation };
  }
}

export default FormValidator;