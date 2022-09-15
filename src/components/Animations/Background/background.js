const $ = (s, n = document) => n.querySelector(s)
const istouch = 'ontouchstart' in window

const baseSpeed = 0.4

function Particle (canvas) {
this.canvas = canvas;
  this.r = null
  this.alpha = null
  this.x = null
  this.y = null
  this.dx = null
  this.dy = null
  this.ctx = canvas.getContext('2d')
  
  this.reset()
}

Particle.prototype.reset = function () {
  this.r = 2
  this.alpha = 0.2
  this.x = this._getRandom(this.r, this.canvas.width - this.r)
  this.y = this._getRandom(this.r, this.canvas.height - this.r)
  this.dx = +((Math.random() - 0.5) * baseSpeed).toFixed(2)
  this.dy = +((Math.random() - 0.5) * baseSpeed).toFixed(2)
  this.da = 0.8 / 100
}
Particle.prototype.update = function () {
  this.x += this.dx
  this.y += this.dy
  this.alpha += this.da
  
  
  if (this._is_out_of_bound('x')) {
    this.dx = -this.dx    
  }
  if (this._is_out_of_bound('y')) {
    this.dy = -this.dy
  }
  if (this._is_out_of_bound('alpha', 0.8, 0)) {
    this.da = 0
  }
  
  this.draw()
}
Particle.prototype.draw = function () {
  this.ctx.beginPath()
  this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
  this.ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`
  this.ctx.fill()
}
Particle.prototype._is_out_of_bound = function (type, max = 1, min = 0) {
  if (type === 'x') {
    return (this.x + this.r > this.canvas.width || this.x - this.r < 0)
  } else if (type === 'y') {
    return (this.y + this.r > this.canvas.height || this.y - this.r < 0)
  } else {
    return (this[type] > max || this[type] < min)
  }
}
Particle.prototype._getRandom = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Network (selector, option) {
  this.canvas = $(selector)
  this.ctx = this.canvas.getContext('2d')
  this.maxDist = option?.maxDist ?? 100
  this.dotNum = ~~(window.innerWidth / 8)
  this.interactDotNum = option?.clickNum ?? 5
  this.particles = null
  this.ticker = null
  this.timeout = null
  this.pointer = {
    type: 'pointer',
    x: 0,
    y: 0
  }
}
Network.prototype.init = function () {
  this.canvas.width = window.innerWidth
  this.canvas.height = window.innerHeight
  this.particles = Array.from({ length: this.dotNum }, () => new Particle(this.canvas))
  this.particles.push(this.pointer)
  this.ticker = window.requestAnimationFrame(this.animate.bind(this))
  window.addEventListener('resize', this.resizeHandler.bind(this))
  
  this.canvas.addEventListener(istouch ? 'touchstart' : 'mousedown', this.pointerdown.bind(this))
  if (!istouch) {
    this.canvas.addEventListener('mousemove', this.pointermove.bind(this))
  }
}
Network.prototype.animate = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  this.particles.forEach(el => {
    if ('update' in el) {
      el.update()
    }
  })
  
  for (let i = 0; i < this.particles.length; i++) {
    for (let j = i + 1; j < this.particles.length; j++) {
      const dist = Math.sqrt(
        Math.pow(this.particles[i].x - this.particles[j].x, 2) +
        Math.pow(this.particles[i].y - this.particles[j].y, 2)
      )
      const maxDist = (this.particles[i].type === 'pointer') || (this.particles[j].type === 'pointer') ? 150 : this.maxDist
      if (dist < maxDist) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.particles[i].x, this.particles[i].y)
        this.ctx.lineTo(this.particles[j].x, this.particles[j].y)
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${(maxDist - dist) / maxDist})`
        this.ctx.stroke()
      }
    }
  }
  this.ticker = window.requestAnimationFrame(this.animate.bind(this))
}
Network.prototype.pointermove = function (e) {
  this.pointer.x = e.clientX
  this.pointer.y = e.clientY
}
Network.prototype.pointerdown = function (e) {
  const ref = istouch ? e.touches[0] : e
  this.pointer.x = ref.x
  this.pointer.y = ref.y
  const outOfRange = this.particles.filter(el => {
    if (el.type === 'pointer') return false
    let range
    if (window.innerWidth > window.innerHeight) {
      range = window.innerHeight / 2
    } else {
      range = window.innerWidth / 2
    }
    return Math.sqrt(Math.pow(e.clientX - el.x, 2) + Math.pow(e.clientY - el.y, 2)) > range
  })
  outOfRange.sort(() => Math.random() - 0.5).slice(0, this.interactDotNum).forEach(el => {
    el.x = ref.clientX
    el.y = ref.clientY
  })
}
Network.prototype.resizeHandler = function () {
  window.cancelAnimationFrame(this.ticker)
  if (this.timeout) {
    clearTimeout(this.timeout)
    this.timeout = null
  }
  this.timeout = setTimeout(() => {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.ticker = window.requestAnimationFrame(this.animate.bind(this))
    this.timeout = null
  }, 1000)
}

const animation = new Network('#canvas', { maxDist: 100, clickNum: 5 })
console.log(animation)
animation.init()