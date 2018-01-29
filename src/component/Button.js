//@flow
import * as React from 'react';
import '../scss/components/btn.css';


type Node = React.ChildrenArray<void | null | boolean | string | number | React.Element<any>>;

export const ToFormButton = (): React.Node  => <div className='toFormBtn'><a href='#contact' className='arrow'>制作のご相談はこちら</a></div>
