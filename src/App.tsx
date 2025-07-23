import { BarChart3D } from './bar-chart-3d/BarChart3D';
import './App.css';

const sampleData = [
    { year: 2020, performancePercent: { value: 150, precision: 2 } },
    { year: 2021, performancePercent: { value: -50, precision: 2 } },
    { year: 2022, performancePercent: { value: 200, precision: 2 } },
    { year: 2023, performancePercent: { value: 75, precision: 2 } },
];

function App() {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <h2 style={{ marginBottom: 24, fontWeight: 600, fontSize: 24 }}>3D Bar Chart Demo</h2>
            <p style={{ maxWidth: 500, textAlign: 'center', marginBottom: 32 }}>
                This interactive 3D bar chart visualizes yearly performance data. You can rotate the chart by dragging,
                and hover over bars to highlight them. The chart is rendered using React Three Fiber and Drei.
            </p>
            <div style={{ width: 600, height: 400 }}>
                <BarChart3D data={sampleData} />
            </div>
        </div>
    );
}

export default App;
