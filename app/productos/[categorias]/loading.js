import Image from "next/image"

const Loading = () => {

    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
                src={'/donaLayout.png'}
                alt="Logo Dona"
                width={150}
                height={150}
                className="animate-spin"
            />
        </div>
    )
}

export default Loading;