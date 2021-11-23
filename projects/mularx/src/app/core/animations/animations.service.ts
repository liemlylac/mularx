import { Injectable } from '@angular/core';

export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  private static routeAnimationType: RouteAnimationType = 'NONE';

  constructor() {
    AnimationsService.routeAnimationType = 'NONE';
  }

  static isRouteAnimationsType(type: RouteAnimationType) {
    return AnimationsService.routeAnimationType === type;
  }

  updateRouteAnimationType(pageAnimations: boolean, elementsAnimations: boolean) {
    let type: RouteAnimationType = 'NONE';
    if (pageAnimations && elementsAnimations) {
      type = 'ALL';
    } else if (pageAnimations) {
      type = 'PAGE';
    } else if (elementsAnimations) {
      type = 'ELEMENTS';
    }
    AnimationsService.routeAnimationType = type
  }
}
