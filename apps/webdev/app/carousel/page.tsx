"use client";
import { Carousel } from "@raikou/carousel";

export default function Page() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel
        withIndicators
        height={300}
        // slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
      >
        <Carousel.Slide
          style={{
            backgroundColor: "var(--color-blue-200)",
            color: "var(--raikou-color-white)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "calc(3.125rem * var(--raikou-scale))",
            fontWeight: "bold",
          }}
        >
          1
        </Carousel.Slide>
        <Carousel.Slide
          style={{
            backgroundColor: "var(--raikou-color-yellow-outline)",
            color: "var(--raikou-color-white)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "calc(3.125rem * var(--raikou-scale))",
            fontWeight: "bold",
          }}
        >
          2
        </Carousel.Slide>
        <Carousel.Slide
          style={{
            backgroundColor: "var(--raikou-color-blue-filled)",
            color: "var(--raikou-color-white)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "calc(3.125rem * var(--raikou-scale))",
            fontWeight: "bold",
          }}
        >
          3
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
