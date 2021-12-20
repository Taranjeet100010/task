import classes from "./AddSidebar.module.css"
const AddSidebar = () => {
    return (
        <>
            <div className={classes.sidebar}>
                <ul>
                    <li>First List</li>
                    <li>Second List</li>
                    <li>Third List</li>
                    <li>Fourth List</li>
                    <li>Fifth List</li>
                </ul>
            </div>
        </>
    )
}
export default AddSidebar