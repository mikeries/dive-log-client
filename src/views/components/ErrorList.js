import React from 'react'

const ErrorList = ({ errors }) => {
  const errorList = []
    for (let key in errors) {
      errorList.push(
        <p key={key}>
          {`${key}: ${errors[key]}`}
        </p>
      )
  }
  return (
    <div>{errorList}</div>
  )
}

export default ErrorList;