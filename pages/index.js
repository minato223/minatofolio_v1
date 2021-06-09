import Head from 'next/head'
import { useEffect } from 'react'
import About from './about'
import Experiences from './experiences'
import Footer from './footer'
import Main from './main'
import Notices from './notices'
import Profile from './profile'
import Projects from './projects'
import Services from './services'
import Skills from './skills'
import '../services/constant'
export default function Home() {
  useEffect(()=>{
    let nav = document.querySelector('.nav__container')
let scrollButton = document.querySelector('.scroll')
scrollButton.addEventListener('click',()=>{window.screenY=0})
window.addEventListener('scroll',(e)=>{
  window.scrollY>50?nav.classList.add('visible'):nav.classList.remove('visible')
  window.scrollY>100?scrollButton.classList.add('visible'):scrollButton.classList.remove('visible')
})
const addSkillsLevel = ()=>{
    const compentences = document.querySelectorAll('.competence')
    if (compentences) {
        compentences.forEach(competence=>{
            const label = competence.dataset.label ?? "Lamine"
            const level = competence.dataset.level ?? 100
            const span1 = document.createElement('span')
            const span2 = document.createElement('span')
            const label_div = document.createElement('div')
            const line_div = document.createElement('div')
            const level_div = document.createElement('div')
            label_div.classList.add('label')
            line_div.classList.add('line')
            level_div.classList.add('level')
            span1.classList.add('label__title')
            span2.classList.add('label__subtitle')
            span1.innerHTML=label
            span2.innerHTML=level+"%"
            label_div.appendChild(span1)
            label_div.appendChild(span2)
            level_div.style.width=`${0}%`
            line_div.appendChild(level_div)
            competence.appendChild(label_div)
            competence.appendChild(line_div)
        })
    }
}
addSkillsLevel()
const ratio = .2
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

var observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if (entry.intersectionRatio>ratio) {
      if (entry.target===document.querySelector('[data-animated-width]').parentNode) {
        entry.target.querySelectorAll('[data-animated-width]').forEach(element=>{
          const level = element.dataset.level ?? 100
          element.querySelector('.level').style.width=`${level}%`
        })
      }
      let animatedElements = entry.target.querySelectorAll('[data-with-animation]')
      animatedElements.forEach(animatedElement=>{
        let delay = animatedElement.dataset.animationDelay * .6
        let animationType = animatedElement.dataset.animationType ?? "translate"
        animatedElement.style.transition = `${delay}s cubic-bezier(.5,0,0,1)`
        animatedElement.style.opacity=1
        if (animationType==="translate") {
          animatedElement.style.transform="translate(0px,0px)"
        }else if (animationType==="scale") {
          animatedElement.style.transform="scale(1)"
        }
      observer.unobserve(entry.target)
      })
    }
  })
}, options);

let animationComponents = document.querySelectorAll('[data-animation]')
animationComponents.forEach(component=>{
  component.querySelectorAll('[data-with-animation]').forEach(currentElement=>{
    let animationBegin = currentElement.dataset.animationBegin ?? "left"
    let animationType = currentElement.dataset.animationType ?? "translate"
    currentElement.style.opacity=0
    if (animationType==="translate") {
      currentElement.style.transform=getTranslateDirection(animationBegin)
    }else if (animationType==="scale") {
      currentElement.style.transform="scale(0)"
    }
  })
  observer.observe(component)
})
document.querySelector('.menu__button').addEventListener('click',()=>{
  let caneva = document.createElement('div')
  caneva.classList.add('caneva__shadow')
  let nav = document.querySelector('.nav__item')
  nav.classList.add('show')
  nav.querySelectorAll('li.nav__list__item').forEach(li=>{
    li.addEventListener('click',function(){
      removeMenuShadow()
    })
  })
  document.querySelector('.nav__bar').appendChild(caneva)
  document.querySelector('.caneva__shadow').addEventListener('click',removeMenuShadow)
})
function removeMenuShadow(){
  let caneva = document.querySelector('.caneva__shadow')
  if (caneva) {
    caneva.parentNode.removeChild(caneva)
  }
  document.querySelector('.nav__item').classList.remove('show')
}
function getTranslateDirection (type){
  const transform = 30
  const transformObject = [
    {
      key:"right",
      value:`translateX(${transform}px)`
    },
    {
      key:"left",
      value:`translateX(${-transform}px)`
    },
    {
      key:"top",
      value:`translateY(${-transform}px)`
    },
    {
      key:"bottom",
      value:`translateY(${transform}px)`
    },
  ]
  return transformObject.find(obj=>obj.key===type).value
}
window.onload=()=>{
  const {Caroussel,Particles} =require('../services')
  new Caroussel(document.querySelector('[data-caroussel]'),2)
  particlesJS.load('particles-js', 'particles.json', function() {});
  particlesJS('particles-js',
  data
  );
}
  },[])
  return (
    <>
      <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="images/picaso.svg" sizes="any" type="image/svg+xml"></link>
      <title>Minato</title>
      </Head>
      <a href="#" className="scroll"><i className="fa fa-arrow-circle-o-up"></i></a>
    <div className="nav__container">
      <nav className="nav__bar">
      <div className="nav__logo"><h3 className="logo__title">Minato</h3></div>
      <div className="nav__item">
        <ul className="nav__list">
          <a href="#profile"><li className="nav__list__item line" data-id="profile">Profil</li></a>
          <a href="#skills"><li className="nav__list__item line" data-id="skills">Compétences</li></a>
          <a href="#experiences"><li className="nav__list__item line" data-id="experiences">Expériences</li></a>
          <a href="#services"><li className="nav__list__item line" data-id="services">Services</li></a>
          <a href="#projects"><li className="nav__list__item " data-id="projects">Projets</li></a>
        </ul>
        <a href="mailto:id491112@gmail.com" className="contact__button">Me contacter</a>
      </div>
      <i className="fa fa-bars menu__button"></i>
  </nav></div>
  {<Main/>}
  {<Profile/>}
  {<Skills/>}
  {<Experiences/>}
  {<Services/>}
  {<About/>}
  {<Notices/>}
  {<Projects/>}
  {<Footer/>}
    </>
  )
}
