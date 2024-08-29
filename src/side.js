import React from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { GrScorecard } from "react-icons/gr";
import { MdOutlineEventNote } from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";

function Sidenav()
{
    return(
        <nav className='side-bar'>
            <div className='side-profile'>
                <LuPencilRuler size="60"/>
                <p>EduTrack</p>
            </div>
            <ul className='side-ul'>
                <li><RiDashboardHorizontalFill size="30"/>Dashboard</li>
                <li><MdOutlineEventNote size="30"/>Assesments</li>
                <li><GrScorecard size="30"/>Scores</li>
                <li><FiActivity size="30"/>Activities</li>
                <li><IoSettingsSharp size="30"/> Settings</li>
            </ul>
        </nav>
    );
}

export default Sidenav;