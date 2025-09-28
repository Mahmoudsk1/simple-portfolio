import React from 'react'
import Servicescard from './Servicescard'

function Services() {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl
       font-bold text-white'>Collebrate with brand<br />
    and agencies to create <br />
    imapctful results</h1>
    <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-4
    xl:grid-col-4 gap-10 mt-20 items-center'>
        <div>
            <Servicescard icon="/images/s1.png" name="UI and UX"
            description="Desiging interfaces that are efficient to use"
            />
        </div>
         <div>
            <Servicescard icon="/images/s2.png" name="Web and Mobile"
            description="Desiging interfaces that are efficient to use"
            />
        </div>
         <div>
            <Servicescard icon="/images/s3.png" name="Design & Creative"
            description="Desiging interfaces that are efficient to use"
            />
        </div>
         <div>
            <Servicescard icon="/images/s4.png" name="Development"
            description="Desiging interfaces that are efficient to use"
            />
        </div>
    </div>
    </div>
  )
}

export default Services
