import './studies.css'

export function createEducationContent() {
  const studiesDiv = document.createElement('div')
  studiesDiv.id = 'studies-div'
  document.querySelector('main').appendChild(studiesDiv)

  const toggleButtonContainer = document.createElement('div')
  toggleButtonContainer.classList.add('toggle-button-container')
  studiesDiv.appendChild(toggleButtonContainer)

  const educationButton = document.createElement('button')
  educationButton.id = 'education-button'
  educationButton.className = 'studies-btn btn'
  educationButton.textContent = 'Mostrar Estudios'
  toggleButtonContainer.appendChild(educationButton)

  const experienceButton = document.createElement('button')
  experienceButton.id = 'experience-button'
  experienceButton.className = 'studies-btn btn'
  experienceButton.textContent = 'Mostrar Experiencia'
  toggleButtonContainer.appendChild(experienceButton)

  const educationSection = document.createElement('section')
  educationSection.classList.add('studies-content')
  educationSection.id = 'education-section'

  const educationTitle = document.createElement('h3')
  educationTitle.textContent = 'Estudios'
  educationSection.appendChild(educationTitle)

  const educationDescription = document.createElement('p')
  educationDescription.classList.add('description-studies')
  educationDescription.textContent =
    'Mi trayectoria académica comenzó con la matrícula en el Grado Superior de Desarrollo de Aplicaciones Web (DAW), un programa que inicialmente atrajo mi interés por su enfoque en la creación y gestión de soluciones digitales. Sin embargo, a lo largo del curso, me di cuenta de que la metodología de enseñanza no se alineaba completamente con mi estilo de aprendizaje y mis expectativas profesionales. Esta experiencia me llevó a reevaluar mis objetivos y a buscar alternativas más adecuadas para mi desarrollo. Actualmente, estoy cursando un bootcamp intensivo en [thePower], '
  educationSection.appendChild(educationDescription)

  studiesDiv.appendChild(educationSection)
}

export function createExperienceContent() {
  const studiesDiv = document.querySelector('#studies-div')

  const experienceSection = document.createElement('section')
  experienceSection.classList.add('studies-content')
  experienceSection.id = 'experience-section'
  experienceSection.style.display = 'none'

  const experienceTitle = document.createElement('h3')
  experienceTitle.textContent = 'Experiencias'
  experienceSection.appendChild(experienceTitle)

  const experienceDescription = document.createElement('p')
  experienceDescription.classList.add('description-studies')
  experienceDescription.textContent =
    'A lo largo de mi trayectoria profesional, he acumulado una valiosa experiencia en el sector de servicios, desempeñándome como camarero y dependiente en tiendas. Estas posiciones me han permitido desarrollar habilidades clave que son transferibles a cualquier campo profesional, tales como la atención al cliente, la capacidad de trabajo bajo presión, la gestión del tiempo y el trabajo en equipo.'
  const experienceDescription2 = document.createElement('p')
  experienceDescription2.classList.add('description-studies')
  experienceDescription2.textContent =
    'Motivado por el deseo de mejorar mis condiciones laborales y buscar nuevas oportunidades, decidí redirigir mi carrera hacia el desarrollo de aplicaciones web. Reconociendo la creciente demanda de profesionales en el sector tecnológico.'
  experienceSection.appendChild(experienceDescription)
  experienceSection.appendChild(experienceDescription2)

  studiesDiv.appendChild(experienceSection)
}
