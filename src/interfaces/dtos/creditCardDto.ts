import { CreditCardBrand } from "@/interfaces"

export interface CreditCardDto {
  id: number
  brand: CreditCardBrand
  entity: string
  lastNumbers: number
  expirationDate: string
  cvv: string
  deleted: boolean
}

export default CreditCardDto

export const mockCreditCards: CreditCardDto[] = [
  {
    id: 1,
    brand: 1,
    entity: "HSBC",
    lastNumbers: 2600,
    expirationDate: "07/25",
    cvv: "277",
    deleted: false
  },
  {
    id: 2,
    brand: 2,
    entity: "HSBC",
    lastNumbers: 5805,
    expirationDate: "08/27",
    cvv: "804",
    deleted: false
  }
]