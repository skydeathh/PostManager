import React from 'react';

const MainSelect = React.forwardRef(({ options, defaultValue, value, onChange }) => {

    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            >
            <option disabled value=''>{defaultValue}</option>
            {
                options.map(o =>
                    <option key={o.value} value={o.value}>
                        {o.body}
                    </option>
                )
            }
        </select>
    )
});

export default MainSelect;