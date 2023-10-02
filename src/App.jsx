import React from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "start" },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "node1" },
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { label: "node2" },
  },
  {
    id: "4",
    position: { x: 200, y: 100 },
    data: { label: "node4" },
  },
  {
    id: "5",
    position: { x: 200, y: 300 },
    data: { label: "node5" },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-2", source: "2", target: "3" },
  { id: "e1-2", source: "1", target: "4" },
  { id: "e1-2", source: "5", target: "4" },
];

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
      />
    </div>
  );
}
