import { ThemeColors } from "../components/ButtonCircle"
import { colors } from "../theme"
import { FilterStatus } from "../enums/FilterStatus"

export type FilterStatusProps = {
    label: string
    iconColor: ThemeColors
    color: ThemeColors
    backgroundColor: ThemeColors
}

export const FilterStatusConfig: Record<
    FilterStatus, 
    FilterStatusProps
> = {
    [FilterStatus.APPROVED]: {
        label: "Aprovado",
        iconColor: colors.feedback["success-base"],
        color: colors.feedback["success-dark"],
        backgroundColor: colors.feedback["success-light"]
    },
    [FilterStatus.DENIED]: {
        label: "Recusado",
        iconColor: colors.feedback["danger-base"],
        color: colors.feedback["danger-dark"],
        backgroundColor: colors.feedback["danger-light"]
    },
    [FilterStatus.DRAFT]: {
        label: "Rascunho",
        iconColor: colors.gray[400],
        color: colors.gray[500],
        backgroundColor: colors.gray[300]
    },
    [FilterStatus.SEND]: {
        label: "Enviado",
        iconColor: colors.feedback["info-base"],
        color: colors.feedback["info-dark"],
        backgroundColor: colors.feedback["info-light"]
    }
}