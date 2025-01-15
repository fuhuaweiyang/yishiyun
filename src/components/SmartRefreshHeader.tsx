import React, {type PropsWithChildren} from 'react';
import {requireNativeComponent} from 'react-native';

// 引入安卓原生下拉头部
export const SmartRefreshHeader = ('SmartRefreshHeader');

const _SmartRefreshHeader: React.FC<
  PropsWithChildren<{
    style: object;
  }>
> = props => {
  return <SmartRefreshHeader {...props} />;
};

export default _SmartRefreshHeader;
