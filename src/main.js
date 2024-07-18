import '../styles/style.css'
import '../styles/utils.css'
import '../src/components/hero/hero.css'
import { headerCreate } from './components/header/header.js'
import { createHero } from './components/hero/hero.js'
import { createAboutSection } from './components/about/about.js'
import { createWorkSection } from './components/work/work.js'
import { createContactSection } from './components/contact/contact.js'
import { createFooter } from './components/footer/footer.js'
import {
  createEducationContent,
  createExperienceContent
} from './components/studies/studies.js'

headerCreate()
createHero()
createAboutSection()

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')

  const workSection = createWorkSection()
  main.appendChild(workSection)

  createEducationContent()
  createExperienceContent()
  const educationButton = document.getElementById('education-button')
  const experienceButton = document.getElementById('experience-button')
  const educationSection = document.getElementById('education-section')
  const experienceSection = document.getElementById('experience-section')
  educationButton.addEventListener('click', () => {
    educationSection.style.display = 'block'
    experienceSection.style.display = 'none'
  })

  experienceButton.addEventListener('click', () => {
    educationSection.style.display = 'none'
    experienceSection.style.display = 'block'
  })

  const contactSection = createContactSection()
  main.appendChild(contactSection)
})

createFooter()
