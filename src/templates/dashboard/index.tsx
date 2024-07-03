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
      <Container className='dashboard_conti'>
        <Row className='cont_row'>
          <Col xxl={6} xl={7} className='col pe-3'>
            <div className="card_body">
              <div className="card-title">Total Visitors</div>
            </div>
          </Col>
          <Col xxl={6} xl={5} className='col ps-2'>
            <div className="card_body">
              {/* <Row className='count_row'>
                <Col md={6} className='count_sec'></Col>
                <Col md={6} className='count_sec'></Col>
                <Col md={6} className='count_sec'></Col>
                <Col md={6} className='count_sec'></Col>                
              </Row>               */}
            </div>
          </Col>
        </Row>
      </Container>  
    </div>
  )
}
export default Dashboard