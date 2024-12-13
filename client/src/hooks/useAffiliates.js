import { useState } from 'react'
import { addAffiliateApi, getAffiliatesApi } from '../middleware/affiliates'

export function useAffiliates() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [affiliates, setAffiliates] = useState(null)

  const getAffiliates = async () => {
    try {
      setLoading(true)
      const response = await getAffiliatesApi()
      setLoading(false)
      setAffiliates(response)
      console.log(response)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const addAffiliate = async (data) => {
    try {
      setLoading(true)
      const result = await addAffiliateApi(data)
      setLoading(false)
      return result
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  return {
    loading,
    error,
    affiliates,
    getAffiliates,
    addAffiliate,
  }
}
