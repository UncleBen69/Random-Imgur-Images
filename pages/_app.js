import 'react-medium-image-zoom/dist/styles.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{`
                body{
                    background-color: rgb(33, 33, 33)!important; 
                    margin: 0;
                }
            `}</style>
        </>
    )
}

export default MyApp