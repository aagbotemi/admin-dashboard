import React from 'react'

const StatusBadge = ({ type }) => {
    return <span className={"text-xs rounded-md px-2 py-1 widgetLgButton " + type}>{type}</span>
}

export default StatusBadge;