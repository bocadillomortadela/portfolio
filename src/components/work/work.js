import './work.css'
export function createWorkSection() {
  const section = document.createElement('section')
  section.id = 'work'
  section.classList.add('work', 'container', 'section')

  section.innerHTML = `
        <h2 class="work__title">Proyectos</h2>
        <p class="work__description">
          A continuación, encontrarás algunos de los proyectos en los que he trabajado. Cada uno de ellos me ha permitido aplicar y mejorar mis habilidades en diferentes tecnologías, así como enfrentar y superar diversos desafíos.
        </p>
        <div class="work__container">
          <!-- Project 1 -->
          <div class="work__project">
            <h3 class="work__project-title">Vinyl shop Landing page</h3>
            <div class="work__img-wrapper work__image1">
              <img src="https://res.cloudinary.com/dwajahfhr/image/upload/v1720454847/hehe/ebhja5xybkyapmloyltf.png" alt="vinyl landpage">
            </div>
            <div class="work__content1">
              <h3 class="work__project-subtitle">Tienda de vinilos</h3>
              <p class="work__project-description1">
                Este proyecto consiste en la réplica de una tienda de vinilos utilizando únicamente HTML y CSS.
              </p>
              <p class="work__project-description2">
                Cree una interfaz visualmente atractiva y fácil de navegar, similar a la de una tienda real. Presté especial atención a la disposición y estilo de los elementos, asegurando una experiencia de usuario fluida y agradable.
              </p>
              <a class="btn work__project-btn" href="https://prismatic-faloodeh-f7cdea.netlify.app/">Sitio Web</a>
            </div>
          </div>
          <!-- Project 2 -->
          <div class="work__project">
            <h3 class="work__project-title">Tienda con Filtro de Productos</h3>
            <div class="work__img-wrapper work__image2">
              <img src="https://res.cloudinary.com/dwajahfhr/image/upload/v1720455166/weed_filter_xqv4si.png" alt="weed filter">
            </div>
            <div class="work__content2">
              <h3 class="work__project-subtitle">Tienda de filtros</h3>
              <p class="work__project-description1">
                En este proyecto, desarrollé otra tienda online que incluye un sistema de filtrado avanzado para productos. Utilizando HTML, CSS y JavaScript.
              </p>
              <p class="work__project-description2">
                 Implementé un filtro que permite a los usuarios buscar productos según su tipo y rango de precios. Esta funcionalidad mejora significativamente la experiencia de usuario al facilitar la búsqueda de artículos específicos de manera rápida y eficiente..
              </p>
              <a class="btn work__project-btn" href="https://bespoke-gnome-978d49.netlify.app/">Sitio Web</a>
            </div>
          </div>
          <!-- Project 3 -->
          <div class="work__project">
            <h3 class="work__project-title">Pinterest</h3>
            <div class="work__img-wrapper work__image3">
              <img src="https://res.cloudinary.com/dwajahfhr/image/upload/v1720541617/inspirest_kajavk.png" alt="pinterest"></a>
            </div>
            <div class="work__content3">
              <h3 class="work__project-subtitle">Pinterest</h3>
              <p class="work__project-description1">
                En este proyecto, creé una galería de imágenes dinámica mediante el consumo de una API, replicando la apariencia y funcionalidad de Pinterest.
              </p>
              <p class="work__project-description2">
                Utilicé HTML, CSS y JavaScript para desarrollar una interfaz que organiza las imágenes en un diseño atractivo y responsive. Los usuarios pueden ver imágenes cargadas automáticamente desde la API, imitando la experiencia de navegación de Pinterest.
              </p>
              <a class="btn work__project-btn" href="https://teal-medovik-f81539.netlify.app/">Sitio web</a>
            </div>
          </div>
          <!-- Project 4 -->
          <div class="work__project">
            <h3 class="work__project-title">Portfolio</h3>
            <div class="work__img-wrapper work__image4">
              <img src="https://res.cloudinary.com/dwajahfhr/image/upload/v1720622286/portafolio_y6dzvd.png" alt="portfolio">
            </div>
            <div class="work__content4">
              <h3 class="work__project-subtitle">Portfolio</h3>
              <p class="work__project-description1">
                Mi propio portafolio personal utilizando HTML, CSS y JavaScript.
              </p>
              <p class="work__project-description2">
                Implementé animaciones sutiles y un diseño responsivo para garantizar una experiencia de usuario fluida en diferentes dispositivos. Este proyecto no solo me permitió aplicar todos mis conocimientos adquiridos, sino también destacar mis habilidades y logros de manera profesional.
              </p>
              <a class="btn work__project-btn" href="#">Sitio web</a>
            </div>
          </div>
        </div>
    `
  document.querySelector('main').appendChild(section)
}
