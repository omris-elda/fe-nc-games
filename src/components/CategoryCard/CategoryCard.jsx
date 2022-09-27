import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
    
    const newslug = category.slug.replaceAll("-", " ");

    return (
      <li className="category-item">
        <h2 className="category-slug">
            <Link to={`/reviews/${category.slug}`}>
              {newslug}
            </Link>
        </h2>
            <p>{category.description}</p>
            <hr/>
      </li>
    );
}