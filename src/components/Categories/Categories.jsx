import { useState, useEffect } from "react";
import {GetCategories} from "../../queries/queries";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        GetCategories().then((response) => {
          setLoading(false);
          return setCategories(response.categories);
        });
    }, [])

    if (loading) {
        return (<h2>Loading...</h2>)
    } else {
        return (
          <ul className="category-container">
            {categories.map((category) => {
              return <CategoryCard category={category} />;
            })}
          </ul>
        );
    }
}