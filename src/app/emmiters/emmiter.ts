import {  EventEmitter } from '@angular/core'

export class Emitter{
     static authEmiter = new EventEmitter<boolean>()
}