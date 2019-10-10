import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export class ValidationService {

  static spaceValidator(control: AbstractControl) {
    const ControlValue = control.value ? control.value.trim() : null;
    if (ControlValue) {
      return null;
      // return  { 'invalidData': false };
    } else {
      return { 'invalidData': true };
    }
  }
}
