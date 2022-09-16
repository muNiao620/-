// 封装图表bar组件
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const Bar =({title, xData, yData, style})=>{
  const domRef = useRef()
  const chartInit = ()=>{
    const myChart = echarts.init(domRef.current)
    //绘制图表
    myChart.setOption({
      title:{
        text: title
      },
      tooltip:{},
      xAxis:{
        data: xData
      },
      yAxis:{},
      series:{
        name:'销量',
        type:'bar',
        data: yData
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
      <div ref={domRef} style={style}></div>
    </div>
  )
}

export default Bar