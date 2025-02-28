import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { client } from "../lib/axios";

export default function Products(){
    const[products, setProducts]=useState([])


        async function Getdata(){
            const response = await client.get("/products");
            const{data}=response.data
            setProducts(data)
            // console.log(data)
        }
        useEffect(()=>{
            Getdata()
        },[])
        console.log(products)
        return products ? <div className="container mt-30 px-4" >

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {
                products?.map((product) => {
                    const { id, attributes } = product; // استخراج id و attributes
                    return (   <div  className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition-all" key={id}>
                            <img className="w-[200px] h-[200px] object-cover rounded-lg" src={`https://strapi-store-server.onrender.com${attributes.image}`} alt={attributes.title} />
                            <h1 className="text-lg font-bold mt-2">{attributes.title}</h1>
                            <h3 className="text-gray-600 text-sm">{attributes.description}</h3>
                            <span  className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-md mt-1">{attributes.category}</span>
                            <button  className="bg-[#f47458] text-white px-4 py-2 rounded-lg mt-3 hover:bg-[#e06348] transition-all">View Details</button>
                        </div>)
                })
            }
        </div> 
        </div>: <h1> Loading...</h1>
}