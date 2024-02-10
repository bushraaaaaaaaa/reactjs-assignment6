const Navbar=()=>{
    return(
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand img-fluid" href="#"><img src="https://template.hasthemes.com/daxone/daxone/assets/images/logo/logo-1.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navlinks">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mens</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">pages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
       
      </ul>
      <i class="bi bi-cart fs-1 m-2"></i>
      <form class="d-flex" role="search">
       
        <button class="btn fs-1" onMouseOver={<input type="text" class="form-control me-2" />} type="submit"><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>
    )
}
export {Navbar}