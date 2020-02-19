import { SummaryData } from './summary-data.model';

export interface Summary {
    object:             'report';
    url:                string;
    data_updated_at:    Date;
    data:               SummaryData;
}