import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentDashboard from "./ContentDashboard";

export default function Dashboard() {
  const [layoutSettings, setLayoutSettings] = useState({
    sidebarActive: 'dashboard'
  })

  return (
    <div>
      <Layoutuser 
        sidebar={layoutSettings.sidebarActive}
      >
        <ContentDashboard />
      </Layoutuser>
    </div>
  )
}
