import '../footer/footer.css'
export function createFooter() {
  const footer = document.createElement('footer')
  footer.classList.add('footer', 'container', 'section')

  footer.innerHTML = `
        <h3 class="footer__title">~ Jiashun ~</h3>
    `

  document.querySelector('#app').appendChild(footer)
}
