import './index.scss'
import { useEffect, useRef } from 'react'
// 思路：
// 1. 看官方文档 把echarts加入项目  
// 如何在react获取dom -> useRef
// 在什么地方获取dom节点 -> useEffect
// 2. 不抽离定制化的参数 先把最小化的demo跑起来
// 3. 按照需求，哪些参数需要自定义 抽象出来

import * as echarts from 'echarts'

const Home = () =>{
  const domRef = useRef()
  const chartInit = ()=>{
    const myChart = echarts.init(domRef.current)
    //绘制图表
    myChart.setOption({
      title:{
        text:'Ecahrts 入门示例'
      },
      tooltip:{},
      xAxis:{
        data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
      },
      yAxis:{},
      series:{
        name:'销量',
        type:'bar',
        data:[5, 20, 36, 10, 10,20]
      }
    })
  }
  //执行这个初始化函数
  useEffect(()=>{
    chartInit()
  },[])
  return (
    <div>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={{width:'500px',height:'500px'}}></div>
    </div>
  )
}

export default Home