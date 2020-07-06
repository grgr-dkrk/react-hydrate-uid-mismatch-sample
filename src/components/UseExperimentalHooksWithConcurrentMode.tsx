import * as React from 'react'


const sleep = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return 'ok'
}

let res: string

const getStatus = (asyncFn: () => Promise<string>) => {

  const pending = asyncFn().then(res_ => {
    res = res_
    return res
  })

  return {
    read() {
      if (!res) {
        throw pending
      } else {
        return res
      }
    },
  }
}

const getSomething = () => {
  return getStatus(sleep)
}

const Component = () => {
  // @ts-ignore
  const id = React.unstable_useOpaqueIdentifier()
  const res = getSomething().read()
  console.log('log: useOpaqueIdentifier id')
  console.log(id)
  return (
    <section>
      <h2 id={id}>{res}</h2>
      <p aria-describedby={id}>{res}</p>
    </section>
  )
}

export const UseExperimentalHooksWithConcurrentMode: React.FC = () => {
  // @ts-ignore
  const id = React.unstable_useOpaqueIdentifier()
  return (
    <>
    <section>
      <h2 id={id}>Title for Description</h2>
      <p aria-describedby={id}>Description</p>
    </section>
    <React.Suspense fallback={<p role="status">Loading...</p>}>
      <Component />
    </React.Suspense>
    </>
  )
}
