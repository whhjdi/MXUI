# MXUI
我的UI组件项目-沐雪UI(MXUI)

作者: 沐雪

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