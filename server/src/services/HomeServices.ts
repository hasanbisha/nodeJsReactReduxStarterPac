import { Container, Service } from 'typedi';

@Service()
export class HomeServices {
    getTest() {
        return "From Service";
    }
}