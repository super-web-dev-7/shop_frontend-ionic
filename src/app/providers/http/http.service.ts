import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UrlJSON} from '../../utils/UrlJson';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient) {
    }

    getCountry() {
        return this.http.get(`${UrlJSON.getCountry}`);
    }

    getAllUsers() {
        return this.http.get(`${UrlJSON.getAllUsers}`);
    }

    getUser(id) {
        return this.http.get(`${UrlJSON.userUrl}/getUser/${id}`)
    }

    addUser(user) {
        return this.http.post(`${UrlJSON.userUrl}/addUser`, user)
    }

    editUser(user) {
        return this.http.put(`${UrlJSON.userUrl}/editUser/${user._id}`, user);
    }

    deleteUser(id) {
        return this.http.delete(`${UrlJSON.userUrl}/deleteUser/${id}`);
    }

    getAllLanguages() {
        return this.http.get(`${UrlJSON.languageUrl}/getAllLanguages`);
    }

    addLanguage(data) {
        return this.http.post(`${UrlJSON.languageUrl}/addLanguage`, data);
    }

    deleteLanguage(id) {
        return this.http.delete(`${UrlJSON.languageUrl}/deleteLanguage/${id}`);
    }

    editLanguage(data) {
        return this.http.put(`${UrlJSON.languageUrl}/editLanguage/${data._id}`, data);
    }

    addCountry(data) {
        return this.http.post(`${UrlJSON.countryUrl}/addCountry`, data);
    }

    deleteCountry(id) {
        return this.http.delete(`${UrlJSON.countryUrl}/deleteCountry/${id}`);
    }

    editCountry(data) {
        return this.http.put(`${UrlJSON.countryUrl}/editCountry/${data._id}`, data);
    }

    addShop(data) {
        return this.http.post(`${UrlJSON.shopUrl}/addShop`, data);
    }

    getAllShops() {
        return this.http.get(`${UrlJSON.shopUrl}/getAllShops`);
    }

    deleteShop(id) {
        return this.http.delete(`${UrlJSON.shopUrl}/deleteShop/${id}`);
    }

    editShop(data) {
        return this.http.put(`${UrlJSON.shopUrl}/editShop/${data._id}`, data);
    }

    addProfile(data) {
        return this.http.post(`${UrlJSON.profileUrl}/addProfile`, data);
    }

    getAllProfiles() {
        return this.http.get(`${UrlJSON.profileUrl}/getAllProfiles`);
    }

    deleteProfile(id) {
        return this.http.delete(`${UrlJSON.profileUrl}/deleteProfile/${id}`);
    }

    editProfile(data) {
        return this.http.put(`${UrlJSON.profileUrl}/editProfile/${data._id}`, data);
    }

    getAssign() {
        return this.http.get(`${UrlJSON.assignUrl}/get`);
    }

    updateAssign(data) {
        return this.http.put(`${UrlJSON.assignUrl}/update/${data._id}`, data);
    }

    //Shop Admin

    getUsersForShopAdmin(id) {
        return this.http.get(`${UrlJSON.userUrl}/getUsersForShopAdmin/${id}`);
    }

    addShopAdmin(data) {
        return this.http.post(`${UrlJSON.userUrl}/addShopAdmin`, data);
    }

    getProfilesForShopAdmin(shopId) {
        return this.http.get(`${UrlJSON.profileUrl}/getProfilesForShopAdmin/${shopId}`);
    }

    assignToProfile(data) {
        return this.http.put(`${UrlJSON.profileUrl}/assignToProfile/${data._id}`, data);
    }
}
