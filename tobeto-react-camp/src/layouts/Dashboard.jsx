import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Route,Routes} from 'react-router-dom'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" Component={ProductList}></Route>
              <Route exact path="/products" Component={ProductList}></Route>
              <Route path="/products/:id" Component={ProductDetail}></Route>
              <Route path="/cart" Component={CartDetail}></Route>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
