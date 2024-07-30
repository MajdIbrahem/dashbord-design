import React from 'react'
import './widget.scss' 
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget = ({ type }) => {
    let data;

    const amount = 1236
    const diff=20
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                link: "See All Users",
                isMoney: false,
                icon: <Person2OutlinedIcon className='icon' style={{
                    backgroundColor: "crimson",
                    color: "white"
                }} />
                
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                link: "See All Orders",
                isMoney: false,
                icon: <ShoppingBagOutlinedIcon className='icon' style={{
                    backgroundColor: "skyblue",
                    color: "blue"
                }}/>
                
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                link: "View Net Earning",
                isMoney: true,
                icon: <MonetizationOnOutlinedIcon className='icon'  style={{
                    backgroundColor: "lightgreen",
                    color: "green"
                }}/>
                
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                link: "View Details",
                isMoney: true,
                icon: <AccountBalanceOutlinedIcon className='icon' style={{
                    backgroundColor: "lightgray",
                    color: "yellow"
                }}/>
                
            };
            break;
        default:
            break;
    }
    return (
    <div className='widget'>
            <div className='left'>
                <span className='title'>{ data.title}</span>
                <span className='counter'>{amount }</span>
                <span className='link'>{data.link }</span>
            </div>    
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpOutlinedIcon/>
                    { diff} %
                </div>
                {data.icon}
            </div>    
    </div>
)
}

export default Widget