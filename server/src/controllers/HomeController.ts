import { JsonController, Get } from 'routing-controllers';
import { HomeServices } from '../services/HomeServices';

@JsonController()
export class HomeController {
    constructor(
        private homeService: HomeServices
    ) {

    }

    @Get('/')
    home() {
        const response = this.homeService.getTest();
        return response + ' and controller';
    }
}