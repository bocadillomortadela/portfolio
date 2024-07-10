import '../hero/hero.css'

export function createHero() {
  const main = document.createElement('main')
  main.id = 'main-content'

  const section = document.createElement('section')
  section.className = 'hero container'

  const img = document.createElement('img')
  img.className = 'hero__img'
  img.src = '../public/profile.png'
  img.alt = 'Profile picture'

  const h2 = document.createElement('h2')
  h2.className = 'hero__subtitle'
  h2.textContent = 'Hola soy Jiashun 👋'

  const h1 = document.createElement('h1')
  h1.className = 'hero__title'
  h1.innerHTML = 'JUNIOR <br /> WEB DEVELOPER.'

  const p = document.createElement('p')
  p.className = 'hero__description'
  p.innerHTML = `<strong>Programador junior</strong> apasionado por crear soluciones eficientes con <strong>HTML/CSS/Javascript</strong>
  Explora mis proyectos y descubre cómo puedo contribuir a tu equipo`

  const a = document.createElement('a')
  a.className = 'hero__btn btn'
  a.href = '#contact'
  a.textContent = 'Contacto'

  section.appendChild(img)
  section.appendChild(h2)
  section.appendChild(h1)
  section.appendChild(p)
  section.appendChild(a)

  main.appendChild(section)

  document.querySelector('#app').appendChild(main)
  return main
}
