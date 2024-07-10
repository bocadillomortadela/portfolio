import '../styles/style.css'
import '../styles/utils.css'
import '../src/components/hero/hero.css'
import { headerCreate } from './components/header/header.js'
import { createHero } from './components/hero/hero.js'
import { createAboutSection } from './components/about/about.js'
import { createWorkSection } from './components/work/work.js'
import { createContactSection } from './components/contact/contact.js'
import { createFooter } from './components/footer/footer.js'

headerCreate()
createHero()
createAboutSection()
createWorkSection()
createContactSection()
createFooter()
