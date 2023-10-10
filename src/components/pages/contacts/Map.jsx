import { Container, Stack } from "@mui/material";
import React, { Component } from "react";

class MapContainer extends Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <Stack>
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: "5px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "40px 0px",
                }}
              >
                <iframe
                  title="google map"
                  style={{
                    borderRadius: "0.75rem",
                    width: "80%",
                    height: "600px",
                  }}
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.8593662206467!2d44.51143785675136!3d40.15771623419597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc6e82d7a91b%3A0xdd8341810565c752!2s65a%20Tigran%20Mets%20Ave%2C%20Yerevan%200005!5e0!3m2!1sru!2sam!4v1695823981147!5m2!1sru!2sam"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </Stack>
          </div>
        </Container>
      </>
    );
  }
}

export default MapContainer;
