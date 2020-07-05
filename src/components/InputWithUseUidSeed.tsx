import * as React from 'react'
import { useUIDSeed } from 'react-uid'

export const InputWithUseUidSeed: React.FC = props => {
  const seed = useUIDSeed()
  return (
    <React.Fragment>
      <label htmlFor={seed('seed')}>{props.children}</label>
      <input
        id={seed('seed')}
        type="text"
        defaultValue={`id: ${seed('seed')}`}
      />
    </React.Fragment>
  )
}
