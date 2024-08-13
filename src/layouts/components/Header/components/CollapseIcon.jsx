import React, { Component } from 'react'
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { updateCollapse } from '@/redux/modules/menu/action'

class CollapseIcon extends Component {
  render() {
    const { isCollapse, updateCollapse } = this.props
    return (
      <div className='collapsed' onClick={() => updateCollapse(!isCollapse)} id='isCollapse'>
        {
          isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state.menu
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon)

