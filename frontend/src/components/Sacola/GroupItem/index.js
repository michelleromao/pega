import React, { useState, useCallback, Component} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container, Title, Content, Seller, Contact } from './style';
import Item from '../Item';

class GroupItem extends Component {
   
  constructor(props){
      console.log("GroupItem constructor")
      super(props);
      this.products = props.products;
      

  }
     
  render(){

    let product_list = [];

    for(let product of this.products){
      product_list.push(
        <Item 
          stage={this.props.stage} 
          status={this.props.status} 
          id={product.id}
          state={product.state}
          size={product.size}
          owner={product.owner}
          title={product.title} 
          color={product.color}  
          price={product.price}  
          offert={product.offert}  
          promo={product.promo}  
          image={product.image}
        />
      )
  }
    
    return (
      <>
        <Container>
          <Title>
            {this.props.stageTitle === 1 ? (
              <>
                <Seller>
                  Vendido por <Link>{this.owner}</Link>
                </Seller>
              </>
            ) : (
              <></>
            )}
            {this.props.stageTitle === 2 ? (
              <>
                <Seller>
                  Combine com <Link>{this.owner}</Link> o tipo de entrega ao efetuar a
                  compra.
                </Seller>
              </>
            ) : (
              <></>
            )}
            {this.props.stageTitle === 3 ? (
              <>
                <Seller>
                  Vendido por <Link>Michelle</Link>
                </Seller>
                <Contact>(85) 9 9705 5583</Contact>
              </>
            ) : (
              <></>
            )}
          </Title>
          <Content>
            {product_list}
          </Content>
        </Container>
      </>
    );      
  }
}

const mapStateToProps = (state, props) =>{
  return {"products": state.bag.products};    
}

export default connect(mapStateToProps)(GroupItem)
