import { MenuHamburguerProps } from "@/lib/types/menu-hamburguer.type"

export const MenuHamburguer = ({
  isOpenMenu,
  setIsOpenMenu,
}: MenuHamburguerProps) => {
  return (
    <button
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      className={
        "flex flex-col p-3 space-y-2 border rounded shadow border-black-10 dark:border-neutral-2 md:hidden max-w-max"
      }
    >
      <span
        className={`${
          isOpenMenu ? "translate-y-2 rotate-45" : ""
        } transition-transform duration-200 delay-100 ease-in-out block w-8 h-0.5 bg-neutral-3 dark:bg-black-20 rounded-md`}
      />
      <span
        className={`${
          isOpenMenu ? "opacity-0 delay-0" : "opacity-100 delay-200"
        } transition-opacity duration-100 ease-in-out w-8 h-0.5 bg-neutral-3 dark:bg-black-20 rounded-md`}
      />
      <span
        className={`${
          isOpenMenu ? "-translate-y-3 -rotate-45 " : ""
        } transition-transform duration-200 delay-100 ease-in-out block w-8 h-0.5 bg-neutral-3 dark:bg-black-20 rounded-md`}
      />
    </button>
  )
}
