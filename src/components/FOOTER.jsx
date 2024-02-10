import React from 'react'

const FOOTER = () => {
  return (
    <>
     <div className="container-fluid">
        <div className="row mt-2 footer">
<div className="col">
    <img src="https://template.hasthemes.com/daxone/daxone/assets/images/logo/logo-1.png" className="mb-2 img-fluid" alt="" />
    <p className='text=secondary fs-2'>Follow us</p>
    <i class="bi bi-facebook text=secondary fs-2 p-2"></i><i class="bi bi-twitter text=secondary fs-2 p-2"></i><i class="bi bi-instagram text=secondary fs-2 p-2"></i>
</div>
<div className="col">
    <strong>
        <p>Useful Links</p>
        <a href="">Shopping cat</a>
        <a href="">Wishlist</a>
        <a href="">checkout</a>
        <a href="">Support</a>
    </strong>
</div>
<div className="col"><strong>
        <p>About Us</p>
        <a href="">About</a>
        <a href="">Products</a>
        <a href="">Terms And Condition</a>
        <a href="">Help Center</a>
    </strong></div>
<div className="col"><strong>
        <p>NewsLetter</p>
    </strong>
    <p>Subscribe to get new updates</p>
    <input type="text" placeholder='enter your email'/> <i class="bi bi-search fs-2"></i>
    </div>
    
        </div>
        <div className="row bg-secondary-subtle">
        <center>
            <p className='fs-2'>Copyright © Daxone. All Right Reserved</p>
        </center>
    </div>
    </div> 
    </>
    
  )
}

export {FOOTER}