import '../about/about.css'

export function createAboutSection() {
  const section = document.createElement('section')
  section.id = 'about'
  section.className = 'about container section'

  const contentDiv = document.createElement('div')
  contentDiv.className = 'about__content'

  const h2 = document.createElement('h2')
  h2.className = 'about__title'
  h2.textContent = 'Sobre mi'

  const p1 = document.createElement('p')
  p1.className = 'about__description'
  p1.innerHTML = `Soy <strong>Jiashun</strong>, un programador web junior basado en Valencia, España. Actualmente, estoy cursando un bootcamp de web developer en ThePower, donde estoy ampliando mis habilidades en desarrollo web.`

  const p2 = document.createElement('p')
  p2.className = 'about__description'
  p2.textContent = `Mi rutina diaria incluye sesiones intensivas de aprendizaje, práctica de código y la creación de proyectos desafiantes.`

  const p3 = document.createElement('p')
  p3.className = 'about__description'
  p3.innerHTML = ` Me apasiona crear aplicaciones web eficientes y atractivas, y estoy siempre en busca de oportunidades para aplicar mis conocimientos y seguir aprendiendo.`

  const hr = document.createElement('hr')
  hr.className = 'about__hr'

  const h3 = document.createElement('h3')
  h3.className = 'about__subtitle'
  h3.textContent = 'Tecnologias'

  const ulContainer = document.createElement('div')
  ulContainer.className = 'about__ul-container'

  const ul1 = document.createElement('ul')
  ul1.className = 'about__ul'
  ul1.innerHTML = `
    <li class="about__list">JavaScript (ES6+)</li>
    <li class="about__list">CSS</li>
    <li class="about__list">HTML</li>
  `

  ulContainer.appendChild(ul1)

  contentDiv.appendChild(h2)
  contentDiv.appendChild(p1)
  contentDiv.appendChild(p2)
  contentDiv.appendChild(p3)
  contentDiv.appendChild(hr)
  contentDiv.appendChild(h3)
  contentDiv.appendChild(ulContainer)

  const imgWrapper = document.createElement('div')
  imgWrapper.className = 'about__img-wrapper'

  const img = document.createElement('img')
  img.className = 'about__img lazy loading'
  img.src = './public/hehe.jpeg'
  img.dataset.src = '/about.jpg'
  img.alt = 'Profile picture'

  imgWrapper.appendChild(img)

  section.appendChild(contentDiv)
  section.appendChild(imgWrapper)

  const main = document.getElementById('main-content')
  main.appendChild(section)
}
