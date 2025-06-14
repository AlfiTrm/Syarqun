import { JSX } from "react"

export interface IConceptCard {
    id: number
    title: string
    icon: JSX.ElementType
    summary: string
    details: string
    expanded: boolean
    onToggle: () => void
}