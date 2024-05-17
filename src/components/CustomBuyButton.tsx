import { Button as UIButton } from '@faststore/ui'
import { usePDP, usePLP, useProductsQuery, usePage, useSearchPage, isPDP, isPLP, isSearchPage } from "@faststore/core"

export function CustomBuyButton() {
  const contextusePDP = usePDP()
  console.log(isPDP(contextusePDP), "isPDP");
  const contextusePLP = usePLP()

  console.log(contextusePLP, "contextusePLP");
  console.log(contextusePDP, "contextusePDP");


  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert('Hello User!')
      }}
    >
      {contextusePDP?.data?.product.customData}
    </UIButton>
  )
}