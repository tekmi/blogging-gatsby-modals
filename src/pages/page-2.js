import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { useSingleModal } from "../contexts/SingleModalContext"

const SecondPage = () => {
  const { toggle, close, setContent } = useSingleModal()

  const toggleModalWithContent = (cont) => {
    setContent(cont)
    toggle()
  }

  return (
    <>
      <SEO title="Page two"/>
      <Button color="danger" onClick={() => toggleModalWithContent(() => {
        return (
          <>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
              Another Test Another Test Another Test Another Test Another Test
              Another Test Another Test Another Test Another Test Another Test
              Another Test Another Test
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => close()}>Do Something</Button>{" "}
              <Button color="secondary" onClick={() => close()}>Cancel</Button>
            </ModalFooter>
          </>
        )
      })}>Modal with Buttons</Button>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default SecondPage
