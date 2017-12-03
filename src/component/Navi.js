import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import close from '../svg/close.svg';

class Navi extends Component {
    render(){
       return (
            <section className='navigation'>
                <nav>
                    {this.props.children}
                </nav>
            </section>
        )
    }
}


export const MobileNavi = () =>  (
    <MediaQuery maxDeviceWidth={460}>
        <Navi>
            <ul className='navigation__items'>
            <li className='menuClose'><img src={close} alt={close}/></li>
            <li className='menu'><div className='en'>MENU</div></li>
            <li><a href='#service'><div className='en'>SERVICE</div><div className='kana'>サービス</div></a></li>
            <li><a href='#works'><div className='en'>WORKS</div><div className='kana'>制作実績</div></a></li>
            <li><a href='#member'><div className='en'>MEMBER</div><div className='kana'>メンバー</div></a></li>
            <li><a href='#corporate'><div className='en'>CORPORATE</div><div className='kana'>会社概要</div></a></li>
            <li><a href='#contact'><div className='en'>CONTACT</div><div className='kana'>お問い合わせ</div></a></li>
            </ul>
        </Navi>
    </MediaQuery>
);

export const DesktopNavi = () => (
    <MediaQuery minDeviceWidth={461}>
        <Navi>
            <ul className='navigation__items'>
            <li><a href='#service'><div className='en'>SERVICE</div><div className='kana'>サービス</div></a></li>
            <li><a href='#works'><div className='en'>WORKS</div><div className='kana'>制作実績</div></a></li>
            <li><a href='#member'><div className='en'>MEMBER</div><div className='kana'>メンバー</div></a></li>
            <li><a href='#corporate'><div className='en'>CORPORATE</div><div className='kana'>会社概要</div></a></li>
            <li><a href='#contact'><div className='en'>CONTACT</div><div className='kana'>お問い合わせ</div></a></li>
            </ul>
        </Navi>
    </MediaQuery>
);