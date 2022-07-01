export default async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = (hash, x) => {
    return document.querySelector(hash) ||
      new Promise((resolve) => {
        if (x > 50) {
          return resolve()
        }
        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
      })
  }

  if (to.hash) {
    const el = await findEl(to.hash)
    const offset = -100
    if ('scrollBehavior' in document.documentElement.style) {
      el.classList.add('selected-hash')
      setTimeout(() => { el.classList.remove('selected-hash') }, 4000)
      return window.scrollTo({
        top: (el.offsetTop + offset),
        behavior: 'smooth'
      })
    } else {
      return window.scrollTo(0, (el.offsetTop + offset))
    }
  }

  return { x: 0, y: 0 }
}
