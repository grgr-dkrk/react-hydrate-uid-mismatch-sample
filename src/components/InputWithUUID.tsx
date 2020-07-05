import * as React from 'react'
import * as uuid from 'uuid'

export const InputWithUUID: React.FC = props => {
  const id = React.useMemo(() => uuid.v4(), [])
  const [active, seta] = React.useState(false)

  console.log(id)

  return (
    <React.Fragment>
      {active && <input type="text" autoFocus></input>}
      <label htmlFor={id}>{props.children}</label>
      <input
        autoFocus={true}
        id={id}
        type="text"
        onChange={() => {
          seta(true)
        }}
        defaultValue={`id: ${id}`}
      />
    </React.Fragment>
  )
}
