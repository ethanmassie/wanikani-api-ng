import { ImageType } from '../../enums/image-type.enum';

//look into what is returned for this object
export interface CharacterImage{
  url:          string;
  content_type: ImageType;
  metadata:     Object; //contents of metadata dependent on content_type
}