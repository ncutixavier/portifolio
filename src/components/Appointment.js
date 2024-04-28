import React from 'react'

const Appointment = () => {
    return (
        <div className='h-[60vh] bg-appointment sm:px-10 xs:px-5 pt-10 flex flex-col justify-center items-center'>
            <div class="uppercase font-semibold text-gray-400 text-center">Schedule an appointment</div>
            <div class="w-[40%] xs:w-full text-4xl xs:text-3xl font-semibold py-5 text-gray-100 text-center">
                Would you be available for a discussion about something?
            </div>
            <a
                href="https://calendar.app.google/yzi33BthDGyyPPbr8"
                target='_blank'
                className='bg-green-800 text-gray-100 px-10 py-5 text-xl uppercase mt-8 hover:bg-green-900 font-semibold'
                rel="noreferrer"
            >
                Book an appontment
            </a>
        </div>
    )
}

export default Appointment