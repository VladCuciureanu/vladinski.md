import styled from "styled-components"

export default function NoiseFilter({ opacity = 0.15 }: { opacity?: number }) {
  return (
    <Svg style={{ opacity: opacity }}>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".80"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </Svg>
  )
}

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: fixed;
  isolation: isolate;
  z-index: 1;
  mix-blend-mode: soft-light;
`
