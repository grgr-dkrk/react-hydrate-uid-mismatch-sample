import * as React from 'react'

export const UseExperimentalHooks: React.FC = () => {
  // @ts-ignore
  const id = React.unstable_useOpaqueIdentifier()

  console.log('log:useOpaqueIdentifier id')
  console.log(id)

  return (
    <React.Fragment>
      <h2 id={id}>Title for Description</h2>
      <p aria-describedby={id}>Description</p>
    </React.Fragment>
  )
}
