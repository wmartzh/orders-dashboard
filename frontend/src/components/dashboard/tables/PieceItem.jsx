/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Item from './Item'


class PieceItem extends React.Component{

    list(data){
        const children = (items) => {
            if (items) {
              return <i>{ this.list(items) }</i>
          }
        }
        
        return data.map((node, index) => {
          return <Item key={ node.id } brand={ node.brand} model={node.model}>
            { children(node.items) }
          </Item>
        })
    }
    render() {
        return <ul>
          { this.list(this.props.data) }
      </ul>
    }


}
export default PieceItem;