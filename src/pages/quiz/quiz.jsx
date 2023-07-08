import React, { useState } from 'react';
import Layoutuser from "../../layouts/LayoutUser";
import ContentQuiz from "./ContentQuiz";

export default function Pengaduan() {
    const [layoutSettings, setLayoutSettings] = useState({
        sidebarActive: 'pengaduan'
    })

    return (
        <div>
          <Layoutuser 
            sidebar={layoutSettings.sidebarActive}
          >
            <ContentQuiz />
          </Layoutuser>
        </div>
    )
}