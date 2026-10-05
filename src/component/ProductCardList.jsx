import React from 'react'
import ProductCard from './ProductCard'
import dog1 from '../assets/dog1.jfif'

export default function ProductCardList({updateActivePage, setproduct}) {
  return (
    <div className='card-list'>
        <ProductCard title={"Laptop"}  image={dog1}  price={23579} description="This is a powerful laptop with high performance." updateActivePage={updateActivePage} setproduct={setproduct}/>
        <ProductCard title={"Phone"} price={23579} image={dog1} description="This is a powerful laptop with high performance." updateActivePage={updateActivePage} setproduct={setproduct}/>
        <ProductCard title={"Computer"} price={23579} image={dog1} description="This is a powerful laptop with high performance." updateActivePage={updateActivePage} setproduct={setproduct}/>
        <ProductCard title={"Mouse"} price={23579} image={dog1} description="This is a powerful laptop with high performance." updateActivePage={updateActivePage} setproduct={setproduct}/>
        <ProductCard title={"Adaptor"} price={23579} image={dog1} description="This is a powerful laptop with high performance." updateActivePage={updateActivePage} setproduct={setproduct}/>
        <ProductCard title={"Charger"} price={23579} image={dog1} description="This is a powerful laptop with high performance." updateActivePage={updateActivePage} setproduct={setproduct}/>
    </div>
  )
}
