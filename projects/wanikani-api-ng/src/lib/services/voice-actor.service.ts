import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VoiceActorCollection } from '../models/voice-actor/voice-actor-collection.model';
import { VoiceActor } from '../models/voice-actor/voice-actor.model';
import { AllVoiceActorsParams } from '../models/voice-actor/all-voice-actors-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders } from '../constants';
import { publishReplay, refCount, take } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/voice_actors';

@Injectable()
export class VoiceActorService {

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all voice actors
   * @param page Optional page to get voice actors from
   * Return the voice actors collection as an observable
   */
  public getAllVoiceActors(params?: AllVoiceActorsParams, page?: string): Observable<VoiceActorCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    const key = `ALL_VOICE_ACTORS:${url}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<VoiceActorCollection>(url, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(vas => this.cache.set(key, vas));
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific voice actor by id
   * @param voiceActorId id of voice actor to retrieve
   * Return the voice actor as an observable
   */
  public getVoiceActor(voiceActorId: number): Observable<VoiceActor> {
    const key = `VOICE_ACTOR:${voiceActorId}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<VoiceActor>(`${baseUrl}/${voiceActorId}`, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(va => this.cache.set(key, va));
    }

    return this.cache.get(key);
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }
}
