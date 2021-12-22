import classes from "./Button.module.css";
const Button = (props) => {
    return (
        <button
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            type={props.type || "button"}
            isValid={props.isValid}
        >
            {props.children}
        </button>
    )
}
export default Button;