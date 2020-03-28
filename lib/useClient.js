import { useState } from "react"

let client = {}

export const useClient = () => {
    const [ state ] = useState(client)

    return state
}

export const initClient = apolloClient => {
    client = apolloClient
}

