export default class Caroussel{
  /**
   * @param {HTMLElement} element
   */
  constructor(element,visible,step){
    this.element = element
    this.currentItem = 0
    this.isMobile = document.documentElement.clientWidth<=720
    this.visible = visible??2
    this.step = step ?? 1
    this.childrens = this.element.children
    this.childrenLenght = this.childrens.length
    this.container = this.createComponentWithClass('div','caroussel__container')
    let nextButton = this.createComponentWithClass('i','fa','fa-arrow-circle-right','step__button','next')
    let prevButton = this.createComponentWithClass('i','fa','fa-arrow-circle-left','step__button','prev')
    nextButton.addEventListener('click',this.next.bind(this))
    prevButton.addEventListener('click',this.prev.bind(this))
    this.items = Array.from(this.childrens).map(child=>{
      let carousselItem = this.createComponentWithClass('div','caroussel__item')
      carousselItem.appendChild(child)
      this.container.appendChild(carousselItem)
      return carousselItem
    })
    this.setStyle()
    this.element.appendChild(this.container)
    this.element.appendChild(nextButton)
    this.element.appendChild(prevButton)
    window.addEventListener('resize',this.resizeWindow.bind(this))
  }
  resizeWindow(){
    this.isMobile = document.documentElement.clientWidth<=720
    this.setStyle()
  }
  setStyle(){
    let ratio = this.childrenLenght/this.slideVisible
    console.log(ratio);
    this.container.style.width=`${ratio*100}%`
    this.items.forEach(item=>{
      item.style.width=`${(100/this.slideVisible)/ratio}%`
    })
  }
  get slideVisible(){
    return this.isMobile?1:this.visible
  }
  get slideStep(){
    return this.isMobile?1:this.step
  }
  next(){
    this.goToItem(this.currentItem+this.slideStep)
  }
  prev(){
    this.goToItem(this.currentItem-this.slideStep)
  }
  goToItem(index){
    if (index<0) {
      index=this.childrenLenght-this.slideVisible
    }else if (index>=this.childrenLenght || (this.items[this.currentItem+this.slideVisible]===undefined && this.currentItem<index)) {
      index=0
    }
    let translate = -100*index/this.childrenLenght
    this.currentItem=index
    this.container.style.transform=`translate3d(${translate}%,0,0)`
  }
  /**
   * 
   * @param {string} tag 
   * @param  {...string} className 
   * @returns {HTMLElement}
   */
  createComponentWithClass(tag,...className){
    let element = document.createElement(tag)
    if (className.length>0) {
      className.forEach(name=>element.classList.add(name))
    }
    return element
  }
}