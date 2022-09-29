import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
    // remove the dashes from the slugs and replace with spaces
    const newslug = category.slug.replaceAll("-", " ");

    return (
        <li className="category-item" id={category.slug} key={category.slug}>
        <h2 className="category-slug">
            <Link to={`/reviews/category/${category.slug}`}>
              {newslug}
            </Link>
        </h2>
            <p>{category.description}</p>
            <hr/>
      </li>
    );
}