import { responseModel } from './responseModel';
import { Product } from './product';

export interface ProductResponseModel extends responseModel {
  /*
  bana gelen datayı kariılayan model
  data success apiden nasıl geliyorsa öyle yazcez
  önce diğer interface çagır gelsun

  */
  data: Product[]

}
