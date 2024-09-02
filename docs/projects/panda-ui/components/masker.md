---
title: Masker
lang: zh-CN
description: 遮罩层组件
---

# Masker

一个普通的遮罩层

## 基础用法

:::demo

masker/basic

:::

## Masker 参数

| 名称             | 说明                                                             | 类型      | 默认值    | 始于      |
| ---------------- | ---------------------------------------------------------------- | --------- | --------- | --------- |
| reverse          | 反转遮罩层的颜色                                                 | `boolean` | `false`   | `v1.7.11` |
| active           | modal 是否展示                                                   | `boolean` | `false`   | -         |
| inner            | 设置是否为一个内联的模态框，开启后定位从 `fixed` 变位 `absolute` | `boolean` | `false`   | -         |
| transfer         | 设置模态框的渲染位置，设置为 true 时默认渲染至 `<body>`          | `string`  | `null`    | -         |
| closable         | 是否可以关闭                                                     | `string`  | `30vh`    | -         |
| mask-close       | 是否可以点击遮罩层关闭                                           | `boolean` | `true`    | `v1.12.1` |
| reverse-backdrop | 反转遮罩层的颜色                                                 | `boolean` | `false`   | `v1.7.11` |
| transitionName   | 模态框的 transiton 名称，可用于修改模态框动画                    | `string`  | `fade-in` | -         |

## Masker 事件

| 名称         | 说明                         | 类型                      | 默认值                    | 始于      |
| ------------ | ---------------------------- | ------------------------- | ------------------------- | --------- |
| close        | 用户触发关闭时触发           | `() => void`              | `() => void`              | `v1.15.9` |
| show         | 展示时过渡效果完全结束时触发 | `() => void`              | `() => void`              | `v1.15.9` |
| hide         | 关闭时过渡效果完全结束时触发 | `() => void`              | `() => void`              | `v1.15.9` |
| masker-click | 点击遮罩层触发               | `(e: MouseEvent) => void` | `(e: MouseEvent) => void` | `v1.15.9` |