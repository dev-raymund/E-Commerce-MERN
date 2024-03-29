import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const Home = () => {
    return (
        <div className="product">
            <h1>Latest Products</h1>
            <Row>
                { products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                )) }
            </Row>
        </div>
    )
}

export default Home