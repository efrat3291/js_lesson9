let global_id = 0
const HtmlElement = function (type, textContent) {
    this.type = type;
    this.textContent = textContent;
    this.id = global_id++;
}
HtmlElement.prototype.render = function () {
   return `<${this.type}>${this.textContent}</${this.type}>`
}

function ImageElement(src, alt) {
    this.src = src;
    this.alt = alt;
    HtmlElement.call(this,"img",'')
}

ImageElement.prototype = Object.create(HtmlElement.prototype);
ImageElement.prototype.constructor = ImageElement;

ImageElement.prototype.render = function(){
    return `<img src = "${this.src}" alt="${this.alt}"/>`
}

function SelectElement(options) {
    this.options = options;
    HtmlElement.call(this,"select","")
}
SelectElement.prototype.render = function(){
    const optionsHtml = this.options.map(option => `<option value="${option}">${option}</option>`).join('');
    return `<select id="${this.id}">${optionsHtml}</select>`;
}

SelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlElement.prototype.constructor = HtmlElement;     

function createElements() {
    const caption = document.getElementById("caption1").value;
    const elementType = document.getElementById("element-type").value;
    const element = new HtmlElement(elementType, caption);
    document.body.innerHTML += element.render(); 
}

function createPicture() {
    const alt = document.getElementById("alt").value;
    const src = document.getElementById("src").value;
    const pic = new ImageElement(src, alt);
    document.body.innerHTML += pic.render(); 
}

function createSelect() {
    const lst = document.getElementById("lst").value.split(",");
    const sel = new SelectElement(lst);
    document.body.innerHTML += sel.render(); 
}