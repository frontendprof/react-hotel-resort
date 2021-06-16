
import React, { Component } from 'react'

import Title from "./Title";

import { FaHiking, FaShuttleVan, FaQuran} from "react-icons/fa";
import {MdFreeBreakfast} from "react-icons/md"

export default class Services extends Component {

    state={
        services:[
            {
                icon:<MdFreeBreakfast />,
                title:"Complementary Breakfast",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laborum."
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laborum."
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laborum."
            },
            {
                icon:<FaQuran />,
                title:"Quran Copy",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laborum."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />

                <div className="services-center">
                    {this.state.services.map((item,ind)=>{
                        return <article key={ind} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
