import React from 'react';
import './PageLayout.scss';

import Button from '../../components/Button/Button.js';

export const PageLayout = () => (
    <div>
        <h1>Calculator</h1>
        <div className="line">
            <Button text="0" color="dark-gray" />
        </div>
        <div className="line">
            <Button text="AC" color="gray" />
            <Button text="+/-" color="gray" />
            <Button text="%" color="gray" />
            <Button text="/" color="orange" />
        </div>
        <div className="line">
            <Button text="7" color="gray" />
            <Button text="8" color="gray" />
            <Button text="9" color="gray" />
            <Button text="x" color="orange" />
        </div>
        <div className="line">
            <Button text="4" color="gray" />
            <Button text="5" color="gray" />
            <Button text="6" color="gray" />
            <Button text="-" color="orange" />
        </div>
        <div className="line">
            <Button text="1" color="gray" />
            <Button text="2" color="gray" />
            <Button text="3" color="gray" />
            <Button text="+" color="orange" />
        </div>
        <div className="line">
            <Button text="0" places="2" color="gray" />
            <Button text="." places="1" color="gray" />
            <Button text="=" places="1" color="gray" />
        </div>
    </div>
);

export default PageLayout;
