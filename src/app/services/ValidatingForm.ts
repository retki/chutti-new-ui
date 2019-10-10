import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

export class ValidatingForm {

  protected form : FormGroup;
  protected controls;

  public constructor() {

  }

  /**
   * If local storage reloads the form sometimes form.valid is not
   *  correct...
   */
  public partiallyRevalidate() {
    this.form.updateValueAndValidity();
  }

  public forceRevalidate() {
    for (const control in this.form.controls) {
      this.form.get(control).markAsDirty();
      this.form.get(control).markAsTouched();
      this.form.get(control).updateValueAndValidity();
    }
    this.form.updateValueAndValidity();
  }

  public onSubmit(form:FormGroup) : Boolean {
    this.form=form;
    this.forceRevalidate();
    return this.form.valid;
  }

  public isFormValid() {
    return this.form.valid;
  }

}