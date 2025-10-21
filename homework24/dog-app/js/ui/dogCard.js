export class DogCard {
  constructor(imageUrl) {
    this.image = imageUrl;
  }
  render() {
    const parts = this.image.split("/");
    const name = parts.slice(-2, -1)[0].replace("-", " ");
    return `
      <article class="dog-card">
        <img loading="lazy" src="${this.image}" alt="dog ${name}">
        <div class="meta">
          <div><strong>Порода (прибл.):</strong> ${name}</div>
          <div style="margin-top:8px"><a class="btn" href="${this.image}" target="_blank" rel="noopener">Відкрити фото</a></div>
        </div>
      </article>
    `;
  }
}
