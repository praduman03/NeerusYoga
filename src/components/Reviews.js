import React from 'react'
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
import kannu from '../assets/Kannu.png'
import Heena from '../assets/Heena.png'
import Rajiv from '../assets/Rajiv.png'
import './Reviews.css'
function Reviews() {
  return (
    <div className='container-reviews'>
        <section>
  <div className="row d-flex justify-content-center">
  </div>

  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={Rajiv}
          className="rounded-circle shadow-1-strong" width="150" height="150" alt=''/>
      </div>
      <h5 className="mb-3">RAJIV NAGPAL</h5>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>⭐</li><li>⭐</li><li>⭐</li><li>⭐</li><li>⭐</li>
      </ul>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>An outstanding yoga guru and teacher .
Excellent knowledge clarity and
A role model who has been my mentor and guide from last one year.
The studio is equipped with every prop and eqpt besides adequate space and even an array of Ropes as also an decent  wash room.
She exhubrates confidence and self belief and gives personal attention to needs of each student.
The only drawback us that she is dot on time  and does not wait for anyone.
A passionate and self starter kind human.

      </p>
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={kannu}
          className="rounded-circle shadow-1-strong" width="150" height="150" alt=''/>
      </div>
      <h5 className="mb-3">KANNU SHARMA</h5>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>⭐</li><li>⭐</li><li>⭐</li><li>⭐</li><li>⭐</li>
      </ul>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Neeru Mam ,the  yoga guru is one of the best Yoga teachers in Jodhpur, not only she is a good teacher but she is a good friend too. Humble , sweet and gentle. She is not pecuniary in her approach which won and melt my heart. Associating with her was one the best things I did. Her classes are reasonably priced, the garden morning classes are the best. Cute warm indoor infrastructure is well designed and suited for prop practices , meditation and therapy. She is a go to for yoga in Jodhpur. Love and light to her.

      </p>
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={Heena}
          className="rounded-circle shadow-1-strong" width="150" height="150" alt=''/>
      </div>
      <h5 className="mb-3">HEENA SHARMA</h5>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>⭐</li><li>⭐</li><li>⭐</li><li>⭐</li><li>⭐</li>
      </ul>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Neeru’s yoga is perfect in every way. Mam gives personal attention to everyone and the meditation sessions are incredible which not only calms the mind and gives good vibes. Aerial yoga is also incredible which not only improves blood circulation but also gives flexibility to the body. Highly recommended
      </p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Reviews
