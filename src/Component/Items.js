import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import gif from "./gif"

export default function Items() {
    const [items, setItems] = useState([])
    const { cat } = useParams()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/" + cat)
            .then(res => res.json())
            .then(data => {
                setItems(data)

            })
    }, [])
    if (!items || !items.length) return gif

    return (
        <div>
            {items.map((v) => {
                return (
                    <div>
                        <Link to={'/products/'+v.id}>
                            <h4> {v.title} </h4>
                            <h4> {v.price}$ </h4>
                        </Link>
                    </div>)
            })}

        </div>
    )
}