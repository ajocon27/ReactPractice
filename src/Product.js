import React,{Component} from 'react';
import { CardGroup } from 'react-bootstrap';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {} from './Product.css';


export class Product extends Component{
    
    state = {
    products: []
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/Product')
        .then(res => {
            const products = res.data;
            this.setState({products});
        });
        
    }


    render(){
        return(
            <div className="productList">
                <div className="m-3 d-flex justify-content-left">
                    <CardGroup>
                    { 
                        this.state.products.map((product,i) =>
                            <Card key={product.productId} className="shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={product.poster} style={{height:'250px'}} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    ${product.price}
                                </Card.Text>
                                <Button variant="primary"><i className="bi bi-cart-plus"></i> Add To Cart</Button>
                            </Card.Body>
                            </Card>
                        )
                    }    
                    </CardGroup>
            
                </div>
            </div>
        )
    }
}

