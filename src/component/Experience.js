import React from 'react';
import '../scss/utils/helper.css';
export const ProductionExperience = ({num}) => {
    return (
        <li className='works__item'>
            <div className='works__index index'>
                <span className='index__case'>case</span>
            </div>
            <span className='num'>{num}</span>
            <h2>Webサービス</h2>
            <p className='text'>大手保険会社のお申し込み、
            情報管理の保守・管理
            ツールを新規作成
            </p>
            <div className='works__table-ex'>
                <div className="table">
                    <div className="table-item left">実装期間</div>
                    <div className='table-item right one'>3ヶ月</div>
                    <div className='table-item right'></div>
                </div>
                <div className="table">
                    <div className="table-item left">フロントエンド</div>
                    <div className='table-item right one'>HTML5 CSS3</div>
                    <div className='table-item right'>Javascript</div>
                </div>
                <div className="table">
                    <div className="table-item left">バックエンド</div>
                    <div className='table-item right one'>MysQL</div>
                    <div className='table-item right'>PHP</div>
                </div>
            </div>
    </li>
    );
}