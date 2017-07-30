import React from 'react';
import './PageLayout.scss';

import Button from '../../components/Button/Button.js';
import Calculator from '../../components/Calculator/Calculator.js';

export const PageLayout = () => (
    <div>
        <h1 className="header" >Calculator</h1>
        <Calculator />
    </div>
);

export default PageLayout;
