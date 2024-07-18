import '../header/header.css'

export function headerCreate() {
  const header = document.createElement('header')
  header.className = 'header'

  const nav = document.createElement('nav')

  const ul = document.createElement('ul')
  ul.className = 'header__menu'

  const menuItems = [
    { href: '#about', text: 'Sobre Mi', class: 'header__link' },
    { href: '#work', text: 'Proyectos', class: 'header__link' },
    { href: '#contact', text: 'Contacto', class: 'header__link' }
  ]

  menuItems.forEach((item) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.className = item.class
    a.href = item.href
    a.textContent = item.text
    li.appendChild(a)
    ul.appendChild(li)
  })

  const lineLi = document.createElement('li')
  lineLi.className = 'header__line'
  ul.appendChild(lineLi)

  const resumeLi = document.createElement('li')
  const resumeA = document.createElement('a')
  resumeA.className = 'header_resume btn'
  resumeA.href = '#'
  resumeA.textContent = 'Resume'
  resumeLi.appendChild(resumeA)
  ul.appendChild(resumeLi)
  nav.appendChild(ul)

  const button = document.createElement('button')
  button.className = 'header__bars'

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('stroke-width', '1.5')
  svg.setAttribute('stroke', 'currentColor')

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-linecap', 'round')
  path.setAttribute('stroke-linejoin', 'round')
  path.setAttribute('d', 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
  svg.appendChild(path)
  button.appendChild(svg)
  nav.appendChild(button)
  header.appendChild(nav)

  document.getElementById('app').appendChild(header)
}
