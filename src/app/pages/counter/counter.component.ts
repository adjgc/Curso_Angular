import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush //Zone.js
})
export class CounterComponent {
    public counter : number = 0;
    public counterSignal = signal(0);
    constructor(){
        setInterval(() => {
            this.counter += 1; //Usa Zone.js
            this.counterSignal.update(v => v + 1); //Es Zoneless
        }, 1000)
    }
    modifyBy(value: number){
        this.counter += value;
        this.counterSignal.update(current => current + value);
    }
    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}