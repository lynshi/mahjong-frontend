import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function TextInput(props) {
    return (
        <input type="text" name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="mt-4 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4" />
    )
}