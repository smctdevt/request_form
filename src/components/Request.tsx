import React, { useState } from 'react';

type Props = {};

const Request = (props: Props) => {
    const [darkMode, setDarkMode] = useState(true);
    const [selected, setSelected] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelected(index);
    };

    const items = ['All Requests', 'Pending Requests', 'Approved Requests', 'Unsuccessful Requests'];
    const titles = ['Request ID', 'Type of Request', 'Date', 'Branch', 'Status', 'Action'];

    return (
        <div className="bg-graybg dark:bg-blackbg  h-full pt-[15px] px-[30px]  ">
            <div className='flex justify-end mb-2 '>
            <button className='bg-primary w-[151px] h-[34] rounded-[12px] text-white p-1 '>Send a Request</button>
            </div>
            <div className="bg-white w-full h-[210px] rounded-[12px] pl-[30px] flex flex-col  items-center">
                <div className="w-full px-4">
                    <ul className="flex justify-start items-center space-x-6 py-4 font-medium">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`cursor-pointer hover:text-primary ${selected === index ? 'underline text-primary' : ''} underline-offset-8 decoration-primary decoration-2`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-full px-4'>
                    <ul className='flex justify-evenly items-center space-x-6 py-4 font-bold'>
                        {titles.map((title, index) => (
                            <li
                                key={index}>
                                {title}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Request;