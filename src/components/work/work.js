import './work.css'
export function createWorkSection() {
  const section = document.createElement('section')
  section.id = 'work'
  section.classList.add('work', 'container', 'section')

  const workTitle = document.createElement('h2')
  workTitle.classList.add('work__title')
  workTitle.textContent = 'Proyectos'
  section.appendChild(workTitle)

  const workDescription = document.createElement('p')
  workDescription.classList.add('work__description')
  workDescription.textContent =
    'A continuación, encontrarás algunos de los proyectos en los que he trabajado. Cada uno de ellos me ha permitido aplicar y mejorar mis habilidades en diferentes tecnologías, así como enfrentar y superar diversos desafíos.'
  section.appendChild(workDescription)

  const workContainer = document.createElement('div')
  workContainer.classList.add('work__container')
  section.appendChild(workContainer)

  const projects = [
    {
      title: 'Vinyl shop Landing page',
      imgSrc:
        'https://res.cloudinary.com/dwajahfhr/image/upload/v1720697862/1vinyl_fof3ea.png',
      alt: 'vinyl landpage',
      subtitle: 'Tienda de vinilos',
      description1:
        'Este proyecto consiste en la réplica de una tienda de vinilos utilizando únicamente HTML y CSS.',
      description2:
        'Cree una interfaz visualmente atractiva y fácil de navegar, similar a la de una tienda real. Presté especial atención a la disposición y estilo de los elementos, asegurando una experiencia de usuario fluida y agradable.',
      link: 'https://prismatic-faloodeh-f7cdea.netlify.app/'
    },
    {
      title: 'Tienda con Filtro de Productos',
      imgSrc:
        'https://res.cloudinary.com/dwajahfhr/image/upload/v1720697862/2filter_s7t9tt.png',
      alt: 'weed filter',
      subtitle: 'Tienda de filtros',
      description1:
        'En este proyecto, desarrollé otra tienda online que incluye un sistema de filtrado avanzado para productos. Utilizando HTML, CSS y JavaScript.',
      description2:
        'Implementé un filtro que permite a los usuarios buscar productos según su tipo y rango de precios. Esta funcionalidad mejora significativamente la experiencia de usuario al facilitar la búsqueda de artículos específicos de manera rápida y eficiente.',
      link: 'https://bespoke-gnome-978d49.netlify.app/'
    },
    {
      title: 'Pinterest',
      imgSrc:
        'https://res.cloudinary.com/dwajahfhr/image/upload/v1720697863/pinterest_3_u9tbrn.png',
      alt: 'pinterest',
      subtitle: 'Pinterest',
      description1:
        'En este proyecto, creé una galería de imágenes dinámica mediante el consumo de una API, replicando la apariencia y funcionalidad de Pinterest.',
      description2:
        'Utilicé HTML, CSS y JavaScript para desarrollar una interfaz que organiza las imágenes en un diseño atractivo y responsive. Los usuarios pueden ver imágenes cargadas automáticamente desde la API, imitando la experiencia de navegación de Pinterest.',
      link: 'https://teal-medovik-f81539.netlify.app/'
    },
    {
      title: 'Portfolio',
      imgSrc:
        'https://res.cloudinary.com/dwajahfhr/image/upload/v1720697862/4port_njshqr.png',
      alt: 'portfolio',
      subtitle: 'Portfolio',
      description1:
        'Mi propio portafolio personal utilizando HTML, CSS y JavaScript.',
      description2:
        'Implementé animaciones sutiles y un diseño responsivo para garantizar una experiencia de usuario fluida en diferentes dispositivos. Este proyecto no solo me permitió aplicar todos mis conocimientos adquiridos, sino también destacar mis habilidades y logros de manera profesional.',
      link: '#'
    }
  ]

  function createProjectElement(project, index) {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('work__project')

    const projectTitle = document.createElement('h3')
    projectTitle.classList.add('work__project-title')
    projectTitle.textContent = project.title
    projectContainer.appendChild(projectTitle)

    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('work__img-wrapper', `work__image${index + 1}`)
    const img = document.createElement('img')
    img.src = project.imgSrc
    img.alt = project.alt
    imgWrapper.appendChild(img)
    projectContainer.appendChild(imgWrapper)

    const contentWrapper = document.createElement('div')
    contentWrapper.classList.add(`work__content`)

    const projectSubtitle = document.createElement('h3')
    projectSubtitle.classList.add('work__project-subtitle')
    projectSubtitle.textContent = project.subtitle
    contentWrapper.appendChild(projectSubtitle)

    const projectDescription1 = document.createElement('p')
    projectDescription1.classList.add('work__project-description1')
    projectDescription1.textContent = project.description1
    contentWrapper.appendChild(projectDescription1)

    const projectDescription2 = document.createElement('p')
    projectDescription2.classList.add('work__project-description2')
    projectDescription2.textContent = project.description2
    contentWrapper.appendChild(projectDescription2)

    const projectButton = document.createElement('a')
    projectButton.classList.add('btn', 'work__project-btn')
    projectButton.href = project.link
    projectButton.textContent = 'Sitio Web'
    contentWrapper.appendChild(projectButton)

    projectContainer.appendChild(contentWrapper)
    workContainer.appendChild(projectContainer)
  }

  projects.forEach((project, index) => createProjectElement(project, index))

  section.addEventListener('click', () => {
    console.log('Work section clicked')
  })

  return section
}
