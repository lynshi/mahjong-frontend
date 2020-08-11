import Link from 'next/link';

import Container from '../components/util/container';
import Description from '../components/util/description';

export default function CreateRoom() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center py-5 px-0">
                <Description className="mt-4">
                    Your room code:
                </Description>
                <input className="mt-4 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4" placeholder="Your Name" />

                <Link href="/lobby">
                    <button className="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                        Submit
                    </button>
                </Link>
            </div>
        </Container>
    )
}