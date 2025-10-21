export class DogAPI {
  constructor() {
    this.baseUrl = "https://dog.ceo/api";
  }

  async getRandomDogs(count = 8) {
    const res = await fetch(`${this.baseUrl}/breeds/image/random/${count}`);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    return data.message;
  }
  async getRandomImages(count = 8) {
    return this.getRandomDogs(count);
  }
  async listBreeds() {
    const res = await fetch(`${this.baseUrl}/breeds/list/all`);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    return data.message;
  }

  async getByBreed(breed) {
    const res = await fetch(`${this.baseUrl}/breed/${breed}/images/random`);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    return data.message;
  }
}
