import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="">
            <div className=' bg-blue-500 flex px-16 py-8 text-white' >
                <div className='  w-[30%]'>
                    <div className="">
                        <h1 className="text-2xl font-bold">Janis Care</h1>
                    </div>
                    <div className="">
                        <p className="text-sm font-light">Janis Care, incepted in 2020, is our initiative to take the battle against COVID-19 into our hands.</p>
                    </div>
                </div>
                <div className=" flex justify-between w-[70%]">
                    <div>
                        <h4 className="text-xl font-semibold">WHAT WE DO</h4>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">COMPANY</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">GET HELP</h4>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">CONTACT</h4>
                        <p>
                            123, XYZ Street, <br />
                            City, Country <br />
                            +123 456 7890 <br />

                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex mx-auto bg-blue-700 text-white py-2 items-center px-16 justify-between">
                <div className="flex justify-center">
                    <p className="text-sm font-light">
                        &copy; {new Date().getFullYear()} Janis Care. All rights reserved.
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <p>India</p>
                    <div className=' h-8 w-8 rounded-full border border-white bg-white'></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;