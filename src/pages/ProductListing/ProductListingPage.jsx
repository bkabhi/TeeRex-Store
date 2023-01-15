import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rudux/product/action';

const colours = ['Red', 'Blue', 'Green'];
const genders = ['Men', 'Women'];
const prices = ['0-Rs250', 'Rs251-450', 'Rs 450'];
const types = ['Polo', 'Hoodie', 'Basic'];

const ProductListingPage = () => {
    const dispatch = useDispatch()
    const apiData = useSelector(state => state.Products.products)

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);

    const showData = products.length > 0 ? products : apiData

    const handleSearch = (inputValue) => {
        // console.log(inputValue, " inputValue");
        if (inputValue === "") {
            setProducts(apiData);
        } else {
            const searchedProducts = apiData.filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.color.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.type.toLowerCase().includes(inputValue.toLowerCase())
            );
            setProducts(searchedProducts);
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

    const handleCart = (item) => {
        let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
        let flag = -1;
        cartData.forEach((ele, i) => {
            if (ele.id === item.id) {
                flag = i;
                return;
            }
        })
        if (flag !== -1) {
            cartData[flag].quantity = cartData[flag].quantity + 1;
        } else {
            cartData.push({ ...item, quantity: 1 });
        }
        localStorage.setItem("cartData", JSON.stringify(cartData));
    }

    useEffect(() => {
        dispatch(getProducts());
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (filter.length > 0) {
            const filteredData = apiData.filter(item =>
                filter.includes(item.color) ||
                filter.includes(item.gender) ||
                filter.includes(item.type)
            )
            setProducts(filteredData)
        } else {
            setProducts(apiData)
        }
        // eslint-disable-next-line
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
                            showData &&
                            showData.map((item) => (
                                <div key={item.id} className='productsList__item'>
                                    <div className='productsList__item__imgdiv'>
                                        <img src={item.imageURL} alt={item.name} />
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className='productsList__item__details'>
                                        <h2>Rs {item.price}</h2>
                                        <button onClick={() => handleCart(item)}>Add to cart</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListingPage