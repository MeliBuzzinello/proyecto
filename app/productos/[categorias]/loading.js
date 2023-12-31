import Image from "next/image"

const Loading = () => {

    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
                src={'/donaLayout.png'}
                alt="Logo Dona"
                width={350}
                height={350}
                className="animate-pulse"
            />
        </div>
    )
}

export default Loading;