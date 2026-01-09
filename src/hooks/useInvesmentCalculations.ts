export function useInvestmentCalculations(services: any[], discount: number) {
    const subtotal = (services || []).reduce((accumulator, currentValue) => {
        const price = Number(currentValue.value)

        const quantity = Number(currentValue.quantity) || 1

        return accumulator + (price * quantity)
    } , 0)

    const discountPercentage = Number(discount) || 0
    const discountValue = subtotal * (discountPercentage)/100
    const serviceLength = services.length

    const total = subtotal - discountValue

    return {subtotal, discountPercentage, discountValue , total, serviceLength}
}