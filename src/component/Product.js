import React from 'react';
import "./Product.css";
import { Button } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function product({ Retailer, Product_details, deal_price, mrp, off, img, product_link }) {
    const shareWhatsapp = (event) => {
        window.open("https://api.whatsapp.com/send?text=" + Product_details + " " + mrp + " " + product_link);
    }
    const getDeal = (event) => {
        window.open(product_link);
    }
    return (
        <div className="product">
            <div className="product__details">
                <img src={img} alt="product image" className="image" />
                <p className="retailer">{Retailer}</p>
                <p className="details">{Product_details}</p>
            </div>
            <div className="product__price">
                <h4><span>{deal_price}</span></h4>
                <p className="mrp"><span><strike>{mrp}</strike></span></p>
                <h4 className="off"><span>{off}% Off</span></h4>
            </div>
            <div className="product__button">
                <Button variant="contained" className="share" onClick={shareWhatsapp}>
                    <WhatsAppIcon /> Share
                </Button>
                <Button variant="contained" className="buy" onClick={getDeal}>
                    <ShoppingCartIcon /> Get Deal
                </Button>
            </div>
        </div >
    )
}

export default product
