const status = {
    APPROVE: {
      action: 'Approve',
      active: true,
    },
    PENDING_APPROVAL: {
      action: 'Pending Approval',
      active: true,
    },
    REJECT: {
      action: 'Reject',
      active: false,
    },
    INACTIVE: {
      action: 'Inactive',
      active: false,
    },
    CLOSED: {
      action: 'Closed',
      active: false,
    },
}

module.exports = status
