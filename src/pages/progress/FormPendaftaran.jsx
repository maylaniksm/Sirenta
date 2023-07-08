import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentFormPendaftaran from "./ContentFormPendaftaran";

export default function Pendaftaran() {
  const [layoutSettings, setLayoutSettings] = useState({
    sidebarActive: 'progress'
  })

  return (
    <div>
      <Layoutuser 
        sidebar={layoutSettings.sidebarActive}
      >
        <ContentFormPendaftaran />
      </Layoutuser>
    </div>
  )
}
