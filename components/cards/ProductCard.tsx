import {
  Card,
  Grid,
  Text,
  Image,
  Container,
  Col,
  Row,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card css={{ mt: "50px" }}>
          <Card.Body className="product-container">
            <Row className="text-container">
              <Grid sm={8}>
                <Image
                  className="product-image"
                  width={120}
                  height={120}
                  src="https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1661731200&Signature=gbtFkb-fsQ6khkbyvNCPyiCbbCyHbWvaqGw8Iujfon7FKgL7sjivLHbAhISYSBteXFgpFkLUgCi8j~S2kq7i8ZCqOLWrwuPm0cLnOWTZqdL1kks-vCeLEr0x5lhXfExpBEUteeYiEqeRFg2zFL~rge0KQCbN0HxXmKEFdiqMncPa-jrrTk7RmtCm0T~svH81kDDrzp6H8RgS60FSavxnU9dbCC-JVDhq3dsnKjMplRwSLcyN5XZ4txJOAV8MuunIMRfwwced2fNtfhO3Zb4nB9KMItnL-w2f0aHCXQITbYTZQkmFKEdZiiYZt6EjrKOIuFRF6JPXX2C9EPywdasEhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                ></Image>
              </Grid>
              <Grid sm={4}>
                <Text className="product-name">
                  Almohaditas rellenas de frutilla
                </Text>
                <Text className="product-reference">1 un = bolsa 500gr</Text>
                <Text className="product-supplier">
                  <FontAwesomeIcon icon={faFaceLaughBeam} />
                  Maran Atha
                </Text>
                <Text className="product-price">$270,50</Text>
              </Grid>
            </Row>
            <Row>
              <Grid sm={8} className="product-quantity">
                <Text
                  className="quantity-border"
                  onClick={() => {
                    if (quantity > 1) setQuantity((prev) => prev - 1);
                  }}
                >
                  -
                </Text>
                <Text className="quantity">{quantity}</Text>
                <Text
                  className="quantity-border"
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                >
                  +
                </Text>
              </Grid>
              <Grid sm={4}>
                <Button bordered color="warning" auto>
                  <span className="button-text">Agregar</span>
                </Button>
              </Grid>
            </Row>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
