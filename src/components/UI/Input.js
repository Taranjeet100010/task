import classes from './Input.module.css'
const Input = (props) => {
    return (
        <input type={props.type || "text"}
            className={`${classes.input} ${props.className}`}
            placeholder={props.placeholder}
            onChange={props.onChange}
        >
            {props.children}
        </input>
    )
}

export default Input;