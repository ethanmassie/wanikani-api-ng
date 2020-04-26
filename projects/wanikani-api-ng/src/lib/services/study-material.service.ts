import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudyMaterialCollection } from '../models/study-material/study-material-collection.model';
import { StudyMaterial } from '../models/study-material/study-material.model';
import { StudyMaterialData } from '../models/study-material/study-material-data.model';
import { Observable } from 'rxjs';
import { AllStudyMaterialsParams } from '../models/study-material/all-study-materials-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders, postHeaders, putHeaders } from '../constants';
import { publishReplay, refCount } from 'rxjs/operators';

const baseUrl = 'https://api.wanikani.com/v2/study_materials';

@Injectable()
export class StudyMaterialService { 

  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of study materials
   * @param params Optional query paramaters
   * @param page Optional next page in paginated response
   */
  public getAllStudyMaterials(params?: AllStudyMaterialsParams,page?: string): Observable<StudyMaterialCollection> {
    const url = !!page ? page: appendQueryToUrl(params, baseUrl);
    const key = `ALL_STUDY_MATERIALS:${url}`;

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<StudyMaterialCollection>(url, {headers: getHeaders}).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific study material
   * @param id Id of study material to get
   */
  public getStudyMaterial(id: number): Observable<StudyMaterial> {
    const key = `STUDY_MATERIAL:${id}`;

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<StudyMaterial>(`${baseUrl}/${id}`).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(key);
  }

  /**
   * Create a new study material
   * @param studyMaterialData Study material request data to be created
   */
  public createStudyMaterial(studyMaterialData: StudyMaterialData): Observable<StudyMaterial> {
    return this.http.post<StudyMaterial>(baseUrl, { 'study_material': studyMaterialData}, {headers: postHeaders});
  }

  /**
   * Update an existing study material
   * @param id Id of study material to update
   * @param studyMaterialData Study material request data for update
   */
  public updateStudyMaterial(id: number, studyMaterialData: StudyMaterialData): Observable<StudyMaterial> {
    return this.http.put<StudyMaterial>(`${baseUrl}/${id}`, {'study_material': studyMaterialData}, {headers: putHeaders});
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }
}
