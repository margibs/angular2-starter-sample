/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BootstrapPanelComponent } from './bootstrap-panel.component';

describe('Component: BootstrapPanel', () => {
  it('should create an instance', () => {
    let component = new BootstrapPanelComponent();
    expect(component).toBeTruthy();
  });
});
