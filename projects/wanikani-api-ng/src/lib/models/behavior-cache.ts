import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { filter } from 'rxjs/operators';

export class BehaviorCache {
  cacheMap = new Map<string, BehaviorSubject<any>>();

  set(key: string, value: any) {
    if(!this.cacheMap.has(key)) {
      this.cacheMap.set(key, new BehaviorSubject(value));
    } else {
      this.cacheMap.get(key).next(value);
    }
  }

  get(key: string): Observable<any> {
    if(!this.cacheMap.has(key))
      this.cacheMap.set(key, new BehaviorSubject(undefined));
    
    return this.cacheMap.get(key).asObservable().pipe(filter(v => !!v));
  }

  isDefined(key: string): boolean {
    return this.cacheMap.has(key) && !!this.cacheMap.get(key).getValue();
  }

  clear() {
    for(let key of this.cacheMap.keys()) {
      this.cacheMap.get(key).complete();
      this.cacheMap.delete(key);
    }
  }
}