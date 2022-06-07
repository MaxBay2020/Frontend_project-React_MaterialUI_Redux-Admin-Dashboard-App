import React from 'react';
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const Widget = ({type}) => {
    let data

    // temporary data
    const amount = 666
    const diff = 20

    switch (type){
        case 'user':
            data={
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <GroupOutlinedIcon
                    className='icon'
                    style={{color: 'crimson', background: 'rgba(255, 0,0,0.2)'}}
                />
            }
            break;

        case 'order':
            data={
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <SummarizeOutlinedIcon
                    className='icon'
                    style={{color: 'goldenrod', background: 'rgba(218,164,32,0.2)'}}
                />
            }
            break

        case 'earning':
            data={
                title: 'EARNING',
                isMoney: true,
                link: 'View net earnings',
                icon: <PaidOutlinedIcon
                    className='icon'
                    style={{color: 'green', background: 'rgba(0,128,0,0.2)'}}
                />
            }
            break

        case 'balance':
            data={
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <CreditCardOutlinedIcon
                    className='icon'
                    style={{color: 'blue', background: 'rgba(0,0,128,0.2)'}}
                />
            }
            break

        default:
            break
    }

    return (
        <div className='widget'>

            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && '$'} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
