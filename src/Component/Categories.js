import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import gif from "./gif"



export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data)

      })
  }, [])

  if(!categories || !categories.length) return gif
     return (
    <div>
      <h2>
        {categories.map((v) => {
          return (
            <h3><Link to = {"/products/category/"+v}> {v} </Link></h3>
          )
        })}
      </h2>
    </div>
  )
}