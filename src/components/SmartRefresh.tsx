import React, {forwardRef, memo} from 'react';

import {ScrollViewProps, View} from 'react-native';

type Props = {
  children?: ScrollViewProps;
  headerHeight: number;
  renderHeader: object;
  onRefresh: () => void;
};

const SmartRefresh = forwardRef((props: Props, forwardedRef: any) => {
  return (
    <View ref={forwardedRef}>
      {/* 下拉头部  */}
      {props.renderHeader}
      {/* 滚动列表 */}
      {props.children}
    </View>
  );
});

export default memo(SmartRefresh);
