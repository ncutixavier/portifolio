const Appointment = () => {

    const iframeStyle = {
        border: 0,
        filter: 'invert(90%) hue-rotate(180deg)',
        borderRadius: '10px',
    };

    return (
        <div className='h-[1200px] bg-appointment sm:px-10 xs:px-5 pt-10 flex flex-col justify-center items-center'>
            <div className="uppercase font-semibold text-gray-400 text-center">Schedule an appointment</div>
            <div className="w-[40%] xs:w-full text-4xl xs:text-3xl font-semibold py-5 text-gray-100 text-center">
                Would you be available for a discussion about something?
            </div>

            <div className="w-full text-center text-gray-200 text-xl mb-5">
                Book an appointment through the calendar below or click <a
                    href="https://calendar.app.google/yzi33BthDGyyPPbr8"
                    target='_blank'
                    className='text-green-600 underline'
                    rel="noreferrer"
                >
                    here
                </a> to open in a new tab.
            </div>

            <div className='w-full bg-slate-900 rounded-md'>
                <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3WRBQNep1H1nZo1P2myruvUg0DOf_F0n7VTEZrCUie4XFQKfVINZdKxIzES6PEdYjrjYK6HWpQ?gv=true"
                    style={iframeStyle}
                    width="100%"
                    height="800"
                    frameborder="0"
                    title='Appointment Schedule'
                />
            </div>
        </div>
    )
}

export default Appointment