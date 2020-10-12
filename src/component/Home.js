import React, { useState, useEffect } from 'react';
import Product from './Product';
import "./Home.css";
import db from '../firebase';
import banner from '../img/banner.png';
import Pagination from './Pagination';

function Home({ search }) {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20);
    const [allproducts, setAllProducts] = useState([]);


    useEffect(() => {
        db.collection('products').onSnapshot(snapshot => {
            setAllProducts(snapshot.docs.map(doc => ({
                id: doc.id, Retailer: doc.data().retailerName,
                Product_details: doc.data().productDescription
                , deal_price: doc.data().dealPrice
                , product_link: doc.data().productUrl
                , mrp: doc.data().mrp
                , off: doc.data().discount
                , img: doc.data().productImage
            })))
        })
    }, []);

    useEffect(() => {
        setProducts(allproducts);
    }, [allproducts]);

    useEffect(() => {

        if (search == "") {
            setProducts(allproducts);
        }
        else {
            allproducts.map(product => {
                var searchdetails = product.Product_details;
                if (searchdetails && searchdetails.includes(search)) {
                    setProducts([product]);
                }

            })
        }
    }, [search]);

    //get current post
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //change page
    const paginate = pageNumber => {
        var element = document.getElementById(currentPage);
        element.classList.remove("active");

        setCurrentPage(pageNumber);
        var element = document.getElementById(pageNumber);
        element.classList.add("active");
    }

    return (
        <div>
            <div className="banner">
                <img src={banner} alt="logo image" className="banner__img" />
            </div>
            <div>gajhsgajshg</div>
            
            <div className="home">
                <div className="home__row">
                    {//need to put a comment for search in discription
                        currentProducts.map(product => {
                            //if (t < 0)
                            return <Product Retailer={product.Retailer} Product_details={product.Product_details}
                                deal_price={product.deal_price}
                                product_link={product.product_link}
                                mrp={product.mrp}
                                off={product.off}
                                img={product.img} />
                        })}
                </div>
                <div className="home__row">
                    <Pagination postsPerPage={productsPerPage} totalPosts={products.length} paginate={paginate} />
                </div>
            </div>
        </div>

    )
}

export default Home
