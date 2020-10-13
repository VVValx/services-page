import React from 'react';
import { IconContext } from "react-icons";
import { IoIosShareAlt, IoIosHeart } from 'react-icons/io';
import { eventsData } from '../../utils/data';
import { FaChevronDown } from 'react-icons/fa';
import './event.css';
// Components
import Filter from './Filter/filter';

const Event = () => {
  return (
    <div className="main-container">
    <div className="event-container">
      <div className="left-scene">
      <Filter />
      </div>
      <div className="right-scene">
        <div className="results-top">
          <p className="results-found">Helsinky: {eventsData.length} events found</p>
        </div>
        <div className="parent">
          {eventsData.slice(0, 6).map((event) => {
            const styles = {backgroundImage: `url(${event.imgPath})`};
            return (
              <div className="event-card" key={event.id}>
              <a href="www">
                <div className="event-img" style={styles}>
                  <div className="price centralized">
                    <p>{event.price}</p>
                  </div>
                  <div className="share-like">
                    <div className="share-hotel small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosShareAlt />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div className="like-rate small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosHeart />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
                <div className="event-infor">
                  <p className="week">{event.date.day}</p>
                  <p className="title">{event.info.title}</p>
                  <div className="calendar-frame">
                    <span className="day">{event.date.date}</span>
                    <span className="month">{event.date.month}</span>
                  </div>
                    <p className="description">{event.info.description}</p>
                    <div className="btns-rows">
                      {event.categories.map((category, index) => {
                          return (
                        <span key={index}>
                          <div className="btn-design">{category}</div>
                        </span>
                      );
                      })}
                    </div>
                </div>
              </a>
            </div>
          );
          })}
          <div class="see-more-events">
            <p>SEE MORE</p>
            <FaChevronDown className="more-icon"/>
          </div>
        </div>
      </div>
    </div>
  {/*START POPULAR1*/}
    <div className="event-popular">
      <div className="content">
      <p className="section-title">Popular now in Helsinky</p>
        {eventsData.slice(0, 4).map((event) => {
            const styles = {backgroundImage: `url(${event.imgPath})`};
            return (
              <div className="event-card" key={event.id}>
              <a href="www">
                <div className="event-img" style={styles}>
                  <div className="price centralized">
                    <p>{event.price}</p>
                  </div>
                  <div className="share-like">
                    <div className="share-hotel small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosShareAlt />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div className="like-rate small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosHeart />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
                <div className="event-infor">
                  <p className="week">{event.date.day}</p>
                  <p className="title">{event.info.title}</p>
                  <div className="calendar-frame">
                    <span className="day">{event.date.date}</span>
                    <span className="month">{event.date.month}</span>
                  </div>
                    <p className="description">{event.info.description}</p>
                    <div className="btns-rows">
                      {event.categories.map((category, index) => {
                          return (
                        <span key={index}>
                          <div className="btn-design">{category}</div>
                        </span>
                      );
                      })}
                    </div>
                </div>
              </a>
            </div>
          );
          })}
      </div>
    </div>
  {/*END POPULAR1*/}
{/*START THIS WEEKEND*/}
    <div className="event-popular">
      <div className="content">
      <p className="section-title">This weekend</p>
        {eventsData.slice(0, 4).map((event) => {
            const styles = {backgroundImage: `url(${event.imgPath})`};
            return (
              <div className="event-card" key={event.id}>
              <a href="www">
                <div className="event-img" style={styles}>
                  <div className="price centralized">
                    <p>{event.price}</p>
                  </div>
                  <div className="share-like">
                    <div className="share-hotel small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosShareAlt />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div className="like-rate small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosHeart />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
                <div className="event-infor">
                  <p className="week">{event.date.day}</p>
                  <p className="title">{event.info.title}</p>
                  <div className="calendar-frame">
                    <span className="day">{event.date.date}</span>
                    <span className="month">{event.date.month}</span>
                  </div>
                    <p className="description">{event.info.description}</p>
                    <div className="btns-rows">
                      {event.categories.map((category, index) => {
                          return (
                        <span key={index}>
                          <div className="btn-design">{category}</div>
                        </span>
                      );
                      })}
                    </div>
                </div>
              </a>
            </div>
          );
          })}
      </div>
    </div>
  {/*END THIS WEEKEND*/}
  {/*START FREE EVENTS*/}
    <div className="event-popular">
      <div className="content">
      <p className="section-title">Free events</p>
        {eventsData.slice(0, 4).map((event) => {
            const styles = {backgroundImage: `url(${event.imgPath})`};
            return (
              <div className="event-card" key={event.id}>
              <a href="www">
                <div className="event-img" style={styles}>
                  <div className="price centralized">
                    <p>{event.price}</p>
                  </div>
                  <div className="share-like">
                    <div className="share-hotel small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosShareAlt />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div className="like-rate small-white-circle centralized">
                      <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
                        <div>
                          <IoIosHeart />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
                <div className="event-infor">
                  <p className="week">{event.date.day}</p>
                  <p className="title">{event.info.title}</p>
                  <div className="calendar-frame">
                    <span className="day">{event.date.date}</span>
                    <span className="month">{event.date.month}</span>
                  </div>
                    <p className="description">{event.info.description}</p>
                    <div className="btns-rows">
                      {event.categories.map((category, index) => {
                          return (
                        <span key={index}>
                          <div className="btn-design">{category}</div>
                        </span>
                      );
                      })}
                    </div>
                </div>
              </a>
            </div>
          );
          })}
      </div>
    </div>
  {/*END FREE EVENTS*/}
{/*TODO: SLIDER*/}
  <h1>SLIDER</h1>
  </div>
  );

}

export default Event;
