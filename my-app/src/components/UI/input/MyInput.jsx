// import classes from './MyInput.module.css'

// const MyInput = (props) => {
//     return (
//         <input {...props} className={classes.MyInput} />
//     );
// };

// export default MyInput;

import React from 'react';
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref}  className={classes.MyInput} {...props}/>
    );
});

export default MyInput;