import {Component,Injectable} from '@angular/core';
import {UserApi as UserService} from './lb-services';

@Component({
    selector: 'my-login',
    providers: [UserService],
    templateUrl: 'app/login.component.html'
})

@Injectable()
export class LoginComponent {

    private login: string;
    private password: string;

    constructor(protected user: UserService) {}

    onLogin() {
        let self = this;
        // Example 1
        this.user.login({
            username: self.login,
            password: self.password
        })
            .subscribe(res => {
                // some actions on login
                this.user.getCurrent()
                    .subscribe(function(response: any) {
                        console.log(response);
                    });
            });
    }

    onLogout() {
        // Example 2
        this.user.logout().subscribe(() => {
            // some actions on logout
        });
    }

    public getData() {
        // Example 3
        this.user.count().subscribe((response: any) => {
            let lastRow = response.count;

            let data = this.user
            // Example 4
                .find({
                    offset: 0,
                    limit: 100
                })
                .subscribe(function(response: any) {
                    // Process response
                    console.log(response);
                });
        });
    }
}