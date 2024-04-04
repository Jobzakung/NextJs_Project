import Error from "next/error"

export default function Error404() {
    return (
        <div className=" bg-black flex justify-center items-center w-screen h-screen">
            <h1 className=" text-white text-[24px] font-inter">404 |</h1>
            <h1 className=" text-white text-[14px] font-inter relative left-[5px]">This page could not be found.</h1>
        </div>
    )
}
