# 3D Bar Charts with React Three Fiber

This project features interactive 3D bar charts built using [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), a React renderer for Three.js. The charts are highly customizable and animated, making them suitable for data visualization in modern web applications.

## Features
- 3D bar chart rendering with smooth animations
- Customizable axes, tooltips, and styles
- Modular component structure for easy integration
- Built with TypeScript for type safety

## Example

![3D Bar Chart Example](https://i.imgur.com/CrwSZSG.gif)

## Usage
The main 3D bar chart components are located in `src/bar-chart-3d/`:
- `BarChart3D.tsx`: Main chart component
- `Bar.tsx`: Individual bar rendering
- `Chart.tsx`: Chart layout and logic
- `Tooltip.tsx`: Interactive tooltips
- `axes/`: Axis and grid line components
- `hooks/`: Animation hooks for bar height and chart tilt

To use the 3D bar chart, import and render the `BarChart3D` component in your React app:

```tsx
import { BarChart3D } from './bar-chart-3d/BarChart3D';

<BarChart3D data={yourData} />
```

See the source files for more customization options.

