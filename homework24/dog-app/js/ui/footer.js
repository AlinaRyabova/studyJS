export class Footer {
  render() {
    return `
      <div class="footer-inner">
        <p>© ${new Date().getFullYear()} Dog App </p>
        <div style="font-size:13px;color:#ccc">Made with ❤️ • API: dog.ceo</div>
      </div>
    `;
  }
  mount(rootId = "site-footer") {
    document.getElementById(rootId).innerHTML = this.render();
  }
}
