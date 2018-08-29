import React from 'react';

const TRows = ({values}) =>
    <tbody>
        {values.map(v =>
            <tr>
                {Object
                    .keys(v)
                        .map(key => <td>{v[key]}</td>)
                }
            </tr>)
        }
    </tbody>

export default TRows;