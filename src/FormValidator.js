class FormValidator {
  constructor(validations) {
    this.validations = validations;
    this.validation = this.reset();
  }

  validate = state => {
    const validation = {};
    let isValid = true;
    
    this.validations.forEach(v => {
      if (!validation[v.property] || !validation[v.property].isInvalid) {
        if(v.method(state[v.property], v.options, state) !== v.validWhen) {
          validation[v.property] = { isInvalid: true, message: v.message }
          isValid = false;
        } else {
          validation[v.property] = { isInvalid: false, message: '' }
        }
      }
    });

    return { isValid, ...validation };
  }


  reset = () => {
    const validation = {}

    this.validations.map(v => (
      validation[v.property] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validation };
  }
}

export default FormValidator;