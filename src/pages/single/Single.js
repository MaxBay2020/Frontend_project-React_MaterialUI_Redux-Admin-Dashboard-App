import React from 'react';
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>

                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://www.pngitem.com/pimgs/m/137-1370558_mario-avatar-hd-png-download.png"
                                alt=""
                                className="itemImg"
                            />

                            <div className="details">
                                <h1 className="itemTitle">Max Wong</h1>

                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">cwang167@my.centennialcollege.ca</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Photo:</span>
                                    <span className="itemValue">+1 416 832 6810</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Somewhere in Toronto</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Canada</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <Chart aspect={2/1} title='User Spending (Last 6 Months) ' />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;
