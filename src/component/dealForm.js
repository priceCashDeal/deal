import React, { Component } from 'react';
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
            <div class="dealForm">

                <form>

                    <table class="dealFormTable">
                        <caption class="tableTitle">PCD ADMIN DESH-BOARD</caption>

                        <tr><td>
                            <label class="tableSize">Product Description</label>
                        </td>
                            <td>
                                <input type="text" name="productDescription" id="productDescription"
                                    autoComplete="false" placeholder="Product Details" />
                            </td>
                        </tr>
                        <tr><td>
                            <label class="tableSize">Deal Price</label>
                        </td>
                            <td>
                                <input type="text" name="dealPrice" id="dealPrice"
                                    autoComplete="false" placeholder="Deal Price" />

                            </td>
                        </tr>
                        <tr><td>
                            <label class="tableSize">MRP</label>
                        </td>
                            <td>
                                <input type="text" name="mrp" id="mrp"
                                    autoComplete="false" placeholder="MRP" />

                            </td>
                        </tr>
                        <tr><td>
                            <label class="tableSize">Product Url</label>
                        </td>
                            <td>
                                <input type="text" name="productUrl" id="productUrl"
                                    autoComplete="false" placeholder="URl" />

                            </td>
                        </tr>
                        <tr><td>
                            <label class="tableSize">RetailerName</label>
                        </td>
                            <td>
                                <select
                                    name="retailerName" id="retailerName" class="form-control" >
                                    <option value="Amazon">Amazon</option>
                                    <option value="Flipkart">Flipkart</option>
                                    <option value="Myntra">Myntra</option>
                                    <option value="Ajio">Ajio</option>
                                    <option value="TataCliq">TataCliq</option>
                                    <option value="Others">Others</option>

                                </select>

                            </td>
                        </tr>
                        <tr><td>
                            <label class="tableSize">Product Type</label>
                        </td>
                            <td>
                                <select
                                    name="dealType" id="dealType" class="form-control">
                                    <option value="normal">Normal</option>
                                    <option value="loot">Loot</option>
                                    <option value="lightening">Lightening</option>
                                    <option value="referAndEarn">ReferAndEarn</option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="tableSize">Product Image</label>
                            </td>
                            <td>
                                <input type="file" props={{ accept: 'image/*' }} name="productImage" id="productImage"
                                    onChange={this.handleChange}
                                />
                                <br />
                            </td>
                        </tr>
                        <div class="postDealButton">
                            <input type="button" value="Post Deal" calss="dealFormSubmit" onClick={this.handleUpload}></input>
                        </div>
                    </table>
                </form>
            </div>
        )
    }
}

export default dealForm;
