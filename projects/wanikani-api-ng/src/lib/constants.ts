import { HttpHeaders } from '@angular/common/http';

export const apiRevision = '20170710';

export const getHeaders = new HttpHeaders({
  'Wanikani-Revision': apiRevision,
});

export const postHeaders = new HttpHeaders({
  'Wanikani-Revision': apiRevision,
  'Content-Type': 'application/json; charset=utf-8',
});

export const putHeaders = new HttpHeaders({
  'Wanikani-Revision': apiRevision,
  'Content-Type': 'application/json; charset=utf-8',
});
