/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Constants from '../common/constants/Constants';
import ConversionItem from './ConversionItem';

class ConversionViewModel {
  /**
   * Get conversion list data on the left.
   *
   * @return {Array<ConversionItem>} conversionItems
   */
  getConversionList() {
    let conversionItems = CONVERSION_LIST;
    return conversionItems;
  }
}

export const CONVERSION_LIST: ConversionItem[] = [
  new ConversionItem('vp > px', `vp2px(${Constants.VP_SIZE})`, vp2px(Constants.VP_SIZE), 'px > vp',`px2vp(${Constants.VP_SIZE})`, px2vp(Constants.VP_SIZE)),
  new ConversionItem('fp > px',`fp2px(${Constants.VP_SIZE})`,fp2px(Constants.VP_SIZE),'px > fp',`px2fp(${Constants.VP_SIZE})`,px2fp(Constants.VP_SIZE)),
  new ConversionItem('lpx > px',`lpx2px(${Constants.VP_SIZE})`,lpx2px(Constants.VP_SIZE),'px > lpx',`px2lpx(${Constants.VP_SIZE})`,px2lpx(Constants.VP_SIZE),$r('app.string.notice'))
]

let conversionViewModel = new ConversionViewModel();

export default conversionViewModel as ConversionViewModel;