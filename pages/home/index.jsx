import React from 'react'
import Carousel from '../../components/Carousel'
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper'
import MenuItem from '../../components/product/MenuItem'
import About from '../../components/About'
import Customers from "../../components/customers/Customers";
import Aygit from '../../components/Aygit'

const Index = ({ categoryList, productList }) => {
  return (      
    <React.Fragment>  
    <Carousel/>
    <Campaigns/>
     <Aygit/>    
    <MenuWrapper categoryList={categoryList} productList={productList} />
    <About/>          
    <Customers/>
    </React.Fragment>
  );
};

export default Index;
