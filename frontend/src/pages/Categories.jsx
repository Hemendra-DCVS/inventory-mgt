import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CategoriesList from "../components/CategoriesList";
import { getCategories } from "../features/categorySlice";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Categories = () => {
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }

    if (isError) {
      console.log(message);
    }
  }, []);

  return (
    <div className="h-screen bg-slate-100 p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            <Link to="/" className="font-black mr-4">
              &larr;
            </Link>
            Categories
          </h1>
          <CategoriesList categories={categories} />
        </>
      )}
    </div>
  );
};

export default Categories;
