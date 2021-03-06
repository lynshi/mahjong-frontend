import Link from 'next/link';

import Container from '../components/util/container';
import Description from '../components/util/description';
import Layout from '../components/util/layout';
import Title from '../components/util/title';

export default function Home() {
  return (
    <Layout footer={true}>
        <Container>
            <Title>
                Let's play Mahjong!
            </Title>

            <Description>
                Don't know how to play? Check out the <a href="/rules" className="text-blue-500"> rules</a> here!
            </Description>

            <div className="flex flex-col items-center justify-center flex-wrap my-12">
                <Link href="/create_room">
                    <button className="w-1/3 mt-3 mb-6 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border-2 border-grey-300 hover:border-blue-500 rounded">
                        New Room
                    </button>
                </Link>
                <Link href="/join_room">
                    <button className="w-1/3 mt-3 mb-6 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border-2 border-grey-300 hover:border-blue-500 rounded">
                        Join a Room
                    </button>
                </Link>
            </div>
        </Container>
    </Layout>
  )
}
