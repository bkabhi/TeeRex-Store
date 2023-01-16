import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rudux/product/action';
import { getFilterProducts, colours, genders, prices, types } from '../../utils/FilteredProducts';
import ProductCard from './ProductCard';


const ProductListingPage = () => {
    const dispatch = useDispatch();
    const { products, isPending, isError} = useSelector(state => state.Products)

    const [updatedProducts, setUpdatedProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);

    const showData = updatedProducts.length > 0 ? updatedProducts : products

    const handleSearch = (inputValue) => {
        if (inputValue === "") {
            setUpdatedProducts(products);
        } else {
            const searchedProducts = products.filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.color.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.type.toLowerCase().includes(inputValue.toLowerCase())
            );
            setUpdatedProducts(searchedProducts);
        }
    }

    const handleChange = (e) => {
        const inputValue = e.target.value
        handleSearch(inputValue)
        setSearch(inputValue)
    }

    const handleFilter = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setFilter([...filter, name])
        } else {
            const filtered = filter.filter((item) => item !== name)
            setFilter(filtered)
        }
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    useEffect(() => {
        setUpdatedProducts(getFilterProducts(filter, products));
    }, [filter])

    return (
        <>
            <div className='products__search'>
                <input type="text" className='products__search__input' placeholder='Search for products...'
                    value={search}
                    onChange={handleChange} />
                <button onClick={() => handleSearch(search)}>
                    <AiOutlineSearch color='white' size={20} />
                </button>
            </div>
            <div className='productPage'>
                <div className='productPage__filters'>
                    <h3>Colour</h3>
                    {
                        colours.map((colour) => (
                            <div key={colour}>
                                <input type="checkbox" name={colour} onChange={handleFilter} />
                                <label>{colour}</label>
                            </div>
                        ))
                    }
                    <h3>Gender</h3>
                    {
                        genders.map((gender) => (
                            <div key={gender}>
                                <input type="checkbox" name={gender} onChange={handleFilter} />
                                <label>{gender}</label>
                            </div>
                        ))
                    }
                    <h3>Price</h3>
                    {
                        prices.map((price) => (
                            <div key={price}>
                                <input type="checkbox" name={price} onChange={handleFilter} />
                                <label>{price}</label>
                            </div>
                        ))
                    }
                    <h3>Type</h3>
                    {
                        types.map((type) => (
                            <div key={type}>
                                <input type="checkbox" name={type} onChange={handleFilter} />
                                <label>{type}</label>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='productsList'>
                        {
                            isPending?<h1>Loading...</h1>
                            :isError?<h1>Error...</h1>
                            :showData &&
                            showData.map((item) => (
                                <ProductCard key={item.id} item={item}/>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListingPage