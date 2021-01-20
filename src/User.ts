import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  color: string = 'red';
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = this.generateName();
    this.location = this.generateCoordinates();
  }

  private generateName(): string {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  }

  private generateCoordinates(): { lat: number; lng: number } {
    const lat = parseFloat(faker.address.latitude());
    const lng = parseFloat(faker.address.longitude());
    return { lat, lng };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}