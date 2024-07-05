import React from "react"
import "./style_modules.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";

 const Dashboard = () => {
  return (
    <div className="dasboard_cont">
      <Container className="dashboard_conti">
        <div className="dasboard_header">
          <h1 className="header_title">Welcome , Users !</h1>
          <span>Dashboard</span>
        </div> 
      </Container>      

      <Container className="dashboard_conti">
        <Row className="cont_row">
          <Col xxl={6} xl={7} sm={12} className="col pe-xl-3">
            <div className="graph_body">
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
                  <input type="radio" id="Monthly" name="drone" value="Monthly"/>
                  <label>Monthly</label>
                </div>
                <div className="gg_btn">
                  <input type="radio" id="Monthly" name="drone" value="Monthly"/>
                  <label>Day</label>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={5} sm={12} className="col ps-xl-2">
            <div className="card_body">
              <div className="card_content">
                <div className="card">
                  <div className="card_title_date">
                    <div className="title_date mb-0 mt-0">Total no. of messages</div>

                    <div className="date_icon">
                      <span>Today</span>
                      <div className="calender_icon">
                        <img src="https://ik.imagekit.io/xanalia/xana/calendar.svg" alt="Calendar Icon"/>
                      </div>
                    </div>
                  </div>
                  <span className="counter">7</span>
                  
                </div>
                <div className="card">
                  <div className="card_title_date">
                      <div className="title_date mb-0 mt-0">Total no. of Visitor</div>

                      <div className="date_icon">
                        <span>Today</span>
                        <div className="calender_icon">
                          <img src="https://ik.imagekit.io/xanalia/xana/calendar.svg" alt="Calendar Icon"/>
                        </div>
                      </div>
                    </div>
                    <span className="counter">1</span>
                </div>
              </div>
              <div className="card_content">
                <div className="card">
                  <div className="card_title_date">
                    <div className="title_date mb-0 mt-0">Total no. of Tickets</div>

                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="dropdown">Filters </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown_menu">
                        <Dropdown.Item href="#/action-1">
                          <div className="styles_form_checkbox">
                            <input type="checkbox" id="inProgress"/>
                            <label className="mb-0 text-nowrap styles_filter_text">In progress</label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <div className="styles_form_checkbox">
                            <input type="checkbox" id="inProgress"/>
                            <label className="mb-0 text-nowrap styles_filter_text">Comleted</label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <div className="styles_form_checkbox">
                            <input type="checkbox" id="inProgress"/>
                            <label className="mb-0 text-nowrap styles_filter_text">Pending</label>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <span className="counter">3</span>
                </div>
                <div className="card">
                 <div className="card_title_date">
                    <div className="title_date mb-0 mt-0">Tickets Today</div>

                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="dropdown">Filters</Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown_menu">
                        <Dropdown.Item href="#/action-1">
                          <div className="styles_form_checkbox">
                            <input type="checkbox" id="inProgress"/>
                            <label className="mb-0 text-nowrap styles_filter_text">In progress</label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <div className="styles_form_checkbox">
                            <input type="checkbox" id="inProgress"/>
                            <label className="mb-0 text-nowrap styles_filter_text">Comleted</label>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <div className="styles_form_checkbox">
                            <input type="checkbox" id="inProgress"/>
                            <label className="mb-0 text-nowrap styles_filter_text">Pending</label>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <span className="counter">0</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container> 

      <Container className="dashboard_conti">
        <Row className="cont_row">
          <Col md={6} className="col pe-md-3">
            <div className="overv_card_body">
              <div className="card_title_date">
                <div className="title_date mb-0 mt-0">AI Performance</div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="dropdown">Today </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown_menu">
                    <Dropdown.Item href="#/action-1">
                      <div className="styles_form_checkbox">
                        <input type="checkbox" id="inProgress"/>
                        <label className="mb-0 text-nowrap styles_filter_text">Today</label>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="styles_form_checkbox">
                        <input type="checkbox" id="inProgress"/>
                        <label className="mb-0 text-nowrap styles_filter_text">This Week</label>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <div className="styles_form_checkbox">
                        <input type="checkbox" id="inProgress"/>
                        <label className="mb-0 text-nowrap styles_filter_text">This Month</label>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="overview_sec">
                <div className="div">
                  <div className="overview_img">
                    <span>No Data Found</span>
                  </div>
                </div>
                

                <div className="table mt-xxl-5">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="indi_list"></div>
                          <span className="status_text">Unanswered</span>
                        </td>
                        <td className="text-right status_text">0</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="indi_list" style={{backgroundColor: "#34ce57"}}></div>
                          <span className="status_text">Answered</span>
                        </td>
                        <td className="text-right status_text">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>
          </Col>
          <Col md={6} className="col ps-md-2">
            <div className="overv_card_body">
              <div className="card_title_date">
                <div className="title_date mb-0 mt-0">Ticket Overview</div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="dropdown">Today </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown_menu">
                    <Dropdown.Item href="#/action-1">
                      <div className="styles_form_checkbox">
                        <input type="checkbox" id="inProgress"/>
                        <label className="mb-0 text-nowrap styles_filter_text">Today</label>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="styles_form_checkbox">
                        <input type="checkbox" id="inProgress"/>
                        <label className="mb-0 text-nowrap styles_filter_text">This Week</label>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <div className="styles_form_checkbox">
                        <input type="checkbox" id="inProgress"/>
                        <label className="mb-0 text-nowrap styles_filter_text">This Month</label>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="overview_sec">
                <div className="div">
                  <div className="overview_img">
                    <span>No Data Found</span>
                  </div>
                </div>
                

                <div className="table mt-xxl-5">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="indi_list"></div>
                          <span className="status_text">Pending</span>
                        </td>
                        <td className="text-right status_text">0</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="indi_list" style={{backgroundColor: "#2280e1"}}></div>
                          <span className="status_text">In Process</span>
                        </td>
                        <td className="text-right status_text">0</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="indi_list" style={{backgroundColor: "#34ce57"}}></div>
                          <span className="status_text">Completed</span>
                        </td>
                        <td className="text-right status_text">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
              </div>
              
            </div>
          </Col>
        </Row>
      </Container> 
       
      {/* Table */}

      
      <div className="status_table">
        <div className="table_head">Tickets Overview</div>
        <div className="table_content">
          <Table className="table_sec mb-0">
            <thead>
              <tr>
                <th>User"s Name</th>
                <th>Ticket Created Date</th>
                <th>Ticket ID</th>
                <th>Ticket Status</th>
                <th>Assigned Operator</th>
                <th>Ticket Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status">Pending</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr> 
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status">Pending</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr>  
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status" style={{backgroundColor: "#2280e1"}}>In Progress</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr>  
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status">Pending</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr>  
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status">Pending</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr>  
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status">Pending</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr>      
              <tr>
                <td>Visitor_1</td>
                <td>04/07/2024</td>
                <td>67</td>
                <td><div className="ticket_status" style={{backgroundColor: "#34ce57"}}>Completed</div></td>
                <td>-</td>
                <td>
                  <span className="styles_preview_icon">
                    <img src="https://ik.imagekit.io/xanalia/xana/preview.svg" alt="Preview"/>
                    Preview
                  </span>
                </td>
              </tr>               
            </tbody>
          </Table>
        </div>
      </div>
       

    </div>
  )
}
export default Dashboard