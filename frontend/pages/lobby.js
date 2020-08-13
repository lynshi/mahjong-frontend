import React, {useState} from "react";
import { useRouter } from 'next/router'

import Container from '../components/util/container';

import Description from '../components/util/description';
import Layout from '../components/util/layout';
import Title from '../components/util/title';
import SubmitButton from '../components/util/SubmitButton';

export default function Lobby() {
    const router = useRouter()

    const [playersReady, arePlayersPresent] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (playersReady) {
            router.push("/game")
        }
    }

    return (
        <Layout footer={true}>
            <Container>
                <Title>
                    Waiting for players to join...
                </Title>
                <Description>
                    Room code:
                </Description>
                <div className="flex flex-col justify-center items-center py-5 px-0">
                    <div className="mt-12">
                        <Description>
                            Players
                        </Description>
                        <div className="flex items-center justify-center flex-wrap border-solid border-black border-2 rounded-xl mb-12">
                            <p className="m-2 text-center w-3/5">Judy</p>
                            <p className="m-2 text-center w-3/5">Lyndon</p>
                            <p className="m-2 text-center w-3/5">Wew</p>
                            <p className="m-2 text-center w-3/5">Pew</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <SubmitButton isActive={playersReady}>Start</SubmitButton>
                    </form>
                </div>
            </Container>
        </Layout>
    )
}
