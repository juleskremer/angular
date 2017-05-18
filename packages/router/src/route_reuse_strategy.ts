/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ComponentRef} from '@angular/core';

import {ActivatedRoute, ActivatedRouteSnapshot} from './router_state';
import {TreeNode} from './utils/tree';

/**
 * @whatItDoes Represents the detached route tree.
 *
 * This is an opaque value the router will give to a custom route reuse strategy
 * to store and retrieve later on.
 *
 * @experimental
 */
export type DetachedRouteHandle = {};

/** @internal */
export type DetachedRouteHandleInternal = {
  componentRef: ComponentRef<any>,
  route: TreeNode<ActivatedRoute>,
};

/**
 * @whatItDoes Provides a way to customize when activated routes get reused.
 *
 * @experimental
 */
export abstract class RouteReuseStrategy {
  /** Determines if this route (and its subtree) should be detached to be reused later */
  abstract shouldDetach(route: ActivatedRouteSnapshot): boolean;

  /** Stores the detached route */
  abstract store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle|null): void;

  /** Determines if this route (and its subtree) should be reattached */
  abstract shouldAttach(route: ActivatedRouteSnapshot): boolean;

  /** Retrieves the previously stored route */
  abstract retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null;

  /** Determines if a route should be reused */
  abstract shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}

/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
export class DefaultRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null { return null; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
