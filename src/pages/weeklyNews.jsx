import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const WeeklyNews = () => {
    return (
        <div>
            <Header/>
            <div className="about-us-area about-page section-padding-100">

                <div className="container">
                    <center><h2>Tờ Thông Tin Mục Vụ</h2></center>
                    <div className="row align-items-center justify-content-between">
                        <iframe title="NewsIframe" id="NewsIframe"
                            src="https://drive.google.com/embeddedfolderview?id=1KQvCLvTucrt9jR1NDwgPB-OAxAk2A1I3#grid"
                            style={{width:'100%', height:'300px', border:'0'}}></iframe>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <a href="https://drive.google.com/open?id=1yvioAIyTmJA7NMko0hH0hKVRa4YW-KnQ"><i><img
                            src="http://cttdvnatl.net/gallery/img/bg-img/OldNewsIcon.png" alt="" width="35%"></img></i></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default WeeklyNews;