const armada = [
  {
    name: "Avanza",
    image: "/assets/images/car/Toyota-Avanza.png",
    harga: "500.000",
    seat: 6,
    icon: "mdi:car-sedan"
  },
  {
    name: "Expander",
    image: "/assets/images/car/Mitsubishi-Xpander.png",
    harga: "650.000",
    seat: 6,
    icon: "mdi:car-sports-utility"
  },
  {
    name: "Innova Reborn",
    image: "/assets/images/car/innova-reborn.png",
    harga: "800.000",
    seat: 6,
    icon: "mdi:car-estate"
  },
  {
    name: "Innova Zenix",
    image: "/assets/images/car/Innova-Zenix.png",
    harga: "1.100.000",
    seat: 6,
    icon: "mdi:car-estate"
  },
  {
    name: "Fortuner",
    image: "/assets/images/car/Toyota-Fortuner.png",
    harga: "1.500.000",
    seat: 6,
    icon: "mdi:car-sports-utility"
  },
  {
    name: "Pajero",
    image: "/assets/images/car/Pajero-Sport.png",
    harga: "1.700.000",
    seat: 6,
    icon: "mdi:car-sports-utility"
  },
  {
    name: "Alphard Euro 4",
    image: "/assets/images/car/Alphard-Euro4.png",
    harga: "3.600.000",
    seat: 6,
    icon: "mdi:car-luxury"
  },
  {
    name: "Hiace Commuter",
    image: "/assets/images/car/Hiace-Commuter.png",
    harga: "1.550.000",
    seat: 16,
    icon: "mdi:van-passenger"
  },
  {
    name: "Hiace Premio",
    image: "/assets/images/car/Hiace-Premio.png",
    harga: "1.700.000",
    seat: 12,
    icon: "mdi:van-passenger"
  },
  {
    name: "Toyota Alphard",
    image: "/assets/images/car/Toyota-Alphard.png",
    harga: "2.600.000",
    seat: 6,
    icon: "mdi:car-luxury"
  },
  {
    name: "New Avanza Veloz",
    image: "/assets/images/car/Avanza-Veloz.png",
    harga: "650.000",
    seat: 6,
    icon: "mdi:car-sedan"
  },
];

function loadArmadaCards(limit) {
  const container = document.querySelector('.list-armada');
  container.innerHTML = '';

  armada.slice(0, limit).forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-duration', '1000');

    card.innerHTML = `
      <div class="card-top">
        <img src="/assets/images/logo.png" alt="Logo" class="logo" />
        <h3 class="car-name">${car.name}</h3>
      </div>
      <div class="car-image">
        <img src="${car.image}" alt="${car.name}" />
      </div>
      <div class="card-info">
        <div class="features">
          <div class="feature">
            <iconify-icon icon="mdi:car-seat"></iconify-icon><br>
            <span>${car.seat} Seat</span>
          </div>
          <div class="feature">
            <iconify-icon icon="bxs:car"></iconify-icon><br>
            <span>Mobil</span>
          </div>
          <div class="feature">
            <iconify-icon icon="mdi:person"></iconify-icon><br>
            <span>Sopir</span>
          </div>
        </div>
        <div class="price-order">
          <span class="price">Rp.${car.harga},-</span>
          <a class="pesan-btn" href="https://wa.me/6289684887363?text=Halo%2C%20SELAMAT%20DATANG%20DI%20RRGaruda%0Awww.RRGaruda.com%0AReady%20Unit%20%0A🚘%20${encodeURIComponent(car.name)}%0AMelayani%20Tour%20%26%20Travel%0ATidak%20melayani%20lepas%20kunci
          " target="_blank">
            Pesan
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const isIndex = path === "/" || path.endsWith("index.html");
  const limit = isIndex ? 3 : armada.length;

  loadArmadaCards(limit);
});
