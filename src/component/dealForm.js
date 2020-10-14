import React, { Component } from 'react';
import { Container, Form, } from 'react-bootstrap';
import { storage } from '../firebase';
import "./dealForm.css";



class dealForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });

                })
            });
    }

    render() {
        return (

            <div id="dealForm">
                <h1 className="text-white text-center font-weight-bold bg-success">PCD ADMIN DESH-BOARD</h1>
                <Container>
                    <form>
                        <Form.Group>
                            <Form.Label>Product Description</Form.Label>
                            <input type="text" name="productDescription" id="productDescription"
                                autoComplete="false" placeholder="Product Details" 
                                className="form-control" autocomplete="off"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >Deal Price</Form.Label>
                            <input type="text" name="dealPrice" id="dealPrice"
                                autoComplete="false" placeholder="Deal Price" 
                                className="form-control" autocomplete="off"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >MRP</Form.Label>
                            <input type="text" name="mrp" id="mrp"
                                autoComplete="false" placeholder="MRP" 
                                className="form-control" autocomplete="off"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >Product Url</Form.Label>

                            <input type="text" name="productUrl" id="productUrl"
                                autoComplete="false" placeholder="URl" 
                                className="form-control" autocomplete="off"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >RetailerName</Form.Label>

                            <select
                                name="retailerName" id="retailerName" className="form-control" >
                                <option value="Amazon">Amazon</option>
                                <option value="Flipkart">Flipkart</option>
                                <option value="Myntra">Myntra</option>
                                <option value="Ajio">Ajio</option>
                                <option value="TataCliq">TataCliq</option>
                                <option value="Others">Others</option>

                            </select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >Product Type</Form.Label>

                            <select
                                name="dealType" id="dealType"  className="form-control">
                                <option value="normal">Normal</option>
                                <option value="loot">Loot</option>
                                <option value="lightening">Lightening</option>
                                <option value="referAndEarn">ReferAndEarn</option>
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >Product Image</Form.Label>

                            <input type="file" props={{ accept: 'image/*' }} name="productImage" id="productImage"
                                onChange={this.handleChange}
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group>
                            <div id="postDealButton">
                                <input type="button" value="Post Deal" class="btn btn-success" 
                                onClick={this.handleUpload}></input>
                            </div>
                        </Form.Group>

                    </form>
                </Container>
            </div>





        )
    }
}

export default dealForm;
