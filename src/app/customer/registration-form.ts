import { address } from './addres';

export class Registration{
    constructor(public firstName?: string,
                public lastName?: string,
                public contact?: string,
                public email?: string,
                public password?: string,
                public addresses?:address ){
                addresses=new address();

               

     }
}

