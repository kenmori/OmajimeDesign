import React, { Component } from 'react';
import {ToFormButton} from '../component/Button';
import MyForm from '../component/MyForm/index';
import '../scss/base/reset.css';
import '../scss/pages/home/Home.css';
import logo from '../svg/logo.svg';
import tojiru from '../svg/tojiru.svg';
import check from '../svg/check.svg';
import MediaQuery from 'react-responsive';
import {MobileNavi, DesktopNavi} from '../component/Navi';
import {ProductionExperience} from '../component/Experience';
import {Footer} from '../component/Footer';
import {connect} from 'react-redux';
export class Home extends Component {
    render(){
        return (
            <div className='mlabo'>
            <MobileNavi />
            <MediaQuery maxDeviceWidth={460}>
            <div id='js-menu' className='drowerBtn'><img src={tojiru} alt='大真面目' /></div>
            </MediaQuery>
            <section className='firstView'>
                <h1>
                    <MediaQuery maxDeviceWidth={460}>
                    <p>1pxを<br/>真面目に</p>
                    </MediaQuery>
                    <img src={logo} alt='大真面目デザイン' />
                </h1>
                <DesktopNavi />
            </section>
                <MediaQuery maxDeviceWidth={460}>
                    <div className='u-borderW'></div>
                </MediaQuery>
                <section id='service' className='service'>
                    <h1>SERVICE</h1>
                    <div className='service__content'>
                    <div className='service__introduce'>
                        <div className='service__introduce-text'>
                            <h2>大真面目デザイン
                            </h2>
                            <p className='u-mt20'>こちらもお気軽にご相談ください。
                            </p>
                        </div>
                        <div className='service__image'></div>
                    </div>
                    <div className='u-border u-mt42'></div>
                   <div className='service__suggestion'>
                        <MediaQuery maxDeviceWidth={460}>
                            <h2 className='service__suggestion title u-mt30 u-mb30'>こんなことで<br/>お困りではありませんか？</h2>
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={461}>
                            <h2 className='service__suggestion title u-mt30 u-mb30'>こんなことでお困りではありませんか？</h2>
                        </MediaQuery>
                        <ul className='service__suggestion items'>
                            <li className='service__suggestion item'><div className='service__suggestion check'><img src={check} alt='check' /></div><div className='service__suggestion content'>やりたい事は決まっているけど、フロントエンド・バックエンドで実現できるかわからない</div></li>
                        </ul>
                    </div>
                    <MediaQuery maxDeviceWidth={460}>
                        <div className='u-border u-mt42 u-border--arrow'></div>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={461}>
                    <div className='u-border u-mt42 u-border--arrowPC'></div>
                    </MediaQuery>

                    <div className='service__support'>
                        何か書く
                    </div>


                    <ul className='service__technology'>
                        何か書く
                    </ul>
                    <div className='u-mt50'>
                        <ToFormButton />
                    </div>
                    </div>
                </section>
                <section id='works' className='works'>
                    <h1>WORKS</h1>
                    <div className='works__content'>
                        <ul className='works__items'>
                            <ProductionExperience num="01"/>
                            <ProductionExperience num="02"/>
                            <ProductionExperience num="03"/>
                        </ul>
                        <p className='works__text'>他にも多数実績がございますので、<br/>まずはお気軽にお問いあわせください</p>
                        <ToFormButton />
                    </div>
                </section>
                <section id='member' className='member'>
                    <h1>MEMBER</h1>
                    <div className='member__content'>
                        <ul>
                            <li>森田</li>
                        </ul>
                    </div>
                </section>
                <section id='corporate' className='corporate'>
                    <h1>CORPORATE</h1>
                    <div className='corporate__content'>
                        <div className='corporate__item'>
                            <div className='head'>企業名</div><div className='content'>株式会社 大真面目デザイン</div>
                        </div>
                        <div className='corporate__item'>
                            <div className='head'>代表</div><div className='content'>森田けんじ</div>
                        </div>
                            <div className='corporate__item'>
                            <div className='head'>設立日</div><div className='content'>2017年1月1日</div>
                        </div>
                        <div className='corporate__item'>
                            <div className='head'>事業内容</div><div className='content lh14'>フロント業務</div>
                        </div>
                    </div>
                </section>
                <section id='contact' className='contact'>
                    <h1>CONTACT</h1>
                    <div className='contact__content'>
                        <p>他にも多数実績がございますので、<br/>まずはお気軽にお問いあわせください</p>
                        <MyForm />
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default connect({
})(Home);
