import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'

const SearchListSwitch = () => (
  <Switch>
    <Route path='/search' component={Search}/>
  </Switch>
)

export default SearchListSwitch
