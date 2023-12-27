import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default function CartSummary() {
  return (
    <div>
      <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    </div>
  )
}
