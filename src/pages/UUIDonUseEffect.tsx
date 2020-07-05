import * as React from 'react'
import { Form } from '../containers/Form'
import { InputWithUUID } from '../components/InputWithUUID'

const UUIDonUseEffect: React.FC = () => {
  return (
    <Form>
      <InputWithUUID />
    </Form>
  )
}

export default UUIDonUseEffect
