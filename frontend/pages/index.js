import Link from 'next/link'

import Layout from '../components/util/layout'

export default function Home() {
  return (
    <Layout footer={true}>
        <div class="flex flex-col justify-center align-center">
            <h1 class="m-0 leading-1.15 text-6xl">
                Let's play Mahjong!
            </h1>

            <p class="text-center leading-normal text-2xl">
                Don't know how to play? Check out the <a href="/rules" class="text-blue-500"> rules</a> here!
            </p>

            <div class="flex flex-col items-center justify-center flex-wrap my-12">
                <Link href="/create_room">
                    <button class="w-2/5 mt-3 mb-12 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-grey-300 hover:border-blue-500 rounded">
                        New Room
                    </button>
                </Link>
                <Link href="/join_room">
                    <button class="w-2/5 mt-3 mb-12 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-grey-300 hover:border-blue-500 rounded">
                        Join a Room
                    </button>
                </Link>
            </div>
        </div>
    </Layout>
  )
}
