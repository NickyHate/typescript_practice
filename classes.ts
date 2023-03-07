class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}
// Записи Car и Car1 идентичны
class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

class Car1 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// Модификаторы Protected, Public, Private
// default всегда Public

class Animal {
    protected voice: string = '' // Доступен в классе Animal и во всех наследуемых от него классах,
                                 // но не в инстансах наследуемого класса
    public color: string = 'black'

    private go() { // Доступны только в том классе, в котором были определены
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice // Имеем доступ до voice
    }
}

const cat = new Cat()
// cat.voice - не доступен, так как это инстанс наследуемого класса

// Абстрактные классы и методы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info'
    }
}
