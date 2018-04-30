# Is Angular Ivy Ready
https://is-angular-ivy-ready.firebaseapp.com/
## What is Ivy
`Ivy` is the new Angular renderer focused on speed and size reduction. It is published as an experimental API as of Angular 6.
As of April 30th 2018, Ivy is under active development by the Angular team.

## What is Is Angular Ivy Ready
A responsive Angular web application that tracks the progress on Ivy implementation. It provides granular statistics and an overall status information.

## Backend service
The following api is used: https://ivy-status-api.appspot.com/v1/status  
It has been developed in a separate github golang [project](https://github.com/benbraou/ivy-status-api) .  
Further information can be found in the project [repository]  
Basically, it just parses [STATUS.md](https://github.com/angular/angular/blob/master/packages/core/src/render3/STATUS.md) that is regularly updated by the Angular team when there is progress on Ivy.

## What does it look like
### Desktop
![Desktop Start](/screenshots/desktop/desktop-start.png?raw=true "Desktop Start")
![Desktop Middle](/screenshots/desktop/desktop-middle.png?raw=true "Desktop Middle")
### Tablet
![Tablet Start](/screenshots/tablet/tablet-start.png?raw=true "Tablet Start")
![Tablet Middle](/screenshots/tablet/tablet-middle.png?raw=true "Tablet Middle")
### Mobile
![Phone Start](/screenshots/mobile/mobile-start.png?raw=true "Phone Start")
![Phone Middle](/screenshots/mobile/mobile-middle.png?raw=true "Phone Middle")

## Support and contributing 
Please feel free to open [an issue](https://github.com/benbraou/is-angular-ivy-ready/issues?state=open).  
Pull requests with the fix and a test are welcome.  
To set up your local development environment, clone/fork and then run `yarn install`.  
To launch tets `yarn test` or `yarn test:no-sourcemaps`  
To launch the server `yarn start`.  
