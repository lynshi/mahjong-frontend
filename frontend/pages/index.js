import Link from 'next/link'

import Layout from '../components/util/layout'
import Title from '../components/util/title'
import Description from '../components/util/description'

export default function Home() {
  return (
    <Layout footer={true}>
        <div className="flex flex-col justify-center align-center">
            <Title>
                Let's play Mahjong!
            </Title>

            <Description>
                Don't know how to play? Check out the <a href="/rules" className="text-blue-500"> rules</a> here!
            </Description>

            <div className="flex flex-col items-center justify-center flex-wrap my-12">
                <Link href="/create_room">
                    <button className="w-2/5 mt-3 mb-12 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-grey-300 hover:border-blue-500 rounded">
                        New Room
                    </button>
                </Link>
                <Link href="/join_room">
                    <button className="w-2/5 mt-3 mb-12 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-grey-300 hover:border-blue-500 rounded">
                        Join a Room
                    </button>
                </Link>
            </div>
        </div>
    </Layout>
  )
}
