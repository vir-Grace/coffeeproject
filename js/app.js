 const getElement = (selector) => {
 const element = document.querySelector(selector)

if (element) return element
 throw Error( `Please double check your class names, there is no ${selector} class`
)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
links.classList.toggle('show-links')
})

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear

// ---- codes above are from the existing file. below is the creation of new codes, by following the tutorial


const date = getElement('#date');
const currentYear = new Date().getFullYear()
date.textContent = currentYear