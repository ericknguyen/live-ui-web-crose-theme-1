import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";
import axios from "axios";
import PopupModal from "../components/PopupModal";
import AllSoulsFeastDb from "../database/AllSoulsFeast";
//import backgroundImage from "../database/AllSoulsFeastPicture.jpg"
import PrayerCard from "../components/PrayerCard";
import { Button, Card } from 'react-bootstrap';


const splitBy = (size, list) => {
    return list.reduce((acc, curr, i, self) => {
      if ( !(i % size)  ) {  
        return [
            ...acc,
            self.slice(i, i + size),
          ];
      }
      return acc;
    }, []);
  };

const WeeklyNews = () => {
    const [prayers, setPrayers] = useState([]);
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({});
    // const backgroundImageStyle = {
    //     color: 'blue',
    //     backgroundImage: `url(${backgroundImage})`
    // };

    const displayModal = (e, title, content) => {
        e.preventDefault();
        setContent({
            title: title,
            url: content
        });
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
        setContent({});
    };

    const fetchData = React.useCallback(() => {
        let mtplr;
        const from =  new Date(new Date().setUTCHours(0,0,0,0));
        from.setMonth(from.getUTCMonth()-1, 0);
        if([2, 3].includes(new Date().getUTCMonth() + 1)) {
            mtplr = from.getUTCFullYear() % 4 === 0 ? 31+29 : 31+28;
        } else {
            mtplr = from.getUTCMonth() + 1 === 8 ? 62 : 61;
        }
        const to = new Date(from.getTime() + mtplr * 86400000);
        axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
            username: 'anonymous',
            password: 'anonymous'
        }).then(auth => {
            axios({
                method: 'GET',
                url:'https://hvmatl-backend.herokuapp.com/allSoulsFeast',
                headers: {
                    'Authorization': `Bearer ${auth.data.token}`
                },
            }).then(res => setPrayers(Array.isArray(res.data) ? res.data: []));
        })
    }, []);

    useEffect(() => {
        fetchData()
        }, [fetchData]);

    return (
        <div>
            <Preloader/>
            <Header/>
            <section className="about-area section-padding-100-0">
            <div className="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h2>XIN CẦU NGUYỆN CHO CÁC LINH HỒN</h2>
                    </div>
                </div>
            </div>
                {splitBy(6,prayers).map((prayers, index) => {
                    return (
                        <div className="row">
                            {
                                prayers[0] && 
                                <div className="col-12 col-md-4 col-lg-2">
                                    <PrayerCard {...prayers[0]} key={index + '00'} ></PrayerCard>
                                </div>
                            }
                            {
                                prayers[1] && 
                                <div className="col-12 col-md-4 col-lg-2">
                                    <PrayerCard {...prayers[1]} key={index + '01'}></PrayerCard>
                                </div>
                            }
                            {
                                prayers[2] && 
                                <div className="col-12 col-md-4 col-lg-2">
                                    <PrayerCard {...prayers[2]} key={index + '02'} ></PrayerCard>
                                </div>
                            }
                            {
                                prayers[3] && 
                                <div className="col-12 col-md-4 col-lg-2">
                                    <PrayerCard {...prayers[3]} key={index + '03'}></PrayerCard>
                                </div>
                            }
                            {
                                prayers[4] && 
                                <div className="col-12 col-md-4 col-lg-2">
                                    <PrayerCard {...prayers[4]} key={index + '04'} ></PrayerCard>
                                </div>
                            }
                            {
                                prayers[5] && 
                                <div className="col-12 col-md-4 col-lg-2">
                                    <PrayerCard {...prayers[5]} key={index + '05'}></PrayerCard>
                                </div>
                            }

                        </div>
                    )
                })}
            </div>
            </section>
            <Footer/>
        </div>
    );
};

export default WeeklyNews;