import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
    providedIn:'root'
})
export class UserService{
    user:User={
        
            id:'1',
            userName:'Janith',
            fname:'Janith',
            Lname:'Herath',
            Description:'I am a fresh graduate',
            Position:'Software Engineer',
            Aboutme: 'ABC',
            ContactNumber:['124235'],
            Address: {
                no: '18/04A',
                street:'lewallagama',
                city: 'Kandy'
            },
            Email: 'janithHerath@gmail.com'
         
        
        }
    constructor(){

    }
    getUser(id: string):User{
        return this.user;
    }
    updateUser(user:User): User{
        this.user=user;
        return user;
    }
}