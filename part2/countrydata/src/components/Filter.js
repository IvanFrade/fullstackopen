import React from "react"

const Filter = ({ filter, handle }) => (
    <div>
      filter by name: <input
        value={filter}
        onChange={handle}
      />
    </div>
)

export default Filter