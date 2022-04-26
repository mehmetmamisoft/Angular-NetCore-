import { responseModel } from './responseModel';
import { Product } from './product';

export interface ProductResponseModello extends responseModel {
  /*
  bana gelen datayı kariılayan model
  data success apiden nasıl geliyorsa öyle yazcez
  önce diğer interface çagır gelsun
  burayu ve categoryresponsemodeli silduk hacu abey!
  */
  data: Product[]

}
