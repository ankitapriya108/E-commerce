// import React,{useEffect,useState} from 'react'
// import axios from "axios"

// function Shop() {
// const[data,setData] = useState([]);


// useEffect(()=>{
//     axios.get("https://dummyjson.com/products")
//     .then((result)=>{
//         setData(result.data.products)
//     })
// },

// console.log(data)

//   return (          
//     <div>           
//      <div className="product-list">
//           {
//             data.map((product , index)=>{
//                   return <div className='product' key={index}>
//                     <h2>{product.title}</h2>
//                     <img src={product.thumbnail} alt='photo'/>
//                   </div>
//             })
//           }
         
//         </div>
//     </div>
//   )
// }

// export default Shop



import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './shop.css'


function Shop() {
const[data,setData] = useState([]);

useEffect(()=>
{
  axios.get("https://dummyjson.com/products")
  .then((result)=>{
   setData(result.data.products)   
    })
},[])
console.log(data);


  return (
    <div className='box'>
      {data.map((value,index)=>
      {
        return <div className='product' key={index}> 
        <img src={value.thumbnail} alt="" />
          <h2>{value.title}</h2>
          <p>{value.description}</p>
        </div>
      })}
    </div>
  )
}

export default Shop