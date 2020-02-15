export interface Reset {
    id:               number;
    object:           'reset';
    url:              string;
    data_updated_at:  Date;
    data: {
        created_at:     Date;
        original_level: number;
        target_level:   number;
        confirmed_at:   Date;
    }
}