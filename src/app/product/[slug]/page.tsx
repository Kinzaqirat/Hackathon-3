"use client"
import { useParams } from "next/navigation"
import {groq} from  "next-sanity"

import { SanityClient } from "@/sanity/sanity.client";

import Detaile from "../../components/detaile";


import Link from "next/link";

import { Image } from "sanity";




interface Product{
  imagePath:Image,
  name:string,
  price : number,
  description : string,
  category:string,
  stockLevel:number,
  isFeaturedProduct: string


}
export default async  function Dynamic() {

    const {slug}:any= useParams();
    console.log(slug);
  
    
    const data=await SanityClient.fetch(groq ` *[_type == "product" ] `)
       console.log(data);
        
        const products=data.find((product:any)=>product.slug.current ==slug)
        console.log(products);
        


      
 

return (
  <div>

<Detaile products ={products} />
{/* <HeroSec  product ={product2}/> */}
  </div>
)
}