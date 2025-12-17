import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
// 수정된 데이터 가져오기
import { careerHistory } from '../data/salaryData';

const SalaryPage: React.FC = () => {
  return (
    <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '10px' }}>
        📈 커리어 성장 지수 <span style={{fontSize: '1rem', color: '#888'}}>(Index)</span>
      </h1>
      
      <p style={{ marginBottom: '3rem', color: '#666', fontSize: '1.1rem' }}>
        신입 시절(2016)을 <strong>100</strong>으로 설정했을 때의 상대적 성장 지표입니다.
      </p>

      <div style={{ width: '100%', height: 500, background: '#fff', border: '1px solid #e0e0e0', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={careerHistory} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="colorIndex" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6c5ce7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6c5ce7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            
            <XAxis 
              dataKey="year" 
              tick={{fontSize: 14}} 
              tickMargin={10} 
              axisLine={false} 
              tickLine={false} 
            />
            
            <YAxis 
              domain={[0, 'auto']} 
              tickFormatter={(value) => value === 100 ? 'Base(100)' : value}
              tick={{fontSize: 12}} 
              axisLine={false} 
              tickLine={false}
            />
            
            {/* 기준선 100 */}
            <ReferenceLine y={100} stroke="#fab1a0" strokeDasharray="3 3" label={{ position: 'right', value: 'Start', fill: '#fab1a0', fontSize: 12 }} />
            
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
              cursor={{ stroke: '#6c5ce7', strokeWidth: 1, strokeDasharray: '5 5' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  // 지수를 100으로 나눠서 '배수'를 계산 (예: 292.9 -> 2.92배)
                  const multiple = (data.index / 100).toFixed(2);
                  
                  return (
                    <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', border: '1px solid #eee' }}>
                      <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '0 0 8px 0', color: '#2d3436' }}>
                        {label}년
                      </p>
                      <span style={{ background: '#dfe6e9', color: '#636e72', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem' }}>
                        {data.event}
                      </span>
                      <div style={{ marginTop: '10px', color: '#6c5ce7', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Index: {data.index}
                      </div>
                      <p style={{ margin: '5px 0 0 0', color: '#b2bec3', fontSize: '0.9rem' }}>
                        (신입 대비 <strong>{multiple}배</strong> 성장)
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            
            <Legend wrapperStyle={{ paddingTop: '20px' }}/>
            
            <Area 
              type="monotone" 
              dataKey="index" 
              stroke="#6c5ce7" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorIndex)" 
              name="성장 지수 (Base 100)" 
              activeDot={{ r: 8, strokeWidth: 0 }}
              animationDuration={2000} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '2rem', padding: '20px', background: '#f1f2f6', borderRadius: '12px', borderLeft: '6px solid #6c5ce7' }}>
         <h3 style={{marginTop: 0, color: '#2d3436'}}>💡 Insight</h3>
         <p style={{marginBottom: 0, lineHeight: 1.6, color: '#636e72'}}>
            2016년을 100으로 시작하여, 2023년에는 <strong>약 3배에 가까운 성장(292.9)</strong>을 기록했습니다.<br/>
            이후 시장 상황에 따른 조정이 있었으나, <strong>2025년 다시 반등하며 우상향 추세</strong>를 이어가고 있습니다.
         </p>
      </div>
    </div>
  );
};

export default SalaryPage;
