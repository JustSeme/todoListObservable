import { Observable } from "../observable/observable";
import { useState, useEffect } from "react";

export function useObservable<T>(observable: Observable<T>): T {
    const [val, setVal] = useState(observable.get())

    useEffect(() => {
        setVal(observable.get())
        return observable.subscribe(setVal)
    }, [observable])

    return val
}