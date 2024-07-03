import React from 'react'
import "./style_modules.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

 const Dashboard = () => {
  return (
    <div className='dasboard_cont'>
      <div className="dasboard_header">
        <h1 className='header_title'>Welcome , User!</h1>
        <span>Dashboard</span>
      </div>    
      <Container className='dashboard_conti'>
        <Row className='cont_row'>
          <Col xxl={6} xl={7} sm={12} className='col pe-3'>
            <div className="card_body">
              <div className="card-title">Total Visitors</div>
              <div className="card_graph">
                <div className="ratio_1">
                  1
                </div>
                <div className="ratio_O">
                  0
                </div>
                <div className="graph">
                  <div className="line"></div>
                </div>

                <div className="grapg_day">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thur</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="graph_btn_sec">
                <div className="gg_btn">
                  <input type="radio" id="Monthly" name="drone" value="Monthly" checked/>
                  <label>Monthly</label>
                </div>
                <div className="gg_btn">
                  <input type="radio" id="Monthly" name="drone" value="Monthly" checked/>
                  <label>Day</label>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={5} sm={12} className='col ps-2'>
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