import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentPendaftaran from "./ContentPendaftaran";

export default function Pendaftaran() {
  const [layoutSettings, setLayoutSettings] = useState({
    sidebarActive: 'progress'
  })

  return (
    <div>
      <Layoutuser 
        sidebar={layoutSettings.sidebarActive}
      >
        <ContentPendaftaran />
      </Layoutuser>
    </div>
  )
}
