import axios from "axios";
import { ProductType } from "../Type";

const api = axios.create({
    baseURL: "http://localhost:5173/data"
})

export function fetchData(endpoint: string): Promise<ProductType[]> {

    return api.get(endpoint)
        .then(response => response.data);
}