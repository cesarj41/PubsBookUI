import React from 'react';

const THead = ({values}) =>
    <thead>
        <tr>
            {values.map((v, i) => <th key={i}>{v}</th>)}
        </tr>
    </thead>

export default THead;