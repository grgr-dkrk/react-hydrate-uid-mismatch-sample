import * as React from 'react'
import { ROUTES } from '../constants'
import { NavLink } from 'react-router-dom'

type RouteKey = keyof typeof ROUTES

export const Header = () => {
  return (
    <header role="banner">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              basic
            </NavLink>
          </li>
          {Object.keys(ROUTES).map(key => {
            if (
              process.env.RENDER_MODE === 'lagacy' &&
              key === 'ReactUseExperimentalHooksWithCM'
            )
              return <React.Fragment key={'unknown'}></React.Fragment>
            return (
              <li key={ROUTES[key as RouteKey]}>
                <NavLink to={`/${ROUTES[key as RouteKey]}`}>
                  {ROUTES[key as RouteKey]}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
