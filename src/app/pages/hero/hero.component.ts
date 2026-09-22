import {Component, signal} from '@angular/core'
import {UpperCasePipe} from '@angular/common'

@Component({
    templateUrl: './hero.component.html',
    imports: [UpperCasePipe]
})
export class HeroComponent{
    public name = signal("Ironman");
    public age = signal(45);

    getHeroDescription(){
        return `${ this.name() } - ${ this.age() }`;
    }
    changeHero(){
        this.name.set("Spider-Man");
        this.age.set(22);
    }
    changeAge(){
        this.age.set(60);
    }
    resetForm(){
        this.name.set("Ironman");
        this.age.set(45);
    }
}