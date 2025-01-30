"use client"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/header"
import { useContext} from "react";
import { CartContext } from "../context/CartContext";

export default function Detaile({products}:any) {

  const {qty,add,dec,addProduct,items}:any= useContext(CartContext)
  console.log(items);

  return (
    <div>
      <Navbar/>
         <div>
        
        <br />
    
        {/* bread-crums */}
    
        <div>
    
        <ul className="flex items-center justify-start pl-9 font-[sans-serif] space-x-4 mt-4">
         <Link href={"/"}> <li className="text-gray-500 text-base cursor-pointer">
            Home
          </li></Link>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-3.5 -rotate-90" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd" data-original="#000000"></path>
            </svg>
          </li>
        <Link href={"/shopp"}>  <li className="text-gray-500 text-base cursor-pointer">
        Shop
          </li></Link>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-3.5 -rotate-90" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd" data-original="#000000"></path>
            </svg>
          </li>
          <li className='montserrat text-2xl'>{products.name}</li>
        
        </ul>
        </div>
    
        {/* Product details */}
        <br />
        <br />
    
        <div>

      
      
      <div className="font-sans tracking-wide p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto pl-[100px]">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
    
                    <div className="lg:col-span-3 text-center">
                        <div className="lg:h-[450px] p-4 relative before:absolute before:inset-0 bg-peach  before:opacity-20 before:rounded">
                            <img src={products.imagePath} alt="Product" className="lg:w-11/12 w-full h-full rounded object-contain object-top" />
                        </div>
   
                    </div>
    
                    <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-start gap-4">
                            <div>
                                <h2 className="text-2xl font-extrabold montserrat">{products.name}</h2>
                                <br />
    
                                <h2 className="text-xl text-slate-400  montserrat">Rs: {products.price}</h2>
                                <div className="flex space-x-1 mt-4">
                                    <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
    
                        </div>
    
                  <br />
    
                        <div>
                           
                            <p className="text-slate-400 montserrat text-xl  mt-4">{products.description}</p>
                        </div>
    
                      <br />
    
                        <div>
                        <p className=" montserrat text-slate-600">Category: {products.category}</p>
<br />
                        <p className=" montserrat text-slate-600">Stock Level: {products.stockLevel}</p>
                        <br />
            <p className=" montserrat text-slate-600">Featured: {products.isFeaturedProduct ? 'Yes' : 'No'}</p>

                        </div>
    
                        <hr className="my-6" />
    
                        <div>
                           
    
                            <div className="flex  border w-max mt-4 rounded-xl overflow-hidden">
                                <button type="button" className=" w-12 h-10 font-semibold" >
                                <span  onClick={add}>+</span>
                                </button>
                                <button type="button" className="bg-transparent w-12 h-10 font-semibold  text-lg">
                                {qty}
                                </button>
                                <button type="button" className=" w-12 h-10 " >
                                <span onClick={dec}> -</span>  
                                </button>
                                
    
                            </div>
                        </div>
    <br />
    
                       
    
                        <div className="flex flex-wrap gap-4  snipcart-add-item"> 
                         
                     
                  <button className=" border border-black rounded-xl w-[130px] h-[50px]  hover:bg-black hover:text-white" onClick={()=>addProduct(products,qty)}
    
      >
      Add to cart
    </button>
                        </div>
                        <br />
                        <br />
    
                        <div className="lg:flex lg:items-center">
                <ul className="flex space-x-6">
                  <li>
                    <a href="javascript:void(0)">
                      <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                          d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                          clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                          d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                          clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 hover:fill-white w-7 h-7"
                        viewBox="0 0 24 24">
                        <path
                          d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </a>
                  </li>
                </ul>
    
                <button type="button" className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" className="mr-1" viewBox="0 0 64 64">
                                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                    </svg>
                                    100
                                </button>
              </div>
                    </div>
                    
                </div>
    
    
             
    
    
                <div className="mt-20 max-w-4xl">
                        <ul className="flex ">
                            <li
                                className=" font-semibold text-sm  py-3 px-8 border-b-2 montserrat cursor-pointer transition-all">
                                Description</li>
                            <li className=" font-semibold text-sm  py-3 px-8 cursor-pointer transition-all montserrat">Reviews</li>
                        </ul>
    
                        <div className="mt-8">
                            <h3 className="text-xl font-bold montserrat ">Product Description</h3>
                            <p className="text-sm text-gray-500 mt-4">Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look.</p>
                        </div>
    
                     
                    </div>
            
            </div>

      
      
    
        </div>
        </div>
    </div>
  )
}

