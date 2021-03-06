import * as React from 'react'

import { Container, CreateBtn, LinkToCreate } from './elements'
import Selector from './Selector'

interface IProps {
  onChange: () => void
  section: string
}

export default class FilterBar extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public componentDidUpdate(prevProps: IProps) {
    // component updated
  }
  public onProjectChange() {
    console.log('project changed')
    this.props.onChange()
  }

  public onCategoryChange() {
    console.log('onCategoryChange')
    this.props.onChange()
  }

  public onTagsChange() {
    console.log('onTagsChange')
    this.props.onChange()
  }

  render() {
    const { section } = this.props
    return (
      <Container>
        <Selector type="project" onChange={() => this.onProjectChange()} />
        <Selector type="category" onChange={() => this.onCategoryChange()} />
        <Selector type="tags" onChange={() => this.onTagsChange()} />
        <LinkToCreate to={section + '/create'}>
          <CreateBtn border>create {section}</CreateBtn>
        </LinkToCreate>
      </Container>
    )
  }
}
