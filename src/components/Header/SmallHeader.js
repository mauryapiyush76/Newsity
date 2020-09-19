import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const SmallHeader = ({ title }) => {
    return (
        <IonHeader>
            <IonToolbar
                style={{
                    background: "#6338ff",
                }}
                color="primary"
            >
                <IonTitle size="large">{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default SmallHeader;