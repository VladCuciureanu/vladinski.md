import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import styled from "styled-components"
import useCalculateSize from "../hooks/useCalculateSize"

type DockItemProps = {
  mouseX: number | undefined
  icon: React.ReactNode
  tooltip?: string
  href?: string
  onClick?: Function
  dataKey?: string | number
}

export default function DockItem(props: DockItemProps) {
  const itemSize: number = 54
  const maxMagnification: number = 1.8
  const element = useRef<any>(null)

  const dynamicSize = useCalculateSize(
    element,
    itemSize,
    props.mouseX,
    maxMagnification,
  )

  if (props.href) {
    // Return link component
    return (
      <Link href={props.href} passHref>
        <Item
          as={motion.a}
          whileTap={{ scale: 0.85 }}
          ref={element}
          style={{
            width: dynamicSize,
            height: dynamicSize,
          }}
          key={props.dataKey}
        >
          {props.tooltip ? <Tooltip>{props.tooltip}</Tooltip> : <></>}
          {props.icon}
        </Item>
      </Link>
    )
  }

  // Return button component
  return (
    <Item
      as={motion.button}
      whileTap={{ scale: 0.85 }}
      onTap={() => (props.onClick ? props.onClick() : () => {})}
      ref={element}
      style={{
        width: dynamicSize,
        height: dynamicSize,
      }}
      key={props.dataKey}
    >
      {props.tooltip ? <Tooltip>{props.tooltip}</Tooltip> : <></>}
      {props.icon}
    </Item>
  )
}

const Item = styled(motion.button)`
  border-radius: 12px;
  text-align: center;
  outline: 0;
  border: 1px solid transparent;
  display: block;
  cursor: pointer;
  padding: 4px;

  background-image: linear-gradient(
    45deg,
    var(--colors-dock-button-color-1),
    var(--colors-dock-button-color-2),
    var(--colors-dock-button-color-1),
    var(--colors-dock-button-color-2)
  );
  background-size: 200% 100%;
  border-radius: 23%;
  font-family: var(--fonts-body);
  color: var(--colors-gray10);
  padding: 2.5%;

  & svg {
    width: 100%;
    height: 100%;
    margin-right: auto;
    stroke: var(--colors-gray10);
    stroke-width: 1.25;
  }

  &:hover {
    div {
      opacity: 1;
    }
  }
`

const Tooltip = styled.div`
  margin: 0;
  opacity: 0;
  padding: 4px 8px;
  position: absolute;
  color: var(--colors-gray-11);
  background: var(--colors-gray2);
  box-shadow: var(--shadows-small);
  font-family: var(--fonts-body);
  border: 1px solid var(--colors-gray6);
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateY(-200%);
  transition: opacity 0.125s ease-in;
  pointer-events: none;
  z-index: 9000;
`
