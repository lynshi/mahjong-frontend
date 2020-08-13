import React, {useState} from "react";
import { useRouter } from 'next/router'

import Container from '../components/util/Container';
import SubmitButton from "../components/util/SubmitButton";
import TextInput from "../components/util/TextInput";


export default function JoinRoom() {
    const router = useRouter()

    const [name, setName] = useState("");
    const [roomCode, setRoomCode] = useState("");
    const [isActive, isButtonActive] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (name != "" && roomCode != "") {
            router.push("/lobby")
        }
    }

    const handleUpdate = (evt) => {
        validateSubmitButton(evt);

        switch(evt.target.name) {
            case "roomCodeInput": 
                setRoomCode(evt.target.value);
                break;
            case "nameInput":
                setName(evt.target.value);
                break;
        }
    }

    const validateSubmitButton = (evt) => {
        let isValid = false; 
        switch(evt.target.name) {
            case "roomCodeInput": 
                if (name != "" && evt.target.value != "") {
                    isValid = true;
                }
                break;
            case "nameInput": 
                if (roomCode != "" && evt.target.value != "") {
                    isValid = true;
                }
                break;
        }
        isButtonActive(isValid);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center py-5 px-0">
                    <TextInput name="roomCodeInput" value={roomCode} onChange={handleUpdate} placeholder="Room Code" />
                    <TextInput name="nameInput" value={name} onChange={handleUpdate} placeholder="Your Name" />
                    <SubmitButton isActive={isActive}>Submit</SubmitButton>
                </div>
            </form>
        </Container>
    )
}