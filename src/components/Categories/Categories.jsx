import { useState, useEffect } from "react";
import {getCategories} from "../../queries/queries";
import {CategoryCard} from "../";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        getCategories().then((response) => {
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
              return (
                <li className="category-item" id={category.slug} key={category.slug}>
                  <CategoryCard category={category} />
                  </li>
                )
            })}
          </ul>
        );
    }
}