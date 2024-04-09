import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get('/asdf')
    getRootRoute() {
        return 'Hi There!';
    }

    @Get('/bye')
    getByThere() {
        return 'Bye There, See you soon :)'
    }
}