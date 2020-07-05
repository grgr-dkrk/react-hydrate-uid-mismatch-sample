import * as React from 'react'
import { Form } from '../containers/Form'
import { FORM_DATA } from '../constants'
import { InputWithUseUidSeed } from '../components/InputWithUseUidSeed'

const ReactUidSeed: React.FC = () => {
  return (
    <Form>
      {FORM_DATA.map(data => (
        <InputWithUseUidSeed key={data.label}>{data.label}</InputWithUseUidSeed>
      ))}
    </Form>
  )
}

export default ReactUidSeed
