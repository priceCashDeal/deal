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
        db.collection('products').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setAllProducts(snapshot.docs.map(doc => ({
                id: doc.id, Retailer: doc.data().retailerName,
                Product_details: doc.data().productDescription
                , deal_price: doc.data().dealPrice
                , product_link: doc.data().productUrl
                , mrp: doc.data().mrp
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
            var productslist = [];
            allproducts.map(product => {
                var searchdetails = product.Product_details;
                if ((searchdetails.toLowerCase()).includes(search.toLowerCase())) {
                    productslist.push(product);
                    console.log(product);
                }
            });
            setProducts(productslist);
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
            {/* <Menu /> */}
            <div className="banner">
                <img src={banner} alt="logo image" className="banner__img" />
            </div>
            <div className="home">
                <div className="home__row">
                    {//need to put a comment for search in discription
                        currentProducts.map(product => {
                            //if (t < 0)
                            return <Product key={product.id} Retailer={product.Retailer} Product_details={product.Product_details}
                                deal_price={product.deal_price}
                                product_link={product.product_link}
                                mrp={product.mrp}
                                off={Math.floor(((product.mrp - product.deal_price) / product.mrp) * 100)}
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
