import Link from 'next/link';

import Container from '../components/util/container';

import Description from '../components/util/description';
import Layout from '../components/util/layout';
import Title from '../components/util/title';

export default function Lobby() {
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
                    <Link href="/game">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                            Start
                        </button>
                    </Link>
                </div>
            </Container>
        </Layout>
    )
}
