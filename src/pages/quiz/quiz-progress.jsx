import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentQuizProgress from "./ContentQuizProgress";

export default function Pengaduan() {
    const [layoutSettings, setLayoutSettings] = useState({
        sidebarActive: 'pengaduan'
    })

    return (
        <div>
          <Layoutuser 
            sidebar={layoutSettings.sidebarActive}
          >
            <ContentQuizProgress />
          </Layoutuser>
        </div>
    )
}