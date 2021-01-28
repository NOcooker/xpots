
function download(url: string) {
  let a: HTMLAnchorElement | null = document.createElement('a')
  a.href = url
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  a = null
}

export default download;