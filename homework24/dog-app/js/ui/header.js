// /js/ui/header.js
export class Header {
  constructor() {}
  render() {
    return `
      <div class="header-inner">
        <div class="brand">
          <span style="font-size:18px">🐶 Dog App</span>
          <small style="opacity:0.9;margin-left:6px"></small>
        </div>
        <nav class="nav">
          <a href="index.html">Головна</a>
          <a href="dogs.html">Собаки</a>
          <a href="about.html">Про сайт</a>
        </nav>
      </div>
    `;
  }
  mount(rootId = "site-header") {
    document.getElementById(rootId).innerHTML = this.render();
  }
}
