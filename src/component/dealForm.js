import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div>
                <Form>
                    <label>Product Description</label>
                    <input type="text" name="productDescription" id="productDescription"
                        autoComplete="false" placeholder="Product Details" />
                    <br />

                    <label>Deal Price</label>
                    <input type="text" name="dealPrice" id="dealPrice"
                        autoComplete="false" placeholder="Product Details" />
                    <br />

                    <label>MRP</label>
                    <input type="text" name="mrp" id="mrp"
                        autoComplete="false" placeholder="Product Details" />
                    <br />

                    <label>Product Url</label>
                    <input type="text" name="productUrl" id="productUrl"
                        autoComplete="false" placeholder="Product Details" />
                    <br />

                    <label>RetailerName</label>
                     <input type="text" name="retailerName" id="retailerName"
                        />
                    <br />

                    <label>Product Type</label>
                    <input type="text" name="productType" id="productType"
                        autoComplete="false" placeholder="Product Details" />
                    <br />

                    <label>Product Image</label>
                    <input type="file" inputProps={{ accept: 'image/*' }} name="productImage" id="productImage"
                        />
                    <br />
                </Form>
            </div>
            )
    }
}

export default Form;