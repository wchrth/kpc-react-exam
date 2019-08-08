import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Table, Button } from 'antd'

const { Column } = Table

const button = css`
  margin-bottom: 10px;
`

const Container = styled('div')`
  padding-top: 30px;
`

class CustomerTable extends React.Component {
  state = {
    selectedRowKeys: []
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  render() {
    const { customers, onDelete, onBulkDelete } = this.props
    const { selectedRowKeys } = this.state
    return (
      <Container>
        <Button css={button} onClick={() => onBulkDelete(selectedRowKeys)}>
          Delete
        </Button>
        <Table
          rowKey="id"
          dataSource={customers}
          rowSelection={{
            selectedRowKeys,
            onChange: this.onSelectChange
          }}
        >
          <Column title="First Name" dataIndex="firstName" />
          <Column title="Last Name" dataIndex="lastName" />
          <Column title="Gender" dataIndex="gender" />
          <Column title="Mobile Phone" dataIndex="phone" />
          <Column title="Nationality" dataIndex="nationality" />
          <Column
            dataIndex="action"
            render={(text, record) => (
              <>
                <a onClick={() => onDelete(record.id)}>Delete</a>
              </>
            )}
          />
        </Table>
      </Container>
    )
  }
}

export default CustomerTable
