type Listenner<T> = (val: T) => void
type Unsubscriber = () => void

export class Observable<T> {
    //@ts-ignore
    private _listenners : Listenner<T>[] = []

    constructor(private _val: T) {}

    get(): T {
        return this._val
    }

    set(val: T) {
        if(this._val !== val) {
            this._val = val
            this._listenners.forEach(l => l(val))
        }
    }

    subscribe(listenner: Listenner<T>): Unsubscriber {
        this._listenners.push(listenner)
        return () => {
            this._listenners = this._listenners.filter(l => l !== listenner)
        }
    }
}