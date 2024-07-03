import React from 'react'

const Sidebar = ({sidebar}:any) => {
  return (
    <>
     <div className={`side_bar ${sidebar && 'sidebar_open'} `}>
      <div className="slider">
        <div className="slider_profile">
          <img src="https://ik.imagekit.io/xanalia/xana/avataruser.svg" className="img-fluid rounded-circle mb-2" alt="profilePic"/>
          <div className="avatar-user-name">Tool</div>
          <small className="user-email">tool@noborderz.com</small>
        </div>

        <div className="side_scroller">
          <div className="side_con">
            <ul className="sidebar-nav">
              <li className="sidebar-item active">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/bluedashboard-icon.svg"/>
                  Dashboard
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/chat.svg"/>
                  Chat
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/new-knowledge.svg"/>
                  Knowledge
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/training.svg"/>
                  Training
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/new-shopping.svg"/>
                  Item
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/new-charactor-icon.svg"/>
                  Character
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/new-order.svg"/>
                  Order
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/new-plan.svg"/>
                  Plan
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/billing-icon.svg"/>
                  Billings
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/new-setting-icon.svg"/>
                  Setting
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/staff_icon.svg"/>
                  Staff
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <img src="https://ik.imagekit.io/xanalia/xana/scenario_icon.svg"/>
                  Scenario
                </a>
              </li>
            </ul>

            <div className="slider_fixed_bottom">

              <div className="settings">
                <div className="setting_content">
                  <button type="button" className="lang_btn">
                    <div className="lang_eng">
                      <img src="https://ik.imagekit.io/xanalia/xana/xana-en.svg" loading="lazy" alt="English" className="styles_language-icon__B_vq7" width="30" height="30"/>
                      <span className="language-name">English</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </>

  )
}

export default Sidebar;