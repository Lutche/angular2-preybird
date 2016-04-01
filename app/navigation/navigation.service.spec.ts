import { Navigation } from "app/navigation/navigation";
import { NavigationComponent } from 'app/navigation/navigation.component';
import { NavigationService } from "app/navigation/navigation.service";
import * as mocks from 'app/navigation/navigation.mocks'

describe('Given that I have an Navigationservice', () => {
    let service: NavigationService;
    let promise: Promise<any>;
    let result: any;

    describe('When I call getNavigationItems', () => {
        beforeEach(() => {
            service = new NavigationService();
            promise = service.getNavigationItems();
            promise.then((navigation) => {
                    result = navigation;
                }
            );
        });

        it('Then it must return a promise', () => expect(promise).toEqual(jasmine.any(Promise)));
        // TODO: Mock backend
        it('Then the promise must return a Navigation object', () => expect(result[0].name).toBe("Home"));
    });

    describe('When I call getNavigationItem with "Home"', () => {
        beforeEach(() => {
            promise = service.getNavigationItem("Home");
        });

        it('Then it must return a promise', () => expect(promise).toEqual(jasmine.any(Promise)));
    });

    describe('When I call setNavigationItem with the /test route', () => {
        beforeEach(() => {
            service.setNavigationItem(mocks.mockRoutes[0]);
        });

        it('Then the service must return the selected route', () => expect(service.getRoute().name).toBe("Test"));
    });
});