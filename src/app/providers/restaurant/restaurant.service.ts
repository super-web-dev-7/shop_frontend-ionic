import {Injectable} from '@angular/core';
import restaurants from './mock-restaurants';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    favoriteCounter = 0;
    favorites: Array<any> = [];
    restaurants: Array<any> = restaurants;

    findAll() {
        return Promise.resolve(restaurants);
    }

    getRestaurants() {
        return this.restaurants;
    }

    findById(id) {
        return Promise.resolve(restaurants[id - 1]);
    }

    getItem(id) {
        for (let i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].id === parseInt(id)) {
                return this.restaurants[i];
            }
        }
        return null;
    }

    findByName(searchKey: string) {
        const key: string = searchKey.toUpperCase();
        return Promise.resolve(restaurants.filter((restaurant: any) =>
            (restaurant.title + ' ' + restaurant.address + ' ' + restaurant.city + ' ' +
                restaurant.description).toUpperCase().indexOf(key) > -1));
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    favorite(restaurant) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({id: this.favoriteCounter, restaurant: restaurant});
        return Promise.resolve();
    }

    unfavorite(favorite) {
        const index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}
