import * as React from 'react'
import { Input } from '../components/Input'
import { Form } from '../containers/Form'

const Default: React.FC = () => {
  return (
    <Form>
      <Input id="form_name">Sample1</Input>
      <Input id="form_like">Sample2</Input>
      <Input id="form_tsurai" noLabelFor>
        Sample3(no htmlFor)
      </Input>
    </Form>
  )
}

export default Default
