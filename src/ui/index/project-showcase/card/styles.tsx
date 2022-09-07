import styled from "styled-components"
import CalendarSvg from "public/assets/graphics/icons/calendar.svg"
import { Project } from "contentlayer/generated"
import Glass from "@/ui/shared/glass"

const Card = styled(Glass)`
  display: flex;
  flex: 1 auto 1;
  flex-direction: column;
  justify-content: left;
  min-width: 100%;
  height: 8rem;
  padding: 1.5rem;
  padding-top: 1.35rem;
  padding-bottom: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: var(--colors-fg);
`

const Name = styled.h2`
  font-size: 1rem;
  line-height: 1rem;
`

const Description = styled.p`
  margin-top: 0.45rem;
  font-size: 0.9rem;
  line-height: 1rem;
  flex-grow: 1;
  color: rgb(var(--colors-gray-11));
`

const Flairs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  color: rgb(var(--colors-gray-9));
`

const Flair = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`

const CalendarIcon = styled(CalendarSvg)`
  height: 0.85rem;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Pill = styled.div`
  font-size: 0.75rem;
  line-height: 0.85rem;
  padding: 0.15rem;
  padding-left: 0.45rem;
  padding-right: 0.45rem;
  margin-left: 0.75rem;
  margin-top: 2px;
  border: 1px solid;
  border-radius: var(--radii-3);
`

function StatusPill({ status }: { status: Project["status"] }) {
  var color = "rgb(var(--colors-gray-11))"
  var label = "Unicorn"

  switch (status) {
    case "unreleased":
      label = "Unreleased"
      break
    case "work-in-progress":
      label = "Work-In-Progress"
      color = "rgb(var(--colors-amber-10))"
      break
    case "released":
      label = "Released"
      color = "rgb(var(--colors-green-9))"
      break
    case "discontinued":
      label = "Discontinued"
      color = "rgb(var(--colors-red-9))"
      break
    case "private":
      label = "Private"
      color = "rgb(var(--colors-blue-9))"
      break
  }
  return <Pill style={{ color: color, borderColor: color }}>{label}</Pill>
}

const ProjectPreviewCardStyles = {
  Card,
  Anchor,
  Name,
  Description,
  Flairs,
  Flair,
  CalendarIcon,
  FlexRow,
  StatusPill,
}

export default ProjectPreviewCardStyles
