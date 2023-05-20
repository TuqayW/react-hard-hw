import { useState } from "react";
import "antd/dist/antd.min.css";
import {
  TextField,
  InputAdornment,
  Icon,
  Button as MuiButton,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
} from "@mui/material";
import { Progress } from "antd";
import "./Dashboard1.css";
const Dashboard1 = () => {
  const [frameDropdownAnchorEl, setFrameDropdownAnchorEl] = useState(null);
  const frameDropdownOpen = Boolean(frameDropdownAnchorEl);
  const handleFrameDropdownClick = (event) => {
    setFrameDropdownAnchorEl(event.currentTarget);
  };
  const handleFrameDropdownClose = () => {
    setFrameDropdownAnchorEl(null);
  };

  return (
    <div className="dashboard-1">
      <TextField
        className="large-input"
        sx={{ width: 341 }}
        color="primary"
        variant="outlined"
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>search_sharp</Icon>
            </InputAdornment>
          ),
        }}
        label="Search"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <b className="hi-andrei">Hi Andrei,</b>
      <b className="welcome-to-venus">Welcome to Venus!</b>
      <div className="fill-here">
        <div className="small-chart-parent">
          <div className="small-chart">
            <div className="label">Spent this month</div>
            <b className="cash">$682.5</b>
            <Progress
              className="bar-7"
              style={{ width: 45.570465087890625 }}
              type="line"
              percent={50}
              strokeColor="#4318ff"
              strokeLinecap="round"
              gapPosition="bottom"
              showInfo={false}
            />
            <Progress
              className="bar-6"
              style={{ width: 45.570472717285156 }}
              type="line"
              percent={50}
              strokeColor="#4318ff"
              strokeLinecap="round"
              gapPosition="bottom"
              showInfo={false}
            />
            <Progress
              className="bar-5"
              style={{ width: 45.570465087890625 }}
              type="line"
              percent={50}
              strokeColor="#4318ff"
              strokeLinecap="round"
              gapPosition="bottom"
              showInfo={false}
            />
            <Progress
              className="bar-4"
              style={{ width: 45.570465087890625 }}
              type="line"
              percent={50}
              strokeColor="#4318ff"
              strokeLinecap="round"
              gapPosition="bottom"
              showInfo={false}
            />
            <Progress
              className="bar-3"
              style={{ width: 45.570465087890625 }}
              type="line"
              percent={50}
              strokeColor="#4318ff"
              strokeLinecap="round"
              gapPosition="bottom"
              showInfo={false}
            />
          </div>
          <div className="small-new-clients">
            <b className="label1">New clients</b>
            <b className="no-clients">321</b>
            <img
              className="small-new-clients-child"
              alt=""
              src="/group-41.svg"
            />
            <img className="graph-icon" alt="" src="/graph.svg" />
          </div>
          <button className="small-earnings" autoFocus>
            <div className="label2">Earnings</div>
            <b className="cash1">$350.40</b>
            <img className="small-new-clients-child" alt="" src="/icon.svg" />
          </button>
          <button className="small-activity" autoFocus>
            <div className="label3">Activity</div>
            <b className="cash2">$540.50</b>
            <img className="chart-icon" alt="" src="/chart.svg" />
          </button>
        </div>
        <div className="large-chart-per-month-parent">
          <div className="large-chart-per-month">
            <img className="button-icon" alt="" src="/button.svg" />
            <div className="chart">
              <div className="chart-child" />
              <div className="chart-item" />
              <div className="chart-inner" />
              <div className="rectangle-div" />
              <div className="chart-child1" />
              <input className="rectangle-input" type="text" readOnly />
              <div className="chart-child2" />
              <div className="chart-child3" />
              <div className="chart-child4" />
              <div className="chart-child5" />
              <div className="chart-child6" />
              <div className="chart-child7" />
            </div>
            <div className="high-line">
              <div className="high-line-child" />
              <div className="div">$179</div>
            </div>
            <div className="months">
              <div className="jan">Jan</div>
              <div className="feb">Feb</div>
              <div className="mar">Mar</div>
              <div className="apr">Apr</div>
              <div className="may">May</div>
              <div className="jul">Jul</div>
              <div className="aug">Aug</div>
              <div className="sep">Sep</div>
              <div className="oct">Oct</div>
              <div className="nov">Nov</div>
              <div className="dec">Dec</div>
              <div className="jun">Jun</div>
            </div>
            <div className="label4">Total Spent</div>
            <b className="cash3">$682.5</b>
          </div>
          <div className="medium-user">
            <b className="charles-robbie">Charles Robbie</b>
            <div className="avatar">
              <img className="avatar-child" alt="" src="/ellipse-46.svg" />
              <img className="avatar-icon" alt="" src="/avatar@2x.png" />
            </div>
            <div className="location">
              <div className="text">
                <div className="new-york-usa">New York, USA</div>
              </div>
              <img className="location-icon" alt="" src="/location-icon.svg" />
            </div>
            <div className="following">
              <b className="b">76</b>
              <div className="following1">Following</div>
            </div>
            <div className="followers">
              <b className="b1">643</b>
              <div className="followers1">Followers</div>
            </div>
            <div className="projects">
              <b className="b2">28</b>
              <div className="projects1">Projects</div>
            </div>
          </div>
        </div>
        <div className="medium-chart-parent">
          <div className="medium-chart">
            <div className="label5">Spent this month</div>
            <b className="cash4">$682.5</b>
            <div className="precentage">
              <b className="b3">+2.45%</b>
              <img
                className="arrow-drop-up-icon"
                alt=""
                src="/arrow-drop-up.svg"
              />
            </div>
            <div className="on-track">
              <b className="on-track1">On track</b>
              <img className="on-track-child" alt="" src="/frame-5.svg" />
            </div>
            <div className="bar-7-parent">
              <Progress
                className="bar-71"
                style={{ width: 145.57806396484375 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
              <Progress
                className="bar-61"
                style={{ width: 145.57806396484375 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
              <Progress
                className="bar-51"
                style={{ width: 145.5780487060547 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
              <Progress
                className="bar-41"
                style={{ width: 145.5780487060547 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
              <Progress
                className="bar-31"
                style={{ width: 145.5780487060547 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
              <Progress
                className="bar-2"
                style={{ width: 145.5780487060547 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
              <Progress
                className="bar-1"
                style={{ width: 145.5780487060547 }}
                type="line"
                percent={50}
                strokeColor="#4318ff"
                strokeLinecap="round"
                gapPosition="bottom"
                showInfo={false}
              />
            </div>
          </div>
          <div className="medium-transactions">
            <b className="title">Your transactions</b>
            <div className="content1">
              <img className="icon1" alt="" src="/icon1.svg" />
              <div className="name-date">
                <b className="name">Public Transport</b>
                <div className="date">22 September 2020</div>
              </div>
            </div>
            <div className="content2">
              <img className="icon1" alt="" src="/icon2.svg" />
              <div className="name-date1">
                <b className="name">Grocery Store</b>
                <div className="date">18 September 2020</div>
              </div>
            </div>
            <div className="content3">
              <img className="icon1" alt="" src="/icon3.svg" />
              <div className="name-date">
                <b className="name">Public Transport</b>
                <div className="date">22 September 2020</div>
              </div>
            </div>
            <div className="cta">
              <img
                className="keyboard-backspace-icon"
                alt=""
                src="/keyboard-backspace.svg"
              />
              <b className="cta1">View all</b>
            </div>
          </div>
          <div className="medium-transactions">
            <div className="content11">
              <div className="name-date3">
                <b className="name">Meet w/ Simmmple</b>
                <div className="date">01:00 PM - 02:00 PM</div>
              </div>
              <div className="content1-child" />
            </div>
            <div className="content21">
              <div className="name-date4">
                <b className="name">Fitness Training</b>
                <div className="date">02:00 PM - 03:00 PM</div>
              </div>
              <div className="content1-child" />
            </div>
            <div className="content31">
              <div className="name-date5">
                <b className="name">Reading time</b>
                <div className="date">03:00 PM - 04:00 PM</div>
              </div>
              <div className="content1-child" />
            </div>
            <div className="cta2">
              <img
                className="keyboard-backspace-icon"
                alt=""
                src="/keyboard-backspace1.svg"
              />
              <b className="view-all-tasks">View all Tasks</b>
            </div>
            <b className="title1">27 May</b>
          </div>
        </div>
      </div>
      <form className="sidebar">
        <div className="sidebar-2">
          <div className="sidebar-2-child" />
          <div className="frame-parent">
            <MuiButton
              className="frame-child"
              sx={{ width: 214 }}
              variant="contained"
              color="primary"
              startIcon={<Icon>person_sharp</Icon>}
            >
              Dashboard
            </MuiButton>
            <div className="frame-child">
              <MuiButton
                sx={{ width: 214 }}
                id="button-Activity"
                aria-controls="menu-Activity"
                aria-haspopup="true"
                aria-expanded={frameDropdownOpen ? "true" : undefined}
                onClick={handleFrameDropdownClick}
                color="secondary"
              >
                Activity
              </MuiButton>
              <MuiMenu
                anchorEl={frameDropdownAnchorEl}
                open={frameDropdownOpen}
                onClose={handleFrameDropdownClose}
              />
            </div>
            <button className="library-parent" autoFocus>
              <div className="library">Library</div>
              <img className="icon4" alt="" src="/icon4.svg" />
            </button>
            <div className="security-parent">
              <div className="library">Security</div>
              <img className="icon4" alt="" src="/icon5.svg" />
            </div>
            <button className="library-parent" autoFocus>
              <div className="library">Schedules</div>
              <img className="icon4" alt="" src="/icon6.svg" />
            </button>
            <button className="library-parent" autoFocus>
              <div className="library">Payouts</div>
              <img className="icon4" alt="" src="/icon7.svg" />
            </button>
            <button className="library-parent" autoFocus>
              <div className="library">Settings</div>
              <img className="icon4" alt="" src="/icon8.svg" />
            </button>
          </div>
          <div className="log-out-parent">
            <div className="library">Log Out</div>
            <img className="icon4" alt="" src="/icon9.svg" />
          </div>
          <div className="logo">
            <div className="text1">
              <div className="dashboard">DASHBOARD</div>
              <b className="venus">VENUS</b>
            </div>
            <img className="icon10" alt="" src="/icon10.svg" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard1;
