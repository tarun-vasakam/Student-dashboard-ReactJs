import React from "react";
import Displaybox from "./displaybox";
import { RiSpeakFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCalculate } from "react-icons/md";

function Content(){
    return(
        <section className="content-sec">
            <h3 className="content-analysis">Analysis Result</h3>
            <div className='content-main'>
                <Displaybox title="Logical" count="90" style={{backgroundColor: "#fff17c"}} svg={<FaBrain size="115"/>}/>
                <Displaybox title="Quants" count="90" style={{backgroundColor: "#a66162"}} svg={<MdCalculate size="115"/>}/>
                <Displaybox title="Speaking" count="90" style={{backgroundColor: "#c0c3dd"}} svg={<RiSpeakFill size="115"/>}/>
                <Displaybox title="Coding" count="90" style={{backgroundColor: "#7c9454"}} svg={<FaCode size="115"/>}/>
                <Displaybox title="Leadership" count="90" style={{backgroundColor: "#ded9b7"}} svg={<FaPeopleGroup size="115"/>}/>
                <Displaybox title="Writing" count="90" style={{backgroundColor: "#abdbe3"}} svg={<TbWriting size="115"/>}/>
            </div>
        </section>
    );
}
export default Content;