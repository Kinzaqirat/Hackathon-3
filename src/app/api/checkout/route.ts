

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export const POST = async (request: Request) => {
  try {
    console.log("➡️ Checkout API Called");

    // ✅ Parse incoming request
    const { products } = await request.json();
    console.log("📦 Products:", products);

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products provided" }, { status: 400 });
    }

    let stripeLineItems: any[] = [];

    for (const product of products) {
      console.log(`🔍 Checking product: ${product.name}`);

      // ✅ Find or create product
      let existingProduct = await stripe.products.list({ active: true });
      let matchedProduct = existingProduct.data.find(
        (p) => p.name.toLowerCase() === product.name.toLowerCase()
      );

      if (!matchedProduct) {
        console.log(`🚀 Creating new product: ${product.name}`);
        matchedProduct = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
          },
        });
      }

      // ✅ Ensure we have a valid price
      if (!matchedProduct.default_price) {
        return NextResponse.json(
          { error: `Product ${product.name} has no price.` },
          { status: 400 }
        );
      }

      stripeLineItems.push({
        price: matchedProduct.default_price,
        quantity: product.quantity,
      });
    }

    console.log("🛒 Stripe Line Items:", stripeLineItems);

    // ✅ Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeLineItems,
      mode: "payment",
      success_url: "https://hackathon-3.netlify.app/sucess",
      cancel_url: "https://hackathon-3.netlify.app/cancel",
    });

    console.log("✅ Stripe Session Created:", session.url);

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("❌ Stripe Checkout API Error:", error.message);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
};


// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// // const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string, {
 
// // });

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// export const POST = async (request: Request) => {
//   try {
//     const { products } = await request.json();

//     if (!products || products.length === 0) {
//       return NextResponse.json({ error: "No products provided" }, { status: 400 });
//     }

//     let stripeLineItems = [];

//     for (const product of products) {
//       // ✅ Fetch existing Stripe products
//       const activeProducts = await stripe.products.list({ active: true });
//       const existingProducts = activeProducts.data;

//       let stripeProduct = existingProducts.find(
//         (p:any) => p.name.toLowerCase() === product.name.toLowerCase()
//       );

//       // ✅ If the product doesn't exist, create it
//       if (!stripeProduct) {
//         const newProduct = await stripe.products.create({
//           name: product.name,
//         });

//         // ✅ Create a price for the product
//         const newPrice = await stripe.prices.create({
//           product: newProduct.id,
//           unit_amount: product.price * 100,
//           currency: "usd",
//         });

//         stripeProduct = newProduct; // Assign new product reference
//         stripeProduct.default_price = newPrice.id; // Manually set price ID
//       }

//       // ✅ Ensure product has a price
//       let priceId = stripeProduct.default_price;
//       if (!priceId) {
//         const prices = await stripe.prices.list({ product: stripeProduct.id });
//         priceId = prices.data[0]?.id;

//         if (!priceId) {
//           console.error(`No valid price found for product: ${product.name}`);
//           return NextResponse.json(
//             { error: `No price found for ${product.name}` },
//             { status: 400 }
//           );
//         }
//       }

//       // ✅ Add line item to checkout session
//       stripeLineItems.push({
//         price: priceId,
//         quantity: product.quantity,
//       });
//     }

//     // ✅ Create Stripe Checkout Session
//     const session = await stripe.checkout.sessions.create({
//       line_items: stripeLineItems.map((item) => ({
//         price: String(item.price), // ✅ Ensure it's a string
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//     });

//     return NextResponse.json({ url: session.url });

//   } catch (error: any) {
//     console.error("Stripe Checkout Error:", error.message, error);
//     return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
//   }
// };


// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// export const POST= async (request:any)=>{
//     const {products}=request.json()

// // 1 . find products
// let activeProduct = await stripe.products.list({active:true})
// for(const product of products){
//     const matchedProducts=activeProduct?.find((stripeProduct:any)=>
//     stripeProduct.name.toLowerCase() === product.name.toLowerCase()
//     )

//     // 2. if product is not exist it then add it
//     if(matchedProducts === undefined){
// const prod = await stripe.products.create({
// name:product.name,
// default_price_data:{
//     currency:"usd",
//     unit_amount:product.price*100
// }
// })

//     }
// }
//     const stripePoducts= [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ]
//     const session = await stripe.checkout.sessions.create({
//         line_items:stripePoducts,
//         mode: 'payment',
//         success_url: ``,
//         cancel_url: ``,
//       });
     
//     return NextResponse.json({
//         data:"hello"
//     })
// }

// import { NextResponse } from "next/server";
// const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

// export const POST = async (request: any) => {
//   try {
//     const { products } = await request.json();

//     if (!products || products.length === 0) {
//       return NextResponse.json({ error: "No products provided" }, { status: 400 });
//     }

//     // ✅ 1. Fetch active Stripe products correctly
//     let activeProducts = await stripe.products.list({ active: true });
//     let existingProducts = activeProducts.data; // 🔥 Fix: Access `.data`

//     for (const product of products) {
//       const matchedProduct = existingProducts.find(
//         (stripeProduct: any) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
//       );

//       // ✅ 2. If product doesn't exist, create it
//       if (!matchedProduct) {
//         const newProduct = await stripe.products.create({
//           name: product.name,
//           default_price_data: {
//             currency: "usd",
//             unit_amount: product.price * 100,
//           },
//         });

//         // 🔥 Fix: Fetch updated product list after adding new product
//         activeProducts = await stripe.products.list({ active: true });
//         existingProducts = activeProducts.data;
//       }
//     }

//     // ✅ 3. Fetch updated product list
//     activeProducts = await stripe.products.list({ active: true });
//     existingProducts = activeProducts.data;
//     let stripeLineItems = [];

//     for (const product of products) {
//       const stripeProduct = existingProducts.find(
//         (stripeProduct: any) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
//       );

//       if (stripeProduct) {
//         stripeLineItems.push({
//           price: stripeProduct.default_price, // ✅ Fix: Use `default_price`
//           quantity: product.quantity,
//         });
//       }
//     }

//     if (stripeLineItems.length === 0) {
//       return NextResponse.json({ error: "No matching Stripe products found" }, { status: 400 });
//     }

//     // ✅ 4. Create Stripe Checkout Session
//     const session = await stripe.checkout.sessions.create({
//       line_items: stripeLineItems,
//       mode: "payment",
//       success_url: `http://localhost:3000/sucess`,
//       cancel_url: `http://localhost:3000/cancel`,
//     });

//     // ✅ 5. Return the correct session URL
//     return NextResponse.json({ url: session.url });

//   } catch (error) {
//     console.error("Stripe Checkout Error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// };