import * as React from 'react'

import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return (
    <Link href="/" passHref>
      <IconButton {...other} />
    </Link>
  )
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

interface ExpandCollapseProps {
  children: React.ReactNode | React.ReactNode[]
  isExpanded: boolean
  handleExpandClick: () => void
}

const ExpandCollapse: React.FC<ExpandCollapseProps> = ({ children, isExpanded, handleExpandClick }) => {
  return (
    <>
      <ExpandMore
        expand={isExpanded}
        onClick={() => handleExpandClick()}
        aria-expanded={isExpanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  )
}

export default ExpandCollapse
