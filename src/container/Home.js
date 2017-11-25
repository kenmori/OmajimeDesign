import React, { Component } from 'react';
import {ToFormButton} from '../component/Button';
import OmajimeForm from '../component/OmajimeForm';
import {ProductionExperience} from '../component/Experience';
import {Member} from '../component/Member';
import {Footer} from '../component/Footer';
import '../scss/base/reset.css';
import '../scss/pages/Home.css';
import logo from '../svg/logo.svg';
import {connect} from 'react-redux';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import {add} from '../actionCreator/add';

class Home extends Component {
    constructor(){
        super();
        this.addWrap = this.addWrap.bind(this);
    }
    submit = (values) => {
    console.log(values);
    }
    addWrap(){
        this.props.addValue(3);
    }
    render(){
        const {value, addValue} = this.props;
        return (
            <div className='omajime'>
                <div id='js-menu' className='menu'></div>
                <section className='main'>
                    <h1><img src={logo} alt='' width='200'/></h1>
                <button onClick={this.addWrap}>click</button>
                </section>
                <section className='navigation pageHeader'>
                <nav>
                    <ul className='navigation__items'>
            <li>
            <a href='#service'>
            <span>サービス</span>
            </a>
            </li>
            <li>
            <a href='#works'>
            <span>WORKS</span>
            </a>
            </li>
            <li>
            <a href='#member'>
            <span>MEMBER</span>
            </a>
            </li>
            <li>
            <a href='#corporate'>
            <span>CORPORATE</span>
            </a>
            </li>
            <li>
            <a href='#contact'>
            <span>CONTACT</span>
            </a>
            </li>
                    </ul>
                </nav>
                </section>
                <section id='service' className='service'>
                    <div className='service__content'>
                    <div>
                        <h1>SERVICE</h1>
                        <div>
                        </div>
                        <div>
                            <div>SERVER</div>
                            <div>FRONT</div>
                            <div>BACK</div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>
                    </div>
                    <div>

                    </div>
                    <div>
                        <ToFormButton />
                    </div>
                </div>
                </section>
                <section id='works' className='works'>
                    <h1>WORKS</h1>
                    <div className='works__content'>
                        <ul>
                            <ProductionExperience />
                        </ul>
                        <p>他にも多数実績がございますので、まずはお気軽にお問いあわください</p>
                        <ToFormButton />
                    </div>
                </section>
                <section id='member' className='member'>
                    <h1>MEMBER</h1>
                    <div className='member__content'>
                    <ul>
                        <Member name='moritakenji' en='moritakenji' text='' />
                    </ul>
                    </div>
                </section>
                <section id='corporate' className='corporate'>
                    <h1>CORPORATE</h1>
            <div className='corporate__content'>
            <div className='corporate__item'>
            <div className='head'>屋号</div><div className='content'>大真面目デザイン</div>
        </div>
        <div className='corporate__item'>
            <div className='head'>代表</div><div className='content'>森田賢二</div>
            </div>
            <div className='corporate__item'>
            <div className='head'>設立日</div><div className='content'>2017年1月1日</div>
        </div>
        <div className='corporate__item'>
            <div className='head'>事業内容</div><div className='content lh14'>ソフトウエア開発 / <br/>Webサービス受託開発</div>
            </div>
            </div>

                </section>
                <section id='contact' className='contact'>
                    <h1>CONTACT</h1>
                    <div className='contact__content'>
                    <p>他にも多数実績がございますので、まずはお気軽にお問いあわせください</p>
                    <OmajimeForm onSubmit={this.submit}/>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default connect(
    state => ({value: state.value}),
    dispatch => ({addValue: (amont) => dispatch(add(amont))})
)(Home)


