import * as React from 'react'
import { Form } from '../containers/Form'
import { FORM_DATA } from '../constants'
import { InputWithUseUid } from '../components/InputWithUseUid'

const ReactUidHooks: React.FC = () => {
  return (
    <Form>
      {FORM_DATA.map(data => (
        <InputWithUseUid key={data.label}>{data.label}</InputWithUseUid>
      ))}
    </Form>
  )
}

export default ReactUidHooks
