import * as React from 'react'
import { ROUTES } from '../constants'
import { NavLink } from 'react-router-dom'

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
          {Object.keys(ROUTES).map(key => (
            <li key={ROUTES[key]}>
              <NavLink to={`/${ROUTES[key]}`}>{ROUTES[key]}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
