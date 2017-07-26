import React from 'react';

const ErrorList = ({ errors }) => {

  const errorList = Object.keys(errors).map(key => (
      <p key={key}>
        {`${key}: ${errors[key]}`}
      </p>
  ));
  
  return <div>{errorList}</div>
}

export default ErrorList;