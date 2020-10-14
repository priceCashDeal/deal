import React, { Component } from 'react';
import { Container, Form, } from 'react-bootstrap';
import db, { storage } from '../firebase';
import firebase from 'firebase';
import "./dealForm.css";



class dealForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = (event) => {
        event.preventDefault();
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {

                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    db.collection('products').add({
                        dealPrice: document.getElementById("dealPrice").value,
                        mrp: document.getElementById("mrp").value,
                        productDescription: document.getElementById("productDescription").value,
                        productImage: url,
                        productType: document.getElementById("dealType").value,
                        productUrl: document.getElementById("productUrl").value,
                        retailerName: document.getElementById("retailerName").value,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                })
            });
    }


    render() {
        return (

            <div id="dealForm">
                <h1 className="text-white text-center font-weight-bold bg-success">PCD ADMIN DASHBOARD</h1>
                <Container>
                    <form methord="post">
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Product Description</Form.Label>
                            <input type="text" name="productDescription" id="productDescription"
                                placeholder="Product Details"
                                className="form-control" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold" >Deal Price</Form.Label>
                            <input type="text" name="dealPrice" id="dealPrice"
                                placeholder="Deal Price"
                                className="form-control" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">MRP</Form.Label>
                            <input type="text" name="mrp" id="mrp"
                                placeholder="MRP"
                                className="form-control" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Product Url</Form.Label>

                            <input type="text" name="productUrl" id="productUrl"
                                placeholder="URl"
                                className="form-control" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">RetailerName</Form.Label>

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
                            <Form.Label className="font-weight-bold">Product Type</Form.Label>

                            <select
                                name="dealType" id="dealType" className="form-control">
                                <option value="normal">Normal</option>
                                <option value="loot">Loot</option>
                                <option value="lightening">Lightening</option>
                                <option value="referAndEarn">ReferAndEarn</option>
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="font-weight-bold">Product Image</Form.Label>

                            <input type="file" props={{ accept: 'image/*' }} name="productImage" id="productImage"
                                onChange={this.handleChange}
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group>
                            <div id="postDealButton">
                                <input type="submit" value="Post Deal" className="btn btn-success" onClick={this.handleUpload}></input>
                            </div>
                        </Form.Group>

                    </form>
                </Container>
            </div>
        )
    }
}

export default dealForm;