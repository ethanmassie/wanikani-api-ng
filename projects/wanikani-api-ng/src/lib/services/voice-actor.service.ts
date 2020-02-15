import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VoiceActorCollection } from '../models/voice-actor/voice-actor-collection.model';
import { VoiceActor } from '../models/voice-actor/voice-actor.model';

@Injectable()
export class VoiceActorService {

  public baseUrl = 'https://api.wanikani.com/v2/voice_actors'
  public apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all voice actors
   * @param page Optional page to get voice actors from
   * Return the voice actors collection as an observable
   */
  public getAllVoiceActors(page?: string): Observable<VoiceActorCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<VoiceActorCollection>(`${url}`,
      { headers: this.getHeaders }
    );
  }

  /**
   * Get a specific voice actor by id
   * @param voiceActorId id of voice actor to retrieve
   * Return the voice actor as an observable
   */
  public getVoiceActor(voiceActorId: number): Observable<VoiceActor> {
    return this.http.get<VoiceActor>(`${this.baseUrl}/${voiceActorId}`,
      { headers: this.getHeaders }
    );
  }


}
