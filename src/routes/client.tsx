import * as React from 'react'
import { Switch, Route } from 'react-router'
import { ROUTES } from '../constants'

import Default from '../pages/Default'
import UUID from '../pages/UUID'
import ReactUid from '../pages/ReactUid'
import ReactUidSeed from '../pages/ReactUidSeed'
import ReactUidHooks from '../pages/ReactUidHooks'
import UUIDonUseEffect from '../pages/UUIDonUseEffect'
import UseExperimentalHooks from '../pages/UseExperimentalHooks'

const BrowserRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
      <Route path={`/${ROUTES.UUID}`} component={UUID} />
      <Route path={`/${ROUTES.UUIDdirect}`} component={UUIDonUseEffect} />
      <Route path={`/${ROUTES.ReactUid}`} component={ReactUid} />
      <Route path={`/${ROUTES.ReactUidSeed}`} component={ReactUidSeed} />
      <Route path={`/${ROUTES.ReactUidHooks}`} component={ReactUidHooks} />
      <Route
        path={`/${ROUTES.ReactUseExperimentalHooks}`}
        component={UseExperimentalHooks}
      />
    </Switch>
  )
}

export default BrowserRoutes
