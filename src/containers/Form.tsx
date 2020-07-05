import * as React from 'react'

export const Form: React.FC = props => {
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [],
  )
  return <form onSubmit={handleSubmit}>{props.children}</form>
}
