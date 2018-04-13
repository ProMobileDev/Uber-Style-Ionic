import {Injectable} from "@angular/core";
import {PLACES} from "./mock-places";

@Injectable()
export class PlaceService {
  private places:any;

  constructor() {
    this.places = PLACES;
  }

  getAll() {
    return this.places;
  }

  getItem(id) {
    for (var i = 0; i < this.places.length; i++) {
      if (this.places[i].id === parseInt(id)) {
        return this.places[i];
      }
    }
    return null;
  }

  remove(item) {
    this.places.splice(this.places.indexOf(item), 1);
  }
}