import { Component } from 'react'
import { Switch } from "antd";

export default class SwitchDark extends Component {
  render() {
    return (
      <Switch
        className="dark"
        checkedChildren={<>🌞</>}
        unCheckedChildren={<>🌜</>}
      />
    )
  }
}
