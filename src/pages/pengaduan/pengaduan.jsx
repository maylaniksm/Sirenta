import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentPengaduan from "./ContentPengaduan";

export default function Pengaduan() {
    const [layoutSettings, setLayoutSettings] = useState({
        sidebarActive: 'pengaduan'
    })

    return (
        <div>
          <Layoutuser 
            sidebar={layoutSettings.sidebarActive}
          >
            <ContentPengaduan />
          </Layoutuser>
        </div>
    )
}