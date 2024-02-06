import classes from './MyButton.module.css';

const MyBytton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyBytton;