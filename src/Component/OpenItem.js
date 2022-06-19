import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import gif from "./gif"

export default function OpenItems() {
    const [item, setItem] = useState()
    const {id} = useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+ id)
            .then(res => res.json())
            .then(data => {
                setItem(data)

            })
    }, [])
    if(!item) return gif

    return (
        <div >
            
               
                    <h4> {item.title} </h4>
                    <h4> {item.price}$ </h4>
                    <img  src={item.image} />
                
            

        </div>
    )
}