import React from 'react'
import "./style_modules.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

 const Dashboard = () => {
  return (
    <div className='dasboard_cont'>
      <div className="dasboard_header">
        <h1 className='header_title'>Welcome , !</h1>
        <span>Dashboard</span>
      </div>    
      <Container>
        <Row>
          <Col xxl={6} xl={7}>
            
          </Col>
          <Col xxl={6} xl={5}>

          </Col>
        </Row>
      </Container>  
    </div>
  )
}
export default Dashboard