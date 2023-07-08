import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentPendaftaran from "./ContentPendaftaran";

export default function Pengaduan() {
    const [layoutSettings, setLayoutSettings] = useState({
        sidebarActive: 'pendaftaran'
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