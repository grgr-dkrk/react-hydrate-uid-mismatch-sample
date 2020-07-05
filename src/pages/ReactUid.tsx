import * as React from 'react'
import { Input } from '../components/Input'
import { Form } from '../containers/Form'
import { UID } from 'react-uid'
import { FORM_DATA } from '../constants'

const ReactUid: React.FC = () => {
  return (
    <Form>
      <UID>
        {(_id, uid) =>
          FORM_DATA.map(data => (
            <Input id={uid(data)} key={uid(data)}>
              {data.label}
            </Input>
          ))
        }
      </UID>
    </Form>
  )
}

export default ReactUid
