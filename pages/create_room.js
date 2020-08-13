import React, {useState} from "react";
import { useRouter } from 'next/router'

import Container from '../components/util/Container';
import Description from '../components/util/Description';
import SubmitButton from "../components/util/SubmitButton";
import TextInput from "../components/util/TextInput";


export default function CreateRoom() {
    const router = useRouter()

    const [name, setName] = useState("");
    const [isActive, isButtonActive] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (name != "") {
            router.push("/lobby")
        }
    }

    const handleUpdate = (evt) => {
        if (evt.target.value != "") {
            isButtonActive(true);
        } else {
            isButtonActive(false);
        }
        setName(evt.target.value)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center py-5 px-0">
                    <Description className="mt-4"> 
                        Your room code: 
                    </Description>
                    <TextInput name="nameInput" value={name} onChange={handleUpdate} placeholder="Your Name" />
                    <SubmitButton isActive={isActive}>Submit</SubmitButton>
                </div>
            </form>
        </Container>
    )
}