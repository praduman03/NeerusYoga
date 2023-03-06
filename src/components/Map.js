import React from 'react'

function Map() {
  return (
    <div className='GoogleMap'>
        <iframe className='iFrame' title='myFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4114897915515!2d73.03532081485379!3d26.28075718340382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418dc9216b7095%3A0x7367737ebaf87e80!2sNeeru&#39;s%20Yoga!5e0!3m2!1sen!2sin!4v1674110707663!5m2!1sen!2sin"
         width="600vh" 
         height="300vh" 
         style={{border:"0"}}
         allowFullScreen="" 
         loading="lazy" >
         </iframe>
    </div>
  )
}

export default Map
