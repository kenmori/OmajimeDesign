import React from 'react';
export const TopickPageComponent = ({topick, increment}) =>( <div>
    now count is :{topick}
    <button onClick={ increment }>increment</button>
</div>
)
