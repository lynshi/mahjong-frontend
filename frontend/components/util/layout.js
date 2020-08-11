export default function Layout(props) {
    return (
        <div class="min-h-screen py-0 py-2 flex flex-col justify-center items-center">
            <head>
                <title>Mahjong</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <main>
                {props.children}
            </main>
            {props.footer == true &&
                <footer class="w-full border-solid border-t border-gray-300 flex justify-center align-center">
                    © Judy Pao & Lyndon Shi {new Date().getFullYear()}
                </footer>
            }
        </div>
    )
};
