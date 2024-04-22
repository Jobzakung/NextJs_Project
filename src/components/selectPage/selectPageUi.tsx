"use client";
import { useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation'
import Navbar from '../Navbar';


const SelectPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const router = useRouter();


    const selectUserType = (type: string) => {
        setSelectedOption(type);
        if (type === "dog" && selectedOption === "dog") {

            router.push('/selectPage/1', { scroll: false })


        } else if (type === "rat" && selectedOption === "rat") {
            router.push('/selectPage/2', { scroll: false })
        }

        // if (selectedOption === "rat") {
        //     router.push('/selectPage/2', { scroll: false })
        // }
    };
    // const submitSelection = () => {
    //     if (selectedOption == "dog") {
    //         router.push('/selectPage/1', { scroll: false })

    //     }
    //     else if(selectedOption == "rat") {
    //         router.push('/selectPage/2', { scroll: false })
    //     }
    //     else {
    //         alert('โปรดเลือกวิดีโอ.');
    //     }
    // };
    console.log(selectedOption);
    return (
        <div>
            <Navbar />
            <div className="container bg-white p-10">
                <div className="header text-3xl font-bold mb-6 text-gray-700">โปรดเลือกรับชมวิดีโอ</div>
                <div className="options flex justify-center flex-wrap">
                    <div
                        className={`option mx-4 my-2 p-4 bg-white border border-gray-300 rounded-lg cursor-pointer transition duration-300 shadow-md hover:border-gray-400 ${selectedOption === 'rat' ? 'selected' : ''}`}
                        onClick={() => selectUserType('rat')}
                    >
                        <img src="/image/rat.png" alt="Rat" className="w-24 h-24 mb-4 rounded-full" />
                        <div className="option-text text-lg text-gray-700">โรคฉี่หนู</div>
                    </div>
                    <div
                        className={`option mx-4 my-2 p-4 bg-white border border-gray-300 rounded-lg cursor-pointer transition duration-300 shadow-md hover:border-gray-400 ${selectedOption === 'dog' ? 'selected' : ''}`}
                        onClick={() => selectUserType('dog')}
                    >
                        <img src="/image/rabies.png" alt="Dog" className="w-24 h-24 mb-4 rounded-full" />
                        <div className="option-text text-lg text-gray-700">โรคพิษสุนัขบ้า</div>
                    </div>
                </div>
                {/* <button
                className="button2 mt-6 mr-4 px-4 py-2 text-lg bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-600"
                onClick={() => { router.push('/');}}
            >
                กลับ
            </button>
            <button
                className="button mt-6 px-4 py-2 text-lg bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-600"
                onClick={submitSelection}
            >
                ตกลง
            </button> */}
            </div>
        </div>
    );
};

export default SelectPage;
