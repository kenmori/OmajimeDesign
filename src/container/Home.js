import React, { Component } from 'react';
import {ToFormButton} from '../component/Button';
import {OmajimeForm} from '../component/OmajimeForm';
import {ProductionExperience} from '../component/Experience';
import {Member} from '../component/Member';
import {Footer} from '../component/Footer';
import '../scss/Home.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className='omajime'>
                <section className='main'>
                    <h1><img src={logo} alt='' width='200'/></h1>
                </section>
                <section>
                <nav>
                    <ul>
                        <li>
                            <a href='#service'>
                                <h1>
                                    SERVICE
                                </h1>
                                <span>サービス</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                </section>
                <section id='service' className='service'>
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
                </section>
                <section className='works'>
                    <h1>WORKS</h1>
                    <div>
                        <ul>
                            <ProductionExperience />
                        </ul>
                        <p>他にも多数実績がございますので、まずはお気軽にお問いあわください</p>
                        <ToFormButton />
                    </div>
                </section>
                <section className='member'>
                    <h1>MEMBER</h1>
                    <ul>
                        <Member name='moritakenji' en='moritakenji' text='' />
                    </ul>
                </section>
                <section className='corporate'>
                    <h1>CORPORATE</h1>
                    <div>
                        屋号 | 大真面目デザイン
                    </div>
                    <div>代表 | 森田賢二</div>
                    <div>設立日 | 2017年1月1日</div>
                    <div>事業内容 |  Webサービス受託開発</div>
                </section>
                <section className='contact'>
                    <h1>CONTACT</h1>
                    <p>他にも多数実績がございますので、まずはお気軽にお問いあわせください</p>
                    <OmajimeForm formApi='/fafa'/>
                </section>
                <Footer />
            </div>
        )
    }
}