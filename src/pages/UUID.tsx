import * as React from 'react'
import { Input } from '../components/Input'
import { Form } from '../containers/Form'
import { FORM_DATA } from '../constants'
import * as uuid from 'uuid'

const UUID: React.FC = () => {
  return (
    <Form>
      {FORM_DATA.map(data => (
        <Input id={uuid.v4()} key={uuid.v4()}>
          {data.label}
        </Input>
      ))}
    </Form>
  )
}

export default UUID
