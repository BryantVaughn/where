import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = this.generateCompanyName();
    this.catchPhrase = this.generateCatchPhrase();
    this.location = this.generateCoordinates();
  }

  private generateCompanyName(): string {
    return faker.company.companyName();
  }

  private generateCatchPhrase(): string {
    return faker.company.catchPhrase();
  }

  private generateCoordinates(): { lat: number; lng: number; } {
    const lat = parseFloat(faker.address.latitude());
    const lng = parseFloat(faker.address.longitude());
    return { lat, lng };
  }

  markerContent(): string {
    return `${this.companyName} - ${this.catchPhrase}`;
  }
}