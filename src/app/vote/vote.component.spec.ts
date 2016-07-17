/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('Component: Vote', () => {
  it('should create an instance', () => {
    let component = new VoteComponent();
    expect(component).toBeTruthy();
  });
});
