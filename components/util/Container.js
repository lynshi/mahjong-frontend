export default function Container(props) {
    return (
        <div className="flex flex-col justify-center align-center">
            {props.children}
        </div>
    )
}