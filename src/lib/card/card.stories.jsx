
import { Card } from "./card";

export default {
    title: "Компоненты/Card",
    component: Card,
    parameters: {
        layout: "centered",
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "beta"
        },
    },
    tags: ['autodocs']
}


export const CardDefault = {
    args: {
        text: "Hello card",
        newsData: "12.12.2025",
        badgeText: "Hot",
        buttonText: "Go to"
    }
}


export const textLarge = {
    args: {
        appearance: "blue",
        textSize: "large",
        text: "Hello card",
        newsData: "12.12.2025",
        badgeText: "Hot",
        buttonText: "Go to"
    }
}