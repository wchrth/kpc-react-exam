import React from 'react'
import { Table } from 'antd'
import { css } from '@emotion/core'

const { Column } = Table

const table = css`
  margin-top: 30px;
`

class CustomerTable extends React.Component {
  state = {
    selectedRowKeys: []
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  render() {
    const { customers, onDelete } = this.props
    const { selectedRowKeys } = this.state
    return (
      <Table
        css={table}
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
    )
  }
}

export default CustomerTable
