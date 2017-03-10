/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, Directive, Inject, Input} from '@angular/core';
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {By} from '@angular/platform-browser/src/dom/debug/by';
import {expect} from '@angular/platform-browser/testing/src/matchers';

export function main() {
  describe('integration tests', () => {
    let fixture: ComponentFixture<TestComponent>;


    describe('directives', () => {
      it('should support dotted selectors', async(() => {
           @Directive({selector: '[dot.name]'})
           class MyDir {
             @Input('dot.name') value: string;
           }

           TestBed.configureTestingModule({
             declarations: [
               MyDir,
               TestComponent,
             ],
           });

           const template = `<div [dot.name]="'foo'"></div>`;
           fixture = createTestComponent(template);
           fixture.detectChanges();
           const myDir = fixture.debugElement.query(By.directive(MyDir)).injector.get(MyDir);
           expect(myDir.value).toEqual('foo');
         }));
    });

    it('should not throw when Symbol is used as DI token', async(() => {
         const SOME_SYMBOL = Symbol('Symbol');
         const ANOTHER_SYMBOL = Symbol('Symbol');

         @Component({selector: 'symbol', template: ''})
         class CmpWithSymbol {
           constructor(
               @Inject(SOME_SYMBOL) public symbol: string,
               @Inject(ANOTHER_SYMBOL) public anotherSymbol: string) {}
         }

         TestBed.configureTestingModule({
           declarations: [CmpWithSymbol],
           providers: [
             {provide: SOME_SYMBOL, useValue: 'value'},
             {provide: SOME_SYMBOL, useValue: 'override'},
             {provide: ANOTHER_SYMBOL, useValue: 'another value'}
           ]
         });

         const fixture = TestBed.createComponent(CmpWithSymbol);
         fixture.detectChanges();
         expect(fixture.componentInstance.symbol).toEqual('override');
         expect(fixture.componentInstance.anotherSymbol).toEqual('another value');
       }));
  });
}

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
      .createComponent(TestComponent);
}
