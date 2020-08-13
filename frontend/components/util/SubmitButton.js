export default function SubmitButton(props) {
    let classes = "mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded";

    if (props.isActive === true) {
        classes += " border-blue-700 hover:bg-blue-700";
    } else {
        classes += " opacity-50 cursor-not-allowed";
    }

    return (
        <input type="submit" className={classes} />
    )
}