import React from 'react'
//import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai";
import *as IoIcons from "react-icons/io";

export const SideBarData=[
{   
    title: 'Home',
    path: '/',
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
},
{   
    title: 'About Me',
    path: '/aboutme',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{   
    title: 'Projects',
    path: '/projects',
    icon:<AiIcons.AiFillProject/>,
    cName:'nav-text'
},
{   
    title: 'Resume',
    path: '/resume',
    icon:<AiIcons.AiFillPushpin/>,
    cName:'nav-text'
},
{   
    title: 'Contact',
    path: '/contact',
    icon:<AiIcons.AiFillContacts/>,
    cName:'nav-text'
},
]
