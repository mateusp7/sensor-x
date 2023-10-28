import { Dispatch, SetStateAction } from "react"

export interface MenuHamburguerProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
  isOpenMenu: boolean
}
