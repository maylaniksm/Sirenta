import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentProgress from "./ContentProgress";

export default function Dashboard() {
  const [layoutSettings, setLayoutSettings] = useState({
    sidebarActive: 'dashboard'
  })

  return (
    <div>
      <Layoutuser 
        sidebar={layoutSettings.sidebarActive}
      >
        <ContentProgress />
      </Layoutuser>
    </div>
  )
}
