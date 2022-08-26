import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function BasicUsage({hooks}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}></Button> */}
      <img
        src="data:image/png;base64,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"
        style={{
          height: "30px",
          width: "30px",
          backgroundColor: "white",
          marginTop: "0.4vh",
          marginLeft: hooks ? "0px": "1vw",
        }}
        alt=""
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} style={{ height: "500vh" }}>
        <ModalOverlay />
        <ModalContent style={{ height: "100%", margin: "0% 0% 0% 70%" }}>
          <ModalHeader style={{ fontWeight: "750" }}>Bag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              style={{
                fontWeight: "750",
                fontSize: "1.5rem",
                justifyContent: "center",
                // border: "1px solid red",
                marginTop: "40vh",
                textAlign: "center",
                width: "20vw",
                marginLeft: "5vw",
              }}
            >
              <h1>Your Shopping Bag is Empty</h1>
            </div>
            <div
              style={{
                fontWeight: "400",
                // fontSize: "1.5rem",
                justifyContent: "center",
                // border: "1px solid red",
                marginTop: "1vh",
                textAlign: "center",
                width: "20vw",
                marginLeft: "5vw",
              }}
            >
              <p>This feels too light! Go on, add all your favourites</p>
            </div>
            <Button
              style={{
                backgroundColor: "#fb2e79",
                margin: "1vw 0vw 0vw 7vw",
                height: "8vh",
                color: "white",
                fontWeight: "700",
                width: "17vw",
              }}
              mr={3}
              onClick={onClose}
            >
              Start Shopping
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BasicUsage;
