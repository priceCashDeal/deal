import React, { Component } from 'react';
import { Button, Container, Form, } from 'react-bootstrap';

export class form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productid: '',
            rName: '',
            pimage: '',
            pdescription: '',
            ptype: 'General',
            MRP: '',
            deal: '',
            discount: '',
        }
    }

    handleproductidChange = (event) => {
        this.setState(
            {
                productid: event.target.value
            }
        )
    }

    handlerNameChange = (event) => {
        this.setState(
            {
                rname: event.target.value
            }
        )
    }

    handlepimageChange = (event) => {
        this.setState({
            pimage: event.target.value
        }
        )
    }

    handlepdescription = (event) => {
        this.setState(
            {
                pdescription: event.target.value
            }
        )
    }

    handleptypeChange = (event) => {
        this.setState(
            {
                ptype: event.target.value
            }
        )
    }

    handleMRPChange = (event) => {
        this.setState(
            {
                MRP: event.target.value
            }
        )
    }


    handledealChange = (event) => {
        this.setState(
            {
                deal: event.target.value
            }
        )
    }


    handlediscountChange = (event) => {
        this.setState(
            {
                discount: event.target.value
            }
        )

    }

    handlerSubmit = event => {
        alert('')
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <h1>NewPost</h1>
                <Form onSubmit={this.handlerSubmit}>
                    <Form.Group>
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control type="number" value={this.state.productid} onChange={this.handleproductidChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Retailer Name</Form.Label>
                        <Form.Control type="text" value={this.state.rName} onChange={this.handlerNameChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Product Image</Form.Label>
                        <Form.Control type="file" value={this.state.pimage} onChange={this.handlepimageChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" value={this.state.pdescription} onChange={this.handlepdescription} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Type</Form.Label>
                        <select value={this.state.ptype} onChange={this.handleptypeChange}>
                            <option value="General">General</option>
                            <option value="Refer && Earn">Refer && Earn</option>
                            <option value="Deal of Day">Deal of Day</option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Maximum Retail Price (MRP) ₹.</Form.Label>
                        <Form.Control type='number' value={this.state.MRP} onChange={this.handleMRPChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Deal Price ₹.</Form.Label>
                        <Form.Control type='number' value={this.state.deal} onChange={this.handledealChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Discount (%) </Form.Label>
                        <Form.Control type='number' value={this.state.discount} onChange={this.handlediscountChange} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>


        )
    }

}


export default form
