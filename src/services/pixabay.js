import axios from 'axios';

export default class PixabayFetchObj{
    constructor() {
        this.base_url = `https://pixabay.com/api/`;
        this.api_key = `21301375-7d22153b76338a293f3dc129f`;
        this._name = '';
        this._page = 1;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }

     get page() {
        return this._page;
    }
    set page(value) {
        return this._page = value;
    }
    // создаем метод
    searchPhotos() {
        axios.defaults.baseURL = this.base_url;
       
        let url = `?key=${this.api_key}&q=${this.name}&page=${this.page}&per_page=12&image_type=photo&orientation=horizontalv`;
        console.log(this.page, this.name);
        return axios
            .get(url)
            .then((resalt) => {
                return resalt.data;
            })
            .then((data) => {
                return data.hits;
            })
            .catch((error) => { console.log(error) });
    }
}