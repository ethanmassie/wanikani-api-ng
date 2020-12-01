import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { AllVoiceActorsParams } from '../models/voice-actor/all-voice-actors-params.model';
import { VoiceActorCollection } from '../models/voice-actor/voice-actor-collection.model';
import { VoiceActor } from '../models/voice-actor/voice-actor.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/voice_actors';

@Injectable()
export class VoiceActorService {
  constructor(private http: HttpClient) {}

  /**
   * Get a collection of all voice actors
   * @param pageUrl Optional page to get voice actors from
   * Return the voice actors collection as an observable
   */
  public getAllVoiceActors(
    params?: AllVoiceActorsParams,
    pageUrl?: string
  ): Observable<VoiceActorCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<VoiceActorCollection>(url, { headers: getHeaders });
  }

  /**
   * Get a specific voice actor by id
   * @param voiceActorId id of voice actor to retrieve
   * Return the voice actor as an observable
   */
  public getVoiceActor(voiceActorId: number): Observable<VoiceActor> {
    return this.http.get<VoiceActor>(`${baseUrl}/${voiceActorId}`, {
      headers: getHeaders,
    });
  }
}
