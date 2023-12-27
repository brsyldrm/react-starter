import axios from "axios";

export default class productService{

    getProducts(){
        return axios.get("https://dummyjson.com/products")
    }
    getByProductId(id) {
        return axios.get("https://dummyjson.com/products/"+id)
    }
}