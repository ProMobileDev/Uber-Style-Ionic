import {Injectable} from "@angular/core";
import {DRIVERS} from "./mock-drivers";

@Injectable()
export class DriverService {
  private drivers:any;

  constructor() {
    this.drivers = DRIVERS;
  }

  getAll() {
    return this.drivers;
  }

  getItem(id) {
    for (var i = 0; i < this.drivers.length; i++) {
      if (this.drivers[i].id === parseInt(id)) {
        return this.drivers[i];
      }
    }
    return null;
  }

  remove(item) {
    this.drivers.splice(this.drivers.indexOf(item), 1);
  }
}