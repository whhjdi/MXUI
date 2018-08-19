# MXUI

[![Build Status](https://www.travis-ci.org/whhjdi/MXUI.svg?branch=master)](https://www.travis-ci.org/whhjdi/MXUI)

## 介绍

我的UI组件项目-沐雪UI(MXUI)

## 开始使用
1. 添加css样式
	请在css中使用border-box
	```css
	*,*::before,*::after{
		box-sizing: border-box;
	}
	```
	```css
	:root {
			--button-height: 32px;
			--button-bg: white;
			--button-active-bg: #eee;
			--font-size: 14px;
			--border-radius: 4px;
			--color: #333;
			--border-color: #999;
			--border-color-hover: #666;
		}
	```
2. 安装 mxvui
```
npm i mxvui
```
3. 引入并注册组件
```

```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码





















## 笔记
1. props的对象写法
```javascript
props:{
		icon:{},
		iconPosition:{
			type:String,
			default:'left',
			validator(value){
				return !(value!=='left' && value!=='right')
			}
		}
	}
```
2. 巧用flex的order,改变图标和文字的顺序
3. 解决相邻button的border问题
```css
	margin-left:-1;
	&:hover{z-index:1;}
```
4. TDD(测试驱动开发),BDD(行为驱动开发),Assert
5. chaijs
