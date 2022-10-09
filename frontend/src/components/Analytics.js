
import Skeleton from "./Skeleton";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { Liquid ,Column } from '@ant-design/plots';
import { Row, Col } from 'antd';
import { Bullet } from '@ant-design/plots';

const Analytics = () => {
  const data = [
    {
      type: 'Data Science',
      value: 45,
    },
    {
      type: 'Cybersecurity',
      value: 46,
    },
    {
      type: 'Artificial Intellligence',
      value: 51,
    },
    {
      type: 'Big Data',
      value: 9,
    },
    {
      type: 'General',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          fontSize: 16,
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Specialization Wise\nDistribution',
      },
    },
  };
  const configbub = {
    percent: 0.35,
    color: '#6194f9',
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    
  };
  
  const configspeed = {
    percent: 0.5,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
    
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };
  const configspeed1 = {
    percent: 0.25,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      }
    }
  }
    
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const configcol = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  const datapro = [
    {
      title: '满意度',
      ranges: [40, 70, 100],
      measures: [30, 50],
      target: 85,
    },
  ];
  const configpro = {
    datapro,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: ['#5B8FF9', '#61DDAA'],
      target: '#39a3f4',
    },
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff',
        },
      },
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    tooltip: {
      showMarkers: false,
      shared: true,
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: '差',
          name: '差',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFbcb8',
              r: 5,
            },
          },
        },
        {
          value: '良',
          name: '良',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFe0b0',
              r: 5,
            },
          },
        },
        {
          value: '优',
          name: '优',
          marker: {
            symbol: 'square',
            style: {
              fill: '#bfeec8',
              r: 5,
            },
          },
        },
        {
          value: '第一季度',
          name: '第一季度',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
        {
          value: '第二季度',
          name: '第二季度',
          marker: {
            symbol: 'square',
            style: {
              fill: ' #61DDAA',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#39a3f4',
              r: 5,
            },
          },
        },
      ],
    },
  };

  
  return(<> <Skeleton/>
  <h1>Analytics And Reporting</h1>
  <center>
  <h1>Analytics And Reporting</h1>
  <Pie {...config} style={{padding:100,
  display:"flex",
  width:"50%"}}/>
  <h3>Placement Rate </h3>
  <Liquid {...configbub} />
  <h3>Average Package  </h3>
  <Column {...configcol} style={{padding:100,
  display:"flex",
  width:"50%"}}/>
  {/* <Bullet {...configpro} /> */}
  </center>
  </>
  );
};

export default Analytics
