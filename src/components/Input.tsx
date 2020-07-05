import * as React from 'react'

type InputProps = {
  id: string
  noLabelFor?: boolean
}

export const Input: React.FC<InputProps> = props => {
  return (
    <React.Fragment>
      {!props.noLabelFor ? (
        <label htmlFor={props.id}>{props.children}</label>
      ) : (
        <label>{props.children}</label>
      )}
      <input id={props.id} type="text" defaultValue={`id: ${props.id}`} />
    </React.Fragment>
  )
}
