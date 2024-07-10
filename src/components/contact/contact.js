import '../contact/contact.css'
export function createContactSection() {
  const section = document.createElement('section')
  section.id = 'contact'
  section.className = 'contact container section'

  const title = document.createElement('h2')
  title.className = 'contact__title'
  title.textContent = 'Ponte en contacto'
  section.appendChild(title)

  const description = document.createElement('p')
  description.className = 'contact__description'
  description.textContent =
    '¡Gracias por revisar mi portafolio! Si estás interesado en colaborar en proyectos emocionantes o simplemente deseas charlar sobre desarrollo web, no dudes en ponerte en contacto conmigo.'
  section.appendChild(description)

  const contactButton = document.createElement('a')
  contactButton.className = 'contact__btn btn'
  contactButton.href = 'mailto:jiashunbbv@gmail.com'
  contactButton.target = '_blank'
  contactButton.textContent = 'Ponte en contacto'
  section.appendChild(contactButton)
  document.querySelector('main').appendChild(section)
}
