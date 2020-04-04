import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudyMaterialCollection } from '../models/study-material/study-material-collection.model';
import { StudyMaterial } from '../models/study-material/study-material.model';
import { StudyMaterialData } from '../models/study-material/study-material-data.model';
import { Observable } from 'rxjs';
import { AllStudyMaterialsParams } from '../models/study-material/all-study-materials-params.model';
import { appendQueryToUrl } from '../util/query-param';

@Injectable()
export class StudyMaterialsService {

  public baseUrl = 'https://api.wanikani.com/v2/study_materials';
  public apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  private postHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision,
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: HttpClient) { }

  /**
   * // TODO: Add other study material specific query parameters (hidden, ids, subject_ids, subject_types, updated_after)
   * Get a collection of study materials
   * @param page Optional next page in paginated response
   */
  public getAllStudyMaterials(params?: AllStudyMaterialsParams,page?: string): Observable<StudyMaterialCollection> {
    const url = !!page ? page: appendQueryToUrl(params, this.baseUrl);
    return this.http.get<StudyMaterialCollection>(`${url}`, {headers: this.getHeaders});
  }

  /**
   * Get a specific study material
   * @param id Id of study material to get
   */
  public getStudyMaterial(id: number): Observable<StudyMaterial> {
    return this.http.get<StudyMaterial>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new study material
   * @param studyMaterialData Study material request data to be created
   */
  public createStudyMaterial(studyMaterialData: StudyMaterialData): Observable<StudyMaterial> {
    return this.http.post<StudyMaterial>(`${this.baseUrl}`, 
      { 'study_material': studyMaterialData}, 
      {headers: this.postHeaders});
  }

  /**
   * Update an existing study material
   * @param id Id of study material to update
   * @param studyMaterialData Study material request data for update
   */
  public updateStudyMaterial(id: number, studyMaterialData: StudyMaterialData): Observable<StudyMaterial> {
    return this.http.put<StudyMaterial>(`${this.baseUrl}/${id}`, 
      {'study_material': studyMaterialData}, 
      {headers: this.postHeaders});
  }

}
