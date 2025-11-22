
import { Button } from "./button";

export default {
    title: "Компоненты/Button",
    component: Button,
    parameters: {
        layout: "centered",
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
    },
    tags: ['autodocs']
}

export const Primary = {
    args: {
        appearance: "primary",
        text: "Hello primary",
        size: "small"
    }
}

export const SizeBase = {
    args: {
        appearance: "primary",
        text: "Hello primary",
        size: "base"
    }
}

export const SizeSmall = {
    args: {
        appearance: "primary",
        text: "Hello primary",
        size: "small"
    }
}

export const iconBefore = {
    args: {
        appearance: "primary",
        text: "Hello primary",
        size: "small",
        iconBefore: "user"
    }
}
