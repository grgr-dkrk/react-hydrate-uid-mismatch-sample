import * as React from 'react'
import { useUID } from 'react-uid'

export const InputWithUseUid: React.FC = props => {
  const uid = useUID()
  return (
    <React.Fragment>
      <label htmlFor={uid}>{props.children}</label>
      <input id={uid} type="text" defaultValue={`id: ${uid}`} />
    </React.Fragment>
  )
}
