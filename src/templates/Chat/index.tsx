import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./style_modules.scss";

const Chat = () => {
  return (
    <div className="dasboard_cont">

      <div className="dasboard_header">
        <h1 className="header_title">Chat !</h1>
        <span>Chat list with users. If human assistance is needed, start a conversation from here.</span>
      </div> 

       <Container>
          <Row className='chat_row'>
            <div className="user_chat_sec p-0">
              <div className="user_sec">
                <div className="search_bar">
                  <input placeholder="Search..." type="text" className="form-control"/>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
                <div className="user_detail_sec">
                  <div className="user_detail">
                    <div className="user_img">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 align-middle user_Icon user_profile_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#00000080"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                    </div>
                    <div className="user_name">
                      <span>Visitor_1</span>
                      <div className="u_c_d">
                        <div className="indi_list"></div>
                        <span>Offline</span>
                        <span>Bot On</span>
                      </div>
                    </div>
                  </div>
                  <span className='time_tag'>4h</span>
                  <span className='time_tag2'>...</span>
                </div>
              </div>
            </div>
          </Row>
       </Container>

    </div>
  )
}

export default Chat;