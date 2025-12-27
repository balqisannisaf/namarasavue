<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3 custom-navbar">
    <div class="container">
      <a class="navbar-brand" href="#">
        <h2 class="fw-bold mb-0 logo-text">namarasa</h2>
      </a>

      <button 
        class="navbar-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto me-3">
          <li class="nav-item">
            <a class="nav-link px-3 active" href="#">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#tentang-kami">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#menu">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#review">Review</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#kontak">Kontak Kami</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Pastikan font mirip dengan gambar (misal: Poppins) */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.custom-navbar {
  font-family: 'Poppins', sans-serif;
  z-index: 1000;
  border-bottom: 1px solid #f0f0f0;
}

.logo-text {
  color: #634819; /* Cokelat khas Namarasa */
  letter-spacing: -1px;
}

.nav-link {
  color: #333 !important;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  transition: color 0.3s ease;
}

.nav-link:hover, .nav-link.active {
  color: #ffb100 !important; /* Kuning saat hover */
}

</style>