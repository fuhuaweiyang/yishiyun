import React, {forwardRef, memo} from 'react';
import {StyleSheet} from 'react-native';

// 动画组件
import LottieView from 'lottie-react-native';

// 安卓原生下拉刷新
import SmartRefresh from './SmartRefresh';

// 安卓原生下拉刷新头部
import SmartRefreshHeader from './SmartRefreshHeader';

// types
import type {ScrollViewProps} from 'react-native';

type Props = {
  children?: ScrollViewProps;
  onRefresh: () => void;
};

// 下拉动画
const fruitsAnimation = require('../assets/bouncing-fruits.json');

// 下拉刷新头部高度
const HEADER_HEIGHT = 70;

const PullToRefresh = forwardRef((props: Props, forwardedRef: any) => {
  return (
    <SmartRefresh
      ref={forwardedRef}
      // 外部传入的事件监听器-> 用于监听下拉刷新组件是否刷新完成
      onRefresh={props.onRefresh}
      // FlatList 滚动列表
      children={props.children}
      // 该高度是必填项，因为我们需要设置下拉刷新头部的高度是多少
      headerHeight={HEADER_HEIGHT}
      // 渲染下拉刷新头部的方法
      renderHeader={
        // 安卓原生下拉刷新头部 -> 请看编写下拉刷新头部的代码
        <SmartRefreshHeader
          style={{
            ...styles.header,
            height: HEADER_HEIGHT,
          }}>
          <LottieView
            style={{
              height: HEADER_HEIGHT,
            }}
            source={fruitsAnimation}
            autoPlay
          />
        </SmartRefreshHeader>
      }
    />
  );
});

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A66F1',
  },
});

export default memo(PullToRefresh);

